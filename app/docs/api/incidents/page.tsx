import { Metadata } from 'next'
import { AlertTriangle, Clock, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Incidents API - Coming Soon - Pulsimo Documentation',
  description: 'API documentation for incident management',
}

export default function IncidentsApiPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-600 mb-4">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Incidents API
        </h1>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-6">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">Coming Soon</span>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          API documentation for listing incidents, acknowledging alerts, resolving issues, and querying incident history 
          will be available here soon.
        </p>
        
        <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-3 text-left">
            <Bell className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Stay Tuned</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Explore{' '}
                <a href="/docs/features/incidents" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Incident Management
                </a>{' '}
                to understand incident handling concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
