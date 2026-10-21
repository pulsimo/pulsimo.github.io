import Link from 'next/link'
import { Github } from 'lucide-react'
import Logo from '@/components/Logo'

const GITHUB_URL = 'https://github.com/Cloud-Council/pulsimo'
const BUG_REPORT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc3ZuyIwqytCaw7NNatE79mkhB6DzbwMYq29fEIRC17bfO8vA/viewform'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '/' },
      { label: 'Screenshots', href: '/#showcase' },
      { label: 'Features', href: '/#features' },
      { label: 'Architecture', href: '/docs/architecture' },
    ],
  },
  {
    title: 'Docs',
    links: [
      { label: 'Quick start', href: '/docs/quick-start' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Configuration', href: '/docs/config/environment' },
      { label: 'Health checks', href: '/docs/health-checks' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: GITHUB_URL, external: true },
      { label: 'Report a bug', href: BUG_REPORT_URL, external: true },
      { label: 'Developers', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white dark:border-white/[0.08] dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Self-hosted observability for endpoints, infrastructure, Kubernetes, metrics and logs.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            >
              <Github className="h-4 w-4" /> Star on GitHub
            </a>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/[0.08] dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Pulsimo. Self-hosted. Your data stays on your servers.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Currently in beta
          </p>
        </div>
      </div>
    </footer>
  )
}
