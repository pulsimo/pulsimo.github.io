'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'

export const SUPPORT_EMAIL = 'support@pulsimo.dev'

const TOPICS = ['Question', 'Bug report', 'Feature idea', 'Licensing', 'Something else']

const field =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/15 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-violet-400'

/**
 * The site is static, so the form doesn't post anywhere: it opens the visitor's
 * email app with everything filled in, addressed to support.
 */
export default function ContactForm() {
  const [topic, setTopic] = useState(TOPICS[0])
  const [opened, setOpened] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `[${topic}] ${data.get('subject')}`
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300">What is it about?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-sm transition',
                topic === t
                  ? 'border-violet-500 bg-violet-500/10 text-violet-700 dark:border-violet-400 dark:text-violet-300'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/20',
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Subject
        <input name="subject" required placeholder="How can we help?" className={field} />
      </label>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Message
        <textarea name="message" required rows={6} placeholder="Tell us more. For a bug, include your Pulsimo version and what you expected." className={cn(field, 'resize-y')} />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Opens your email app with the message ready to send to {SUPPORT_EMAIL}.
        </p>
        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-6px_rgba(124,58,237,0.8)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500"
        >
          Write the email
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
      {opened && (
        <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
          Your email app should have opened. If it didn&apos;t, write to <a className="font-medium underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      )}
    </form>
  )
}
