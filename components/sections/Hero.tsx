'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Activity, Shield, Zap, Sparkles, TrendingUp, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Dark Mode Glowing Effect - Blue Radiation */}
      <div className="absolute inset-0 dark:block hidden">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] opacity-20"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[100px] opacity-30"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[80px] opacity-25"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Light Mode Subtle Grid Pattern */}
      <div className="absolute inset-0 dark:hidden block opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs for Light Mode */}
      <div className="absolute inset-0 dark:hidden block">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full blur-2xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full blur-2xl opacity-30"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20 pb-32">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pulsimo Brand with Glowing Effect */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <div className="absolute -top-3 -right-10 md:-right-16">
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/50"
              >
                BETA
              </motion.span>
            </div>
            
            <div className="relative">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl opacity-40 dark:opacity-60">
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Pulsimo
                  </span>
                </h2>
              </div>
              
              {/* Main text */}
              <h2 className="relative text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 dark:from-yellow-300 dark:via-amber-200 dark:to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                  Pulsimo
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Badge with Icon */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-200 dark:border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-cyan-700 to-blue-700 dark:from-cyan-200 dark:to-blue-200 bg-clip-text text-transparent">
                Real-time Monitoring Platform
              </span>
            </div>
          </motion.div>

          {/* Main Heading with Better Typography */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mb-6 leading-[1.1]"
          >
            <span className="text-slate-900 dark:text-white">Monitor Your Systems with</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Precision & Power
            </span>
          </motion.h1>

          {/* Subheading with Better Spacing */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 font-medium"
          >
            Stay ahead of issues before they impact your users. Get real-time insights into your 
            application's health, performance, and security.
          </motion.p>

          {/* CTA Buttons - Redesigned */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="https://github.com/Cloud-Council/pulsimo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/50 dark:shadow-cyan-500/30 rounded-xl"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-bold bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl rounded-xl"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards - Completely Redesigned */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Enterprise Security
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Bank-grade encryption
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10 border-2 border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Sub-second response time
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border-2 border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Live performance metrics
                </p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
        
        {/* Scroll Indicator - Modernized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
