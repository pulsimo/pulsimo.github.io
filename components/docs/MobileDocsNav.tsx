'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, PanelLeft, Search, X } from 'lucide-react'
import { ALL_DOCS, docHref, sectionOf } from '@/lib/docs/manifest'
import { DocsNavList, openDocsSearch } from './DocsSidebar'

export default function MobileDocsNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? '/docs/'
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  const doc = ALL_DOCS.find((d) => docHref(d.slug) === path)
  const section = doc ? sectionOf(doc.slug) : undefined

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="sticky top-16 z-30 flex items-center gap-2 border-b border-slate-200 bg-white/85 px-4 py-2.5 backdrop-blur-xl dark:border-white/[0.06] dark:bg-black/80 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left text-sm"
          aria-label="Open documentation menu"
        >
          <PanelLeft className="h-4 w-4 shrink-0 text-slate-500" />
          <span className="truncate text-slate-500 dark:text-slate-400">{section?.title ?? 'Docs'}</span>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span className="truncate font-medium text-slate-900 dark:text-white">{doc?.title ?? 'Overview'}</span>
        </button>
        <button
          type="button"
          onClick={openDocsSearch}
          aria-label="Search docs"
          className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Documentation menu">
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="docs-scroll absolute inset-y-0 left-0 flex w-[19rem] max-w-[85vw] flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 pb-10 pt-4 dark:border-white/10 dark:bg-zinc-950"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mb-4 flex items-center justify-between px-3">
                <span className="font-semibold text-slate-900 dark:text-white">Documentation</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <DocsNavList onNavigate={() => setOpen(false)} />
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
