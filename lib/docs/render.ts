import fs from 'node:fs'
import path from 'node:path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'
import type { Element, Root } from 'hast'
import { ALL_DOCS, DocItem, docHref, findDoc } from './manifest'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'docs')

export type TocEntry = { id: string; text: string; depth: 2 | 3 }

export type RenderedDoc = {
  item: DocItem
  html: string
  toc: TocEntry[]
}

type Change = { date: string; doc: DocItem; body: string }

// ---------------------------------------------------------------------------
// Markdown preparation
// ---------------------------------------------------------------------------

// Guide chapters are numbered (01-…md to 28-…md) and refer to each other as
// "chapter 25". Map those numbers to the pages they became.
const chapters = new Map<number, DocItem>()
const chapterFiles = new Map<string, DocItem>()
for (const doc of ALL_DOCS) {
  const m = doc.file.match(/^guide\/((\d\d)-.+\.md)$/)
  if (m) {
    chapters.set(Number(m[2]), doc)
    chapterFiles.set(m[1], doc)
  }
}

function chapterLink(n: string) {
  const doc = chapters.get(Number(n))
  return doc ? `[${doc.title}](${docHref(doc.slug)})` : `chapter ${n}`
}

function rewriteLinks(md: string) {
  return (
    md
      // [chapter 13](13-logs.md#anchor) and [Title](13-logs.md)
      .replace(/\[([^\]]+)\]\((\d\d-[a-z0-9-]+\.md)(#[^)]*)?\)/g, (all, text: string, file: string, hash = '') => {
        const doc = chapterFiles.get(file)
        if (!doc) return all
        const label = /^chapter \d+$/i.test(text) ? doc.title : text
        return `[${label}](${docHref(doc.slug)}${hash})`
      })
      .replace(/\]\((?:\.\.\/)?architecture\/metrics-pipeline\.md\)/g, '](/docs/architecture/)')
      .replace(/\]\((?:\.\.\/)?(?:user-guide\/)?README\.md\)/g, '](/docs/)')
      // bare "chapter 25" (optionally followed by its name in italics)
      .replace(/(?<!\[)\b[Cc]hapter (\d{1,2})\b(?:, \*[^*]+\*)?(?!\])/g, (_, n: string) => chapterLink(n))
  )
}

const CHANGE_HEADING = /^(#{2,3}) (?:What changed \(([^)]+)\)|Fixed on (.+))\s*$/

/**
 * Removes the chapter's own H1 and its manual contents list, and takes the
 * dated "What changed" sections out so they can go to the release notes.
 */
function prepare(md: string) {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  const changes: { date: string; body: string }[] = []
  let skipLevel = 0
  let current: { date: string; lines: string[] } | null = null
  let inFence = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/^```/.test(line)) inFence = !inFence

    if (!inFence) {
      const heading = line.match(/^(#{1,6}) /)
      if (heading && skipLevel && heading[1].length <= skipLevel) {
        skipLevel = 0
        if (current) changes.push({ date: current.date, body: current.lines.join('\n').trim() })
        current = null
      }
      const change = line.match(CHANGE_HEADING)
      if (change) {
        skipLevel = change[1].length
        current = { date: (change[2] || change[3]).trim(), lines: [] }
        continue
      }
      if (!skipLevel && /^# /.test(line) && !out.some((l) => l.trim())) continue
    }

    if (skipLevel) {
      current?.lines.push(line)
      continue
    }
    // Section rules: every h2 already draws one
    if (!inFence && /^---\s*$/.test(line)) continue
    out.push(line)
  }
  if (current) changes.push({ date: current.date, body: current.lines.join('\n').trim() })

  // A run of "- [Section](#anchor)" lines is a hand-made contents list; the
  // page has its own.
  const text = out
    .join('\n')
    .replace(/(?:^- \[[^\]]+\]\(#[^)]+\)[^\n]*\n){3,}/gm, '')

  return {
    body: rewriteLinks(text).trim() + '\n',
    changes: changes.map((c) => ({ ...c, body: rewriteLinks(c.body).replace(/ \(migration \d+\)/g, '') })),
  }
}

function readSource(file: string) {
  return fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
}

// ---------------------------------------------------------------------------
// HTML
// ---------------------------------------------------------------------------

function rehypeDocs(toc: TocEntry[]) {
  return () => (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if ((node.tagName === 'h2' || node.tagName === 'h3') && node.properties?.id) {
        const id = String(node.properties.id)
        toc.push({ id, text: toString(node), depth: node.tagName === 'h2' ? 2 : 3 })
        node.children.push({
          type: 'element',
          tagName: 'a',
          properties: { href: `#${id}`, className: ['heading-anchor'], ariaLabel: 'Link to this section' },
          children: [{ type: 'text', value: '#' }],
        })
      }
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        parent.children[index] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['docs-table'] },
          children: [node],
        }
        return 'skip'
      }
      if (node.tagName === 'a') {
        const href = String(node.properties?.href ?? '')
        if (/^https?:\/\//.test(href)) {
          node.properties = { ...node.properties, target: '_blank', rel: ['noopener', 'noreferrer'] }
        }
      }
    })
  }
}

