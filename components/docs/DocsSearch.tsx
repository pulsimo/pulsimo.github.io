'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { CornerDownLeft, FileText, Hash, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export type SearchEntry = {
  title: string
  description: string
  href: string
  headings: { text: string; id: string }[]
}

type Result = { title: string; context: string; href: string; kind: 'page' | 'section'; score: number }

function score(text: string, terms: string[]) {
  const t = text.toLowerCase()
  let s = 0
  for (const term of terms) {
    const i = t.indexOf(term)
    if (i === -1) return 0
    s += i === 0 ? 3 : t[i - 1] === ' ' ? 2 : 1
  }
  return s
}

function search(index: SearchEntry[], query: string): Result[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) {
    return index.slice(0, 8).map((e) => ({ title: e.title, context: e.description, href: e.href, kind: 'page', score: 0 }))
  }
  const results: Result[] = []
  for (const e of index) {
    const t = score(e.title, terms)
    const d = score(e.description, terms)
    if (t || d) results.push({ title: e.title, context: e.description, href: e.href, kind: 'page', score: t * 4 + d })
    for (const h of e.headings) {
      const s = score(h.text, terms)
      if (s) results.push({ title: h.text, context: e.title, href: `${e.href}#${h.id}`, kind: 'section', score: s * 2 })
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 20)
}

export default function DocsSearch({ index }: { index: SearchEntry[] }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const router = useRouter()
  const results = useMemo(() => search(index, query), [index, query])

  useEffect(() => {
    const onOpen = () => setOpen(true)
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('docs-search:open', onOpen)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('docs-search:open', onOpen)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const go = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      go(results[active].href)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search documentation">
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-950 dark:shadow-[0_0_80px_-20px_rgba(139,92,246,0.5)]"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-white/10">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search the docs, e.g. Fluent Bit, SLO, SMTP"
                className="h-14 flex-1 bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                aria-label="Search"
              />
              <kbd className="rounded border border-slate-200 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 dark:border-white/10">Esc</kbd>
            </div>
            <ul ref={listRef} className="docs-scroll max-h-[55vh] overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-10 text-center text-sm text-slate-500">Nothing found for “{query}”.</li>}
              {results.map((r, i) => {
                const Icon = r.kind === 'page' ? FileText : Hash
                return (
                  <li key={`${r.href}-${i}`} data-index={i}>
                    <button
                      type="button"
                      onMouseMove={() => setActive(i)}
                      onClick={() => go(r.href)}
                      className={cn(
                        'flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left',
                        i === active ? 'bg-violet-500/10 dark:bg-violet-500/15' : '',
                      )}
                    >
                      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', i === active ? 'text-violet-500' : 'text-slate-400')} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-slate-900 dark:text-white">{r.title}</span>
                        <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{r.context}</span>
                      </span>
                      {i === active && <CornerDownLeft className="mt-1 h-3.5 w-3.5 text-slate-400" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
