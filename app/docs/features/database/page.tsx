import { Metadata } from 'next'
import { Database, Clock, Trash2, BarChart3, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Database Health - Pulsimo Documentation',
  description: 'Internal database monitoring with automated maintenance schedulers and cron jobs',
}

export default function DatabasePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Database Health Monitoring</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo monitors its own PostgreSQL database health with automated maintenance schedulers 
          and cron jobs to prevent heavy data accumulation and ensure optimal performance.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        Pulsimo provides native support for monitoring its internal database health, including connection 
        verification, query performance tracking, and automated maintenance scheduling to keep the database 
        optimized and prevent storage bloat.
      </p>

      {/* Supported Features */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">PostgreSQL</h3>
          </div>
          <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-1 m-0">
            <li>• Connection health monitoring</li>
            <li>• Query performance tracking</li>
            <li>• Table statistics analysis</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Automated Tasks</h3>
          </div>
          <ul className="text-sm text-purple-900 dark:text-purple-100 space-y-1 m-0">
            <li>• Hourly data aggregation</li>
            <li>• Daily cleanup operations</li>
            <li>• Statistics generation</li>
          </ul>
        </div>
      </div>

      {/* Maintenance Scheduler */}
      <h2>Automated Maintenance Scheduler</h2>
      <p>
        Pulsimo runs automated cron jobs to maintain database health and prevent excessive data storage:
      </p>

      <div className="not-prose space-y-4 my-6">
        <div className="flex gap-4 p-5 rounded-lg bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <Clock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Hourly Aggregation</h4>
            <p className="text-sm text-green-800 dark:text-green-200 m-0">
              Aggregates health check data every hour to reduce database size. Raw health check records 
              are summarized into hourly metrics, keeping detailed data for the last 24 hours while 
              storing aggregated data for historical analysis.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-lg bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
          <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Daily Cleanup</h4>
            <p className="text-sm text-red-800 dark:text-red-200 m-0">
              Archives old health check records daily to prevent table bloat. By default, raw health 
              check data older than 30 days is moved to archive tables or deleted based on retention 
              policies. This prevents the database from growing indefinitely.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Statistics Generation</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
              Generates performance reports and trend analysis data. Creates daily, weekly, and monthly 
              statistics for uptime percentages, average response times, and incident frequency without 
              storing every individual data point.
            </p>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="not-prose my-8 p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">Why Automated Maintenance Matters</h3>
            <p className="text-sm opacity-90 mb-0">
              Without automated cleanup, Pulsimo's database could grow to hundreds of gigabytes within 
              months when monitoring 500+ endpoints with 10-second check intervals. The maintenance 
              scheduler ensures:
            </p>
          </div>
        </div>
        <ul className="text-sm space-y-1 mt-4 ml-9">
          <li>✓ Database size remains manageable (typically under 10GB)</li>
          <li>✓ Query performance stays fast even with long-running deployments</li>
          <li>✓ Disk space doesn't fill up unexpectedly</li>
          <li>✓ Historical trends are preserved without storing raw data</li>
        </ul>
      </div>

      {/* Configuration */}
      <h2>Scheduler Configuration</h2>
      <p>The maintenance schedulers run automatically via cron jobs configured during installation:</p>

      <div className="not-prose my-4 bg-slate-900 dark:bg-black rounded-lg p-5">
        <pre className="text-cyan-400 text-sm font-mono m-0">{`# Hourly Aggregation (runs at :00)
0 * * * * /app/scripts/aggregate-health-data.sh

# Daily Cleanup (runs at 2:00 AM)
0 2 * * * /app/scripts/cleanup-old-data.sh

# Statistics Generation (runs at 3:00 AM)  
0 3 * * * /app/scripts/generate-statistics.sh`}</pre>
      </div>

      {/* Retention Policies */}
      <h2>Data Retention Policies</h2>
      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Data Type</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Retention Period</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Storage Format</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Raw Health Checks</td>
              <td className="py-3 px-4">24 hours</td>
              <td className="py-3 px-4">Full detail</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Hourly Aggregates</td>
              <td className="py-3 px-4">30 days</td>
              <td className="py-3 px-4">Summarized metrics</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Daily Summaries</td>
              <td className="py-3 px-4">1 year</td>
              <td className="py-3 px-4">Aggregated stats</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Incidents</td>
              <td className="py-3 px-4">Indefinite</td>
              <td className="py-3 px-4">Full detail preserved</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Monitoring Database Health */}
      <h2>Monitoring Database Health</h2>
      <p>Track Pulsimo's own database health through the system:</p>
      <ul>
        <li><strong>Connection Pool:</strong> Monitor active connections and pool saturation</li>
        <li><strong>Query Performance:</strong> Track slow queries and optimize indexes</li>
        <li><strong>Table Sizes:</strong> Monitor table growth and vacuum operations</li>
        <li><strong>Disk Usage:</strong> Alert when database size approaches limits</li>
      </ul>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>💾 Monitor Disk Space:</strong> Ensure your server has adequate disk space. Even with 
            cleanup, plan for at least 20GB for the database in production.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>📊 Review Logs:</strong> Check maintenance logs regularly to ensure cleanup jobs complete 
            successfully and don't encounter errors.
          </p>
        </div>
      </div>

    </div>
  )
}
