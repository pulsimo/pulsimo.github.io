'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/sections/SectionHeading'

// Dashboard screenshots - actual Pulsimo interface.
// Each slide lists its light (public/images/day) and dark (public/images/night) screenshot;
// a slide missing one of them is only shown in the other theme.
const dashboardSlides = [
  {
    title: 'System Overview',
    description: 'Active incidents, system health, team status and key performance indicators at a glance',
    day: '/images/day/maindashboard.png',
    night: '/images/night/maindashbaord.png',
  },
  {
    title: 'Services Overview',
    description: 'Live status of every endpoint and its last 24 hours, refreshed every 30 seconds',
    day: '/images/day/servicedashbaord.png',
    night: '/images/night/servicedashbaord.png',
  },
  {
    title: 'Projects',
    description: 'Track each project\'s reliability against its target, with endpoints and incidents in one place',
    day: '/images/day/projects.png',
    night: '/images/night/projects.png',
  },
  {
    title: 'Endpoints',
    description: 'Monitor all your service endpoints in real-time, with health distribution and slowest endpoints',
    day: '/images/day/endpoints.png',
    night: '/images/night/endpoints.png',
  },
  {
    title: 'Application Dashboard',
    description: 'Uptime, request rate, error rate, p95 latency and HTTP traffic by route for each service',
    day: '/images/day/applicationdashbaord.png',
    night: '/images/night/applicationdashbaord.png',
  },
  {
    title: 'Response Analytics',
    description: 'Percentiles, trends and the spread of response times across your endpoints',
    day: '/images/day/response.png',
    night: '/images/night/response.png',
  },
  {
    title: 'Performance Insights',
    description: 'Apdex over time and automatic anomaly detection for every endpoint',
    night: '/images/night/performance.png',
  },
  {
    title: 'Alerting',
    description: 'Outages, slow and failing checks, expiring certificates and every message sent, in one place',
    day: '/images/day/alert.png',
    night: '/images/night/alert.png',
  },
  {
    title: 'Incident Management',
    description: 'Related incidents are deduplicated and grouped automatically to cut alert storms',
    day: '/images/day/incedent.png',
  },
  {
    title: 'Infrastructure',
    description: 'Hosts and containers behind your endpoints, built from node_exporter, cAdvisor and your logs',
    day: '/images/day/infra.png',
    night: '/images/night/infra.png',
  },
  {
    title: 'Logs',
    description: 'Search application logs, spot repeating patterns and follow them back to endpoints and incidents',
    day: '/images/day/logs.png',
    night: '/images/night/logs.png',
  },
  {
    title: 'SSL Certificates',
    description: 'Certificate expiry, issuer, grade and TLS version for every HTTPS endpoint',
    night: '/images/night/sslcert.png',
  },
]

// Tracks the `dark` class that ThemeToggle sets on <html>
function useIsDark() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const update = () => setIsDark(root.classList.contains('dark'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isDark
}

export default function DashboardShowcase() {
  const isDark = useIsDark()
  const dashboardImages = dashboardSlides.flatMap((slide) => {
    const image = isDark ? slide.night : slide.day
    return image ? [{ ...slide, image, alt: `Pulsimo ${slide.title} - ${slide.description}` }] : []
  })

  const [slideIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  // The two themes have different slide counts, so keep the index in range after a switch
  const currentIndex = slideIndex % dashboardImages.length

  // Auto-advance slider, pausing while the visitor hovers or focuses it
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % dashboardImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [dashboardImages.length, paused])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex % dashboardImages.length) + newDirection
      if (nextIndex < 0) return dashboardImages.length - 1
      if (nextIndex >= dashboardImages.length) return 0
      return nextIndex
    })
  }

  return (
    <section id="showcase" className="relative scroll-mt-20 bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product tour"
          title={
            <>
              See{' '}
              <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400">
                Pulsimo
              </span>{' '}
              in action
            </>
          }
          description="Real screenshots from the Pulsimo console. Switch the theme to see them in light or dark."
        />

        {/* Slider Container */}
        <div
          className="relative mx-auto mt-14 max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Main Slider */}
          <div className="relative aspect-[1914/1033] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl shadow-violet-500/10 ring-1 ring-black/[0.03] dark:border-white/10 dark:bg-[#05050a] dark:shadow-violet-900/30 dark:ring-white/[0.04]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={dashboardImages[currentIndex].image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0"
              >
                {/* Dashboard Screenshot */}
                <Image
                  src={dashboardImages[currentIndex].image}
                  alt={dashboardImages[currentIndex].alt}
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover object-top"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-3 rounded-full transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-3 rounded-full transition-all shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {dashboardImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-violet-600 dark:bg-violet-400'
                    : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {dashboardImages[currentIndex].title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {dashboardImages[currentIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
