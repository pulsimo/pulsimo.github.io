'use client'

import { motion } from 'framer-motion'
import { BellRing, GitBranch, Globe, KeyRound, ScrollText, ShieldAlert, ShieldCheck, ShipWheel, Workflow } from 'lucide-react'
import SectionHeading from '@/components/sections/SectionHeading'

const features = [
  {
    icon: Globe,
    title: 'Endpoint monitoring',
    text: 'HTTP health checks every few seconds with uptime, p50/p95/p99 latency, Apdex and response-time breakdowns per endpoint.',
    tone: 'from-cyan-500 to-blue-600',
  },
  {
    icon: ShieldAlert,
    title: 'Incident management',
    text: 'Failures open incidents automatically. Related ones are deduplicated and grouped so one outage never becomes fifty alerts.',
    tone: 'from-rose-500 to-orange-500',
  },
  {
    icon: GitBranch,
    title: 'Dependency mapping',
    text: 'Pulsimo discovers how your services call each other and shows the blast radius when one of them goes down.',
    tone: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: ShipWheel,
    title: 'Infrastructure & Kubernetes',
    text: 'Hosts, containers, nodes and pods from node_exporter, cAdvisor and Prometheus, right next to the endpoints they serve.',
    tone: 'from-blue-500 to-indigo-600',
  },
  {
    icon: ScrollText,
    title: 'Log search',
    text: 'Search application logs, spot repeating patterns and jump from an error straight to the endpoint and incident behind it.',
    tone: 'from-emerald-500 to-teal-600',
  },
  {
    icon: BellRing,
    title: 'Alerts that reach you',
    text: 'Send alerts to email, Slack, Teams, Discord or any webhook, with maintenance windows and SSL expiry warnings built in.',
    tone: 'from-amber-500 to-orange-600',
  },
]

const extras = [
  { icon: Workflow, label: 'Self-hosted with Docker Compose' },
  { icon: KeyRound, label: 'Roles, permissions & API keys' },
  { icon: ShieldCheck, label: 'Your data stays on your servers' },
]

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">
                see clearly
              </span>
            </>
          }
          description="One place for the signals that matter, so you fix problems instead of hunting for them."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text, tone }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-colors hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition-colors duration-500 group-hover:bg-violet-500/15" />
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {extras.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300"
            >
              <Icon className="h-4 w-4 text-violet-500" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
