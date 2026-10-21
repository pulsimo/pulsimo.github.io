import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Activity,
  ArrowRight,
  BellRing,
  BookOpen,
  Boxes,
  Code2,
  Download,
  HeartPulse,
  LineChart,
  Network,
  Rocket,
  ScrollText,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'
import { DOC_SECTIONS, docHref } from '@/lib/docs/manifest'
import { SearchButton } from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Install Pulsimo, monitor endpoints, metrics, logs and Kubernetes, and route alerts to the right people.',
  alternates: { canonical: '/docs/' },
}

const START = [
  { href: '/docs/installation/', icon: Download, title: 'Install', text: 'Run Pulsimo on your server with Docker Compose.' },
  { href: '/docs/quick-start/', icon: Zap, title: 'Quick start', text: 'First endpoint, alert channel and metrics in ten minutes.' },
  { href: '/docs/architecture/', icon: Network, title: 'Architecture', text: 'The services, the data stores, and how an alert is born.' },
]

const SECTION_STYLE: Record<string, { icon: typeof Rocket; tone: string }> = {
  'Get started': { icon: Rocket, tone: 'from-violet-500 to-fuchsia-500' },
  'Services and checks': { icon: Activity, tone: 'from-cyan-500 to-blue-600' },
  'Metrics and dashboards': { icon: LineChart, tone: 'from-blue-500 to-indigo-600' },
  Logs: { icon: ScrollText, tone: 'from-emerald-500 to-teal-600' },
  Infrastructure: { icon: Boxes, tone: 'from-sky-500 to-cyan-600' },
  'Incidents and reliability': { icon: ShieldCheck, tone: 'from-rose-500 to-orange-500' },
  Alerting: { icon: BellRing, tone: 'from-amber-500 to-orange-600' },
  Administration: { icon: Users, tone: 'from-slate-500 to-slate-700' },
  "Pulsimo's own health": { icon: HeartPulse, tone: 'from-pink-500 to-rose-600' },
  API: { icon: Code2, tone: 'from-indigo-500 to-violet-600' },
  Guides: { icon: BookOpen, tone: 'from-teal-500 to-emerald-600' },
}

export default function DocsHome() {
  return (
    <div className="pb-24">
      <section className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Documentation</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Everything about{' '}
          <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">Pulsimo</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Install it, point it at your services, and learn how checks, metrics, logs, incidents and alerts work together. Every page
          follows the product as it ships today.
        </p>
        <SearchButton className="mt-8 max-w-md py-3" />
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {START.map(({ href, icon: Icon, title, text }) => (
          <Link
            key={href}
            href={href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-violet-500/40"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-500/20" />
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-[0_0_24px_-4px_rgba(124,58,237,0.7)]">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
              {title}
              <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Browse by topic</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {DOC_SECTIONS.map((section) => {
            const style = SECTION_STYLE[section.title] ?? { icon: BookOpen, tone: 'from-violet-500 to-cyan-500' }
            const Icon = style.icon
            return (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.02]"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${style.tone} text-white`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <Link href={docHref(item.slug)} className="group block">
                        <span className="text-sm font-medium text-slate-800 transition group-hover:text-violet-600 dark:text-slate-200 dark:group-hover:text-violet-400">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-slate-500 dark:text-slate-400">{item.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6 dark:border-violet-500/20 dark:from-violet-950/40 dark:to-black sm:flex-row sm:items-center">
        <div>
          <h2 className="font-semibold text-slate-900 dark:text-white">Something not working?</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">The troubleshooting guide covers sign-in, checks, email, logs and metrics.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/docs/guides/troubleshooting/" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            Troubleshooting
          </Link>
          <Link href="/contact/" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}
