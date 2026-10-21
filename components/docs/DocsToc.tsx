'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

type Entry = { id: string; text: string; depth: 2 | 3 }

export default function DocsToc({ toc }: { toc: Entry[] }) {
  const [active, setActive] = useState<string | null>(toc[0]?.id ?? null)

  useEffect(() => {
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => !!el)
    if (!headings.length) return

    const onScroll = () => {
      // The last heading above the upper third of the screen is the current one.
      const line = window.innerHeight * 0.3
      let current = headings[0].id
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id
        else break
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = headings[headings.length - 1].id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [toc])

  if (toc.length < 2) return null

  return (
    <nav aria-label="On this page" className="text-[13px]">
      <p className="mb-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">On this page</p>
      <ul className="space-y-1 border-l border-slate-200 dark:border-white/[0.08]">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cn(
                '-ml-px block border-l py-1 leading-snug transition-colors',
                t.depth === 3 ? 'pl-6' : 'pl-3',
                active === t.id
                  ? 'border-violet-500 text-violet-700 dark:border-violet-400 dark:text-violet-300'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {t.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-6 inline-flex items-center gap-1.5 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowUp className="h-3.5 w-3.5" /> Back to top
      </button>
    </nav>
  )
}