async function toHtml(md: string) {
  const toc: TocEntry[] = []
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: { light: 'github-light', dark: 'github-dark-dimmed' },
      keepBackground: false,
      defaultLang: { block: 'plaintext', inline: 'plaintext' },
      bypassInlineCode: true,
    })
    .use(rehypeDocs(toc))
    .use(rehypeStringify)
    .process(md)
  return { html: String(file), toc }
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

let prepared: Map<string, { body: string; changes: Change[] }> | null = null

function allPrepared() {
  if (prepared) return prepared
  prepared = new Map()
  for (const doc of ALL_DOCS) {
    if (doc.generated) continue
    const { body, changes } = prepare(readSource(doc.file))
    prepared.set(doc.slug, { body, changes: changes.map((c) => ({ ...c, doc })) })
  }
  return prepared
}

function demote(md: string, by: number) {
  let inFence = false
  return md
    .split('\n')
    .map((line) => {
      if (/^```/.test(line)) inFence = !inFence
      if (inFence) return line
      return line.replace(/^(#{1,5}) /, (_, h: string) => '#'.repeat(Math.min(6, h.length + by)) + ' ')
    })
    .join('\n')
}

function apiReference() {
  const parts = [
    'Every endpoint is under `/api/v1` on the API address (port 8080 by default) and needs a signed-in session or an API key: see [Authentication](/docs/api/auth/). The core resources come first; the rest are grouped by feature, with details on each feature\'s page.',
    readSource('api-core.md'),
  ]
  for (const doc of ALL_DOCS) {
    const entry = allPrepared().get(doc.slug)
    if (!entry) continue
    const m = entry.body.match(/^## API[^\n]*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)
    if (!m) continue
    parts.push(`## ${doc.title}\n\n${demote(m[1].trim(), 1)}\n\nMore in [${doc.title}](${docHref(doc.slug)}).`)
  }
  return parts.join('\n\n')
}

function parseDate(d: string) {
  const t = Date.parse(d)
  return Number.isNaN(t) ? 0 : t
}

function releaseNotes() {
  const byDate = new Map<string, Change[]>()
  for (const entry of allPrepared().values()) {
    for (const c of entry.changes) {
      byDate.set(c.date, [...(byDate.get(c.date) ?? []), c])
    }
  }
  const dates = [...byDate.keys()].sort((a, b) => parseDate(b) - parseDate(a))
  const parts = [
    'Pulsimo is in beta and changes often. These notes come from each feature page and list what was fixed or added, newest first.',
  ]
  for (const date of dates) {
    parts.push(`## ${date}`)
    for (const c of byDate.get(date)!) {
      parts.push(`### ${c.doc.title}\n\n${demote(c.body, 2)}\n\nRead [${c.doc.title}](${docHref(c.doc.slug)}).`)
    }
  }
  return parts.join('\n\n')
}

const cache = new Map<string, Promise<RenderedDoc>>()

export function getDoc(slug: string): Promise<RenderedDoc> {
  const item = findDoc(slug)
  if (!item) throw new Error(`Unknown doc: ${slug}`)
  if (!cache.has(slug)) {
    const md =
      item.generated === 'api'
        ? apiReference()
        : item.generated === 'release-notes'
          ? releaseNotes()
          : allPrepared().get(slug)!.body
    cache.set(
      slug,
      toHtml(md).then(({ html, toc }) => ({ item, html, toc })),
    )
  }
  return cache.get(slug)!
}

/** Titles and section headings of every page, for search. */
export async function searchIndex() {
  return Promise.all(
    ALL_DOCS.map(async (d) => {
      const { toc } = await getDoc(d.slug)
      return {
        title: d.title,
        description: d.description,
        href: docHref(d.slug),
        headings: toc.filter((t) => t.depth === 2).map((t) => ({ text: t.text, id: t.id })),
      }
    }),
  )
}

export type SearchEntry = Awaited<ReturnType<typeof searchIndex>>[number]
