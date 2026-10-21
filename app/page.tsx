import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import DashboardShowcase from '@/components/sections/DashboardShowcase'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: { absolute: 'Pulsimo - Know what\'s happening. Before it breaks.' },
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DashboardShowcase />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
    </>
  )
}
