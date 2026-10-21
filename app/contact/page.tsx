import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, Bug, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ContactForm, { SUPPORT_EMAIL } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Questions, bug reports, feature ideas or licensing: get in touch with the Pulsimo team.',
  alternates: { canonical: '/contact/' },
}

const BUG_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSc3ZuyIwqytCaw7NNatE79mkhB6DzbwMYq29fEIRC17bfO8vA/viewform?usp=publish-editor'

const channels = [
  { icon: Mail, title: 'Email', text: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, tone: 'from-violet-500 to-fuchsia-500' },
  { icon: Bug, title: 'Report a bug', text: 'A short form, read by the team', href: BUG_FORM, tone: 'from-rose-500 to-orange-500', external: true },
  { icon: BookOpen, title: 'Documentation', text: 'Install, configure, troubleshoot', href: '/docs/', tone: 'from-cyan-500 to-blue-600' },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Cloud-Council/pulsimo' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/pulsimo' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/pulsimo' },
]

const faqs = [
  {
    q: 'How do I get started?',
    a: (
      <>
        Follow the <Link href="/docs/installation/" className="font-medium text-violet-600 underline-offset-4 hover:underline dark:text-violet-400">installation guide</Link>,
        then the <Link href="/docs/quick-start/" className="font-medium text-violet-600 underline-offset-4 hover:underline dark:text-violet-400">quick start</Link>. One Linux server with Docker is enough.
      </>
    ),
  },
  { q: 'Is Pulsimo free?', a: 'Pulsimo is in beta and free to use during the beta. Pricing will be announced before the official launch, and early users will hear first.' },
  { q: 'Where is my data kept?', a: 'On your own server. Pulsimo is self-hosted: checks, metrics, logs and users stay in its own databases, and alerts go only to the channels you set up.' },
  { q: 'What support is there during the beta?', a: 'Email support on weekdays, usually within 24 hours. Put "URGENT" in the subject for anything that blocks you in production.' },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-black">
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[56rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-600/25" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Talk to the{' '}
              <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">Pulsimo team</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Questions, bug reports, feature ideas or licensing. We read everything and usually answer within a working day.
            </p>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
            {channels.map(({ icon: Icon, title, text, href, tone, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-violet-500/40"
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                  {title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Send a message</h2>
              <p className="mt-1 mb-6 text-sm text-slate-600 dark:text-slate-400">Fill it in and your email app takes care of the rest.</p>
              <ContactForm />
            </div>

            <aside className="space-y-4">
              <div className="rounded-3xl border border-slate-200 p-6 dark:border-white/[0.08]">
                <h2 className="font-semibold text-slate-900 dark:text-white">Follow along</h2>
                <ul className="mt-4 space-y-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]">
                        <Icon className="h-4 w-4 text-violet-500" /> {label}
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white p-6 dark:border-violet-500/20 dark:from-violet-950/40 dark:to-black">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Beta support
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Weekdays, usually within 24 hours. For a problem that blocks you in production, put <strong className="text-slate-900 dark:text-white">URGENT</strong> in the subject.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 pb-28 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Common questions</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-white/[0.08] dark:border-white/[0.08]">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900 dark:text-white">
                    {q}
                    <span className="text-xl leading-none text-slate-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
              More answers in the <Link href="/docs/faq/" className="font-medium text-violet-600 underline-offset-4 hover:underline dark:text-violet-400">FAQ</Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
