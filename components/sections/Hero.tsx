'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Activity, ArrowRight, BellRing, LayoutDashboard, Play, ScrollText, ShipWheel } from 'lucide-react'
import DashboardMockup from '@/components/sections/DashboardMockup'

// The glow takes one breath every 3s (see the breathe/spread/flare keyframes in globals.css)
// and moves to the next color at the bottom of each breath.
const GLOW_COLORS = ['#8b5cf6', '#06b6d4', '#3b82f6', '#10b981', '#d946ef', '#6366f1']

const highlights = [
  { icon: Activity, title: 'Real-time metrics', text: 'See what matters, instantly' },
  { icon: ScrollText, title: 'Log aggregation', text: 'Find issues faster' },
  { icon: BellRing, title: 'Smart alerts', text: 'Stay ahead, always' },
  { icon: ShipWheel, title: 'Kubernetes monitoring', text: 'From nodes to pods' },
  { icon: LayoutDashboard, title: 'Powerful dashboards', text: 'Visualize. Analyze. Resolve.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0)
  const nextColor = () => setColorIndex((i) => (i + 1) % GLOW_COLORS.length)

  return (
    <section
      className="glow-scope relative isolate overflow-hidden bg-white pt-32 dark:bg-black sm:pt-36"
      style={{ '--glow': GLOW_COLORS[colorIndex] } as React.CSSProperties}
    >
      {/* Ambient wash: the current color spreads across the whole hero, then recedes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-100">
        <div
          className="animate-spread absolute inset-x-[-25%] top-[10%] h-[120%] origin-[50%_55%]"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 58%, color-mix(in srgb, var(--glow) 42%, transparent), transparent 75%)',
          }}
          onAnimationIteration={nextColor}
        />
      </div>
      {/* Fade into the next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-b from-transparent to-white dark:to-black" />
      <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Real-time observability
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-7 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-[5.25rem]"
          >
            Know what&apos;s happening.
            <span className="block bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text pb-2 text-transparent dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400">
              Before it breaks.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Endpoints, infrastructure, Kubernetes, metrics and logs, all connected in one clear view. Self-hosted, open
            source and ready in minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/docs"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-6px_rgba(124,58,237,0.8)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500"
            >
              Explore Pulsimo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30 dark:hover:bg-white/[0.06]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              View live demo
            </a>
          </motion.div>
        </div>

        {/* Horizon + dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 sm:mt-28"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-28 -z-10 h-[900px]">
            {/* Planet edge rising behind the dashboard */}
            <div
              className="animate-breathe absolute left-1/2 top-0 aspect-square w-[min(1300px,180vw)] rounded-full bg-white [mask-image:linear-gradient(to_bottom,black_0%,black_30%,transparent_55%)] dark:bg-black"
              style={{
                boxShadow:
                  '0 -2px 0 0 color-mix(in srgb, var(--glow) 55%, white), 0 -10px 40px -4px var(--glow), 0 -40px 120px -10px color-mix(in srgb, var(--glow) 70%, transparent), inset 0 6px 24px -10px color-mix(in srgb, var(--glow) 80%, white)',
              }}
            />
            {/* Bright flare at the top of the horizon */}
            <div
              className="animate-flare absolute left-1/2 top-0 h-48 w-[min(760px,95vw)] rounded-[100%] blur-2xl"
              style={{ background: 'radial-gradient(closest-side, color-mix(in srgb, var(--glow) 60%, white), color-mix(in srgb, var(--glow) 70%, transparent) 40%, transparent)' }}
            />
            <div
              className="animate-flare absolute left-1/2 top-0 h-10 w-[min(460px,70vw)] rounded-[100%] bg-white blur-xl dark:opacity-90"
            />
            <span className="animate-blink absolute left-[18%] top-24 h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_12px_2px] shadow-violet-400" />
            <span className="animate-blink absolute right-[20%] top-36 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_2px] shadow-cyan-300 [animation-delay:1s]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <DashboardMockup />
          </div>
        </motion.div>

        {/* Capability strip */}
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-200 dark:lg:divide-white/10">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-3 lg:justify-center lg:px-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white">{title}</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
