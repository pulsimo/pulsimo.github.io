import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { Target, Users, Zap, Shield, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Pulsimo',
  description: 'Learn about Pulsimo - Real-time monitoring platform for modern applications',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#d5f4f4] via-[#e0f7f7] to-[#cbf0f0] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-slate-800 dark:text-white">About </span>
                <span className="bg-gradient-to-r from-[#1e40af] via-[#0891b2] to-[#14b8a6] dark:from-[#3b82f6] dark:via-[#06b6d4] dark:to-[#14b8a6] bg-clip-text text-transparent">
                  Pulsimo
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Built with passion to make real-time monitoring simple, powerful, and accessible for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/20">
                      <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Mission</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To empower developers and businesses with real-time insights into their applications,
                    enabling proactive monitoring and rapid issue resolution. We believe that monitoring
                    should be simple, powerful, and accessible to everyone.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                      <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Vision</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To become the go-to monitoring platform for modern applications, trusted by developers
                    worldwide. We're building a future where downtime is predicted before it happens,
                    and performance optimization is automated.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
                  Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 mb-4">
                      <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Performance First</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Lightning-fast monitoring with real-time updates and minimal overhead on your systems.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 mb-4">
                      <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Security & Privacy</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Enterprise-grade security with end-to-end encryption and compliance with industry standards.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 mb-4">
                      <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">User-Centric</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Intuitive interfaces designed for developers, by developers. Your feedback shapes our roadmap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Story</h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Pulsimo was born from a simple frustration: existing monitoring tools were either too complex,
                    too expensive, or lacked the real-time capabilities modern applications demand.
                  </p>
                  <p>
                    As developers ourselves, we experienced countless nights debugging production issues that could
                    have been prevented with better monitoring. We knew there had to be a better way.
                  </p>
                  <p>
                    Today, Pulsimo is in beta, serving developers and teams who believe in proactive monitoring.
                    We're constantly improving based on real-world feedback, building features that actually matter,
                    and staying true to our core mission: making monitoring accessible to everyone.
                  </p>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                    This is just the beginning. Join us on this journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Notice */}
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold mb-6">
                BETA VERSION
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
                We're Building in Public
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Pulsimo is currently in beta. This means we're actively developing new features,
                gathering feedback, and improving the platform every day. Your input directly shapes
                our product roadmap.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
