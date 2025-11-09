import { Metadata } from 'next'
import { MessageCircleQuestion, Clock, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - Coming Soon - Pulsimo Documentation',
  description: 'Frequently Asked Questions about Pulsimo',
}

export default function FaqPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
            <MessageCircleQuestion className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-6">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">Coming Soon</span>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          A comprehensive FAQ covering common questions about installation, configuration, monitoring, 
          alerts, troubleshooting, and best practices will be available here soon.
        </p>
        
        <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-3 text-left">
            <Bell className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Have Questions?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Browse our existing documentation starting with the{' '}
                <a href="/docs" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Overview
                </a>{' '}
                or visit our{' '}
                <a href="https://github.com/Cloud-Council/pulsimo" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  GitHub
                </a>{' '}
                for community support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
