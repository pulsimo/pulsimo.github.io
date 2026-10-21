'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { BookOpen, Github, Search } from 'lucide-react'
import { DOC_SECTIONS, docHref } from '@/lib/docs/manifest'
import { GITHUB_URL } from '@/components/Navigation'
import { cn } from '@/lib/utils'

export function openDocsSearch() {
  window.dispatchEvent(new Event('docs-search:open'))
}

function normalize(path: string) {
  return path.endsWith('/') ? path : `${path}/`
}

export function SearchButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openDocsSearch}
      className={cn(
        'group flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-500 transition hover:border-slate-300 hover:text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-slate-200',
        className,
      )}
    >
      <Search className="h-4 w-4" />
      <span className="flex-1">Search docs</span>
      <kbd className="hidden rounded border border-slate-200 px-1.5 font-mono text-[10px] text-slate-400 dark:border-white/10 sm:inline">Ctrl K</kbd>
    </button>
  )
}

export function DocsNavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = normalize(usePathname() ?? '/docs/')
  const listRef = useRef<HTMLDivElement>(null)

  // Keep the current page in view when the sidebar is taller than the screen.
  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>('[aria-current="page"]')
    const scroller = listRef.current?.closest<HTMLElement>('nav')
    if (!active || !scroller) return
    const a = active.getBoundingClientRect()
    const s = scroller.getBoundingClientRect()
    if (a.top < s.top || a.bottom > s.bottom) scroller.scrollTop += a.top - s.top - s.height / 3
  }, [pathname])

  const linkClass = (active: boolean) =>
    cn(
      'relative block rounded-md py-1.5 pl-3 pr-2 text-[13.5px] leading-snug transition-colors',
      active
        ? 'bg-violet-500/10 font-medium text-violet-700 before:absolute before:inset-y-1.5 before:left-0 before:w-0.5 before:rounded-full before:bg-violet-500 dark:bg-violet-500/[0.12] dark:text-violet-300 dark:before:bg-violet-400 dark:before:shadow-[0_0_10px_rgba(167,139,250,0.9)]'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-white',
    )

  return (
    <div ref={listRef} className="space-y-6">
      <Link href="/docs/" onClick={onNavigate} aria-current={pathname === '/docs/' ? 'page' : undefined} className={cn(linkClass(pathname === '/docs/'), 'flex items-center gap-2')}>
        <BookOpen className="h-4 w-4" /> Overview
      </Link>
      {DOC_SECTIONS.map((section) => (
        <div key={section.title}>
          <p className="mb-1.5 px-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const href = docHref(item.slug)
              const active = pathname === href
              return (
                <li key={item.slug}>
                  <Link href={href} onClick={onNavigate} aria-current={active ? 'page' : undefined} className={linkClass(active)}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 text-[13.5px] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        <Github className="h-4 w-4" /> GitHub
      </a>
    </div>
  )
}

export default function DocsSidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 flex-col border-r border-slate-200 dark:border-white/[0.06] lg:flex">
      <div className="px-4 pb-3 pt-6">
        <SearchButton />
      </div>
      <nav aria-label="Documentation" className="docs-scroll flex-1 overflow-y-auto px-3 pb-10 pt-2">
        <DocsNavList />
      </nav>
    </aside>
  )
}
