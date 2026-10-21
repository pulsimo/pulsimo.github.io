'use client'

import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>}
    </motion.div>
  )
}
