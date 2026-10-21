'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/sections/SectionHeading'

const steps = [
  {
    title: 'Deploy on your servers',
    text: 'Clone the repository and start the stack with Docker Compose. Your data never leaves your infrastructure.',
  },
  {
    title: 'Add what you run',
    text: 'Register endpoints, group them into projects and connect Prometheus, node_exporter or cAdvisor if you have them.',
  },
  {
    title: 'Know before your users do',
    text: 'Pulsimo checks everything continuously, opens incidents on failure and alerts the right channel immediately.',
  },
]

const terminal = [
  { prompt: true, text: 'git clone https://github.com/Cloud-Council/pulsimo.git' },
  { prompt: true, text: 'cd pulsimo && cp .env.example .env' },
  { prompt: true, text: 'docker compose up -d' },
  { prompt: false, text: '✔ Container pulsimo-postgres   Started' },
  { prompt: false, text: '✔ Container pulsimo-api        Started' },
  { prompt: false, text: '✔ Container pulsimo-frontend   Started' },
  { prompt: true, text: 'open http://localhost:3000' },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-24 dark:border-white/[0.06] dark:bg-[#030305] sm:py-32">
      <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in minutes"
          description="No agents to install on every box and no SaaS account to create."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ol className="space-y-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-white font-mono text-sm font-bold text-violet-600 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1.5 text-slate-600 dark:text-slate-400">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-[#07070c] shadow-2xl shadow-violet-900/20"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">terminal</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
              {terminal.map((line, i) => (
                <div key={i} className={line.prompt ? 'text-slate-200' : 'text-emerald-400'}>
                  {line.prompt && <span className="select-none text-violet-400">$ </span>}
                  {line.text}
                </div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
