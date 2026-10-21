'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Github, Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

export const GITHUB_URL = 'https://github.com/Cloud-Council/pulsimo'

const navLinks = [
  { href: '/', label: 'Product' },
  { href: '/docs', label: 'Docs' },
  { href: '/about', label: 'Developers' },
  { href: '/contact', label: 'Contact' },
]

// With trailingSlash: true the exported pages report paths like "/docs/"
function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`)
}

export default function Navigation() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/[0.08] dark:bg-black/70'
          : 'border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="shrink-0" aria-label="Pulsimo home">
          <Logo />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative py-5 text-sm font-medium transition-colors',
                    active
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pulsimo on GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white sm:inline-flex"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
          <Link
            href="/docs/quick-start"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-4px_rgba(124,58,237,0.7)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500 sm:inline-flex"
          >
            Get started
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200/80 px-4 pb-4 pt-2 dark:border-white/[0.08] md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-base font-medium',
                      active
                        ? 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-3 flex gap-2">
            <Link
              href="/docs/quick-start"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
