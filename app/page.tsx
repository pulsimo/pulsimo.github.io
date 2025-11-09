'use client'

import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import DashboardShowcase from '@/components/sections/DashboardShowcase'
import ThemeToggle from '@/components/ThemeToggle'

// Loading fallbacks
const HeroFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
)

const DashboardFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
)

export default function Home() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        <Suspense fallback={<HeroFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<DashboardFallback />}>
          <DashboardShowcase />
        </Suspense>
      </main>
    </>
  )
}
