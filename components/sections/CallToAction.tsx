import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="bg-white px-4 py-24 dark:bg-black sm:px-6 sm:py-32 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white px-6 py-16 text-center dark:border-violet-500/20 dark:from-violet-950/40 dark:to-black sm:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-3xl dark:bg-violet-600/40" />
        <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Start monitoring in minutes
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">
          Pulsimo is free while in beta. Run it on your own servers and see every endpoint, node and log in one place.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/docs/quick-start"
            className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-6px_rgba(124,58,237,0.8)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500"
          >
            Read the quick start
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://github.com/Cloud-Council/pulsimo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]"
          >
            <Github className="h-4 w-4" /> Star on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
