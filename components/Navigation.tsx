'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/docs', label: 'Docs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="relative flex items-center h-16">
        {/* Logo - Aligned with sidebar Documentation text (24px from left) */}
        <div className="absolute left-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#1e40af] via-[#0891b2] to-[#14b8a6] dark:from-[#3b82f6] dark:via-[#06b6d4] dark:to-[#14b8a6] bg-clip-text text-transparent">
                Pulsimo
              </span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white">
              BETA
            </span>
          </Link>
        </div>

        {/* Navigation Links - Absolute Center */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* GitHub Icon - Next to theme toggle */}
        <a
          href="https://github.com/Cloud-Council/pulsimo"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block fixed top-4 right-16 z-50 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-lg transition-colors"
          aria-label="View on GitHub"
        >
          <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto mr-4">
          <a
            href="https://github.com/Cloud-Council/pulsimo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
