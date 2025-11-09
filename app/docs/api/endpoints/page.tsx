import { Metadata } from 'next'
import { Code, Clock, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Endpoints API - Coming Soon - Pulsimo Documentation',
  description: 'API documentation for managing monitoring endpoints',
}

export default function EndpointsApiPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4">
            <Code className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Endpoints API
        </h1>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-6">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">Coming Soon</span>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Complete API reference for creating, updating, deleting, and querying monitoring endpoints. 
          Documentation will include request/response examples and error codes.
        </p>
        
        <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-3 text-left">
            <Bell className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Stay Tuned</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Learn about{' '}
                <a href="/docs/health-checks" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Health Checks
                </a>{' '}
                and{' '}
                <a href="/docs/users/api-keys" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  API Keys
                </a>{' '}
                to get started with the API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
