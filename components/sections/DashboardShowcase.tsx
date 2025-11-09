'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Dashboard screenshots - actual Pulsimo interface
const dashboardImages = [
  {
    id: 1,
    title: 'Service Dashboard',
    description: 'Monitor all your services in real-time with comprehensive project tracking',
    image: '/images/placeholder.svg',
    alt: 'Pulsimo Service Dashboard - Real-time service monitoring'
  },
  {
    id: 2,
    title: 'Service Performance Analytics',
    description: 'Comprehensive performance analysis with detailed metrics and uptime tracking',
    image: '/images/placeholder.svg',
    alt: 'Service Performance Dashboard - Analytics and metrics'
  },
  {
    id: 3,
    title: 'Notification Channels',
    description: 'Configure multi-channel alerts for your monitoring system',
    image: '/images/placeholder.svg',
    alt: 'Notification Channels - Alert management'
  },
  {
    id: 4,
    title: 'System Health Monitoring',
    description: 'Real-time monitoring of all registered services with health indicators',
    image: '/images/placeholder.svg',
    alt: 'System Health - Service status and uptime'
  },
  {
    id: 5,
    title: 'Database Health',
    description: 'Monitor maintenance schedules and database performance',
    image: '/images/placeholder.svg',
    alt: 'Database Health - Performance and maintenance'
  },
  {
    id: 6,
    title: 'Event Trail',
    description: 'Track all user actions and system events in real-time',
    image: '/images/placeholder.svg',
    alt: 'Event Trail - Activity logging and tracking'
  },
  {
    id: 7,
    title: 'Incident Management',
    description: 'Track and resolve service failures with comprehensive incident tracking',
    image: '/images/placeholder.svg',
    alt: 'Incident Management - Service failure tracking and resolution'
  },
  {
    id: 8,
    title: 'Service Dependencies',
    description: 'Visualize and analyze service dependencies and their impact with interactive graphs',
    image: '/images/placeholder.svg',
    alt: 'Service Dependencies - Dependency graph and impact analysis'
  },
]

export default function DashboardShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % dashboardImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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
      const nextIndex = prevIndex + newDirection
      if (nextIndex < 0) return dashboardImages.length - 1
      if (nextIndex >= dashboardImages.length) return 0
      return nextIndex
    })
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-800 dark:text-white">See </span>
            <span className="bg-gradient-to-r from-[#1e40af] via-[#0891b2] to-[#14b8a6] dark:from-[#3b82f6] dark:via-[#06b6d4] dark:to-[#14b8a6] bg-clip-text text-transparent">
              Pulsimo
            </span>
            <span className="text-slate-800 dark:text-white"> in Action</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our powerful monitoring dashboard with real-time insights
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
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
                  className="object-contain bg-slate-100 dark:bg-slate-950"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 dark:bg-black/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/50 text-white p-3 rounded-full transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 dark:bg-black/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/50 text-white p-3 rounded-full transition-all shadow-lg"
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
                    ? 'w-8 bg-cyan-500 dark:bg-cyan-400'
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
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              {dashboardImages[currentIndex].title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              {dashboardImages[currentIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
