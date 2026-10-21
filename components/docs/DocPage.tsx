import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { ALL_DOCS, docHref, findDoc, sectionOf } from '@/lib/docs/manifest'
import { getDoc } from '@/lib/docs/render'
import DocsToc from './DocsToc'
import DocEnhancer from './DocEnhancer'

export function docMetadata(slug: string): Metadata {
  const doc = findDoc(slug)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: docHref(slug) },
    openGraph: { title: `${doc.title} | Pulsimo docs`, description: doc.description, url: docHref(slug) },
  }
}

export default async function DocPage({ slug }: { slug: string }) {
  const { item, html, toc } = await getDoc(slug)
  const section = sectionOf(slug)
  const i = ALL_DOCS.findIndex((d) => d.slug === slug)
  const prev = i > 0 ? ALL_DOCS[i - 1] : { slug: '', title: 'Overview' }
  const next = ALL_DOCS[i + 1]

  return (
    <div className="flex gap-12 xl:gap-16">
      <article className="min-w-0 flex-1 pb-24">
        <header className="relative border-b border-slate-200 pb-8 dark:border-white/[0.06]">
          <nav aria-label="Breadcrumb" className="hidden items-center lg:flex gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
            <Link href="/docs/" className="transition hover:text-slate-900 dark:hover:text-white">Docs</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-violet-600 dark:text-violet-400">{section?.title}</span>
          </nav>
          <h1 className="text-3xl lg:mt-3 font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{item.title}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
        </header>

        <div id="doc-content" className="docs-prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        <DocEnhancer containerId="doc-content" />

        <nav aria-label="Previous and next page" className="mt-16 grid gap-4 border-t border-slate-200 pt-8 dark:border-white/[0.06] sm:grid-cols-2">
          <Link
            href={docHref(prev.slug)}
            className="group rounded-xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50/50 dark:border-white/[0.08] dark:hover:border-violet-500/40 dark:hover:bg-violet-500/[0.05]"
          >
            <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous
            </span>
            <span className="mt-1 block font-medium text-slate-900 dark:text-white">{prev.title}</span>
          </Link>
          {next && (
            <Link
              href={docHref(next.slug)}
              className="group rounded-xl border border-slate-200 p-4 text-right transition hover:border-violet-300 hover:bg-violet-50/50 dark:border-white/[0.08] dark:hover:border-violet-500/40 dark:hover:bg-violet-500/[0.05] sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                Next <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 block font-medium text-slate-900 dark:text-white">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden w-56 shrink-0 xl:block">
        <div className="docs-scroll sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8">
          <DocsToc toc={toc} />
        </div>
      </aside>
    </div>
  )
}
