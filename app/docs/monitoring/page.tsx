import { Metadata } from 'next'
import { Zap, Activity, TrendingUp, Bell, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real-time Monitoring - Pulsimo Documentation',
  description: 'Understanding Pulsimo\'s real-time monitoring architecture and WebSocket updates',
}

export default function MonitoringPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Real-Time Monitoring</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo implements true real-time monitoring with sub-10-second alert latency, compared to traditional 
          scraping-based systems like Prometheus which typically have 1-5 minute delays.
        </p>
      </div>

      {/* Key Innovation */}
      <h2>Key Innovation: Active Health Checks</h2>
      <div className="not-prose p-6 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500 my-6">
        <p className="text-slate-700 dark:text-slate-300 m-0">
          Instead of waiting for metrics to be scraped, Pulsimo <strong>actively checks service health every 10 seconds</strong> and 
          immediately publishes status changes via WebSocket and Redis PubSub.
        </p>
      </div>

      {/* Comparison */}
      <h2>Pulsimo vs Prometheus/Grafana</h2>
      
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Aspect</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Pulsimo</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Prometheus + Grafana</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Architecture</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">Push-based (Active checks)</td>
              <td className="py-3 px-4">Pull-based (Scraping)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Check Interval</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">10 seconds (configurable)</td>
              <td className="py-3 px-4">15-60 seconds (typical)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Alert Latency</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-bold">1-10 seconds</td>
              <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-medium">1-5 minutes</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Real-Time UI</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">WebSocket (built-in)</td>
              <td className="py-3 px-4">Polling (Grafana refresh)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Multi-Tenancy</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">Native (organizations)</td>
              <td className="py-3 px-4">Complex setup required</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Setup Complexity</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">Single Docker Compose</td>
              <td className="py-3 px-4">Multiple components + config</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Alert Latency Comparison */}
      <h2>Alert Latency Comparison</h2>

      <h3>Prometheus Scraping Model 🐌</h3>
      <div className="not-prose p-5 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 my-4">
        <pre className="text-xs text-orange-900 dark:text-orange-100 m-0 font-mono overflow-x-auto">
{`Timeline (Prometheus):
─────────────────────────────────────────────────────────
0s        15s       30s       45s       60s       75s
│         │         │         │         │         │
Scrape    Scrape    Scrape    Scrape    Scrape    Scrape
          ↑ Service down                ↑ Detected (30-45s later)`}
        </pre>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-orange-900 dark:text-orange-100 m-0">
            <strong>Prometheus Workflow:</strong>
          </p>
          <ol className="text-xs text-orange-800 dark:text-orange-200 space-y-1 ml-4">
            <li>Service goes down at time T</li>
            <li>Prometheus scrapes at T+15s (next interval)</li>
            <li>Scrape fails → Metric shows service down</li>
            <li>Evaluation interval → Alert rule checked (another 15-30s)</li>
            <li>Alert fires → Alertmanager receives (another 1-5s)</li>
            <li>Notification sent → Email/Slack (another 5-10s)</li>
          </ol>
          <p className="text-sm text-orange-900 dark:text-orange-100 font-bold mt-3 m-0">
            ⏱️ Total Latency: 30-60 seconds minimum, often 1-5 minutes
          </p>
        </div>
      </div>

      <h3>Pulsimo Active Check Model ⚡</h3>
      <div className="not-prose p-5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 my-4">
        <pre className="text-xs text-green-900 dark:text-green-100 m-0 font-mono overflow-x-auto">
{`Timeline (Pulsimo):
─────────────────────────────────────────────────────────
0s        10s       20s       30s       40s       50s
│         │         │         │         │         │
Check     Check     Check     Check     Check     Check
          ↑ Service down
          ↓ Incident created (instant)
          ↓ WebSocket broadcast (instant)
          ↓ Email sent (1-2s)`}
        </pre>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>Pulsimo Workflow:</strong>
          </p>
          <ol className="text-xs text-green-800 dark:text-green-200 space-y-1 ml-4">
            <li>Service goes down at time T</li>
            <li>Next health check at T+10s (or less)</li>
            <li>Check fails → Immediately detected</li>
            <li>Incident created → Database write (50-100ms)</li>
            <li>Redis PubSub → Event published (5-10ms)</li>
            <li>Notification Service → Email sent (1-2s)</li>
            <li>WebSocket → Frontend updated (10-50ms)</li>
          </ol>
          <p className="text-sm text-green-900 dark:text-green-100 font-bold mt-3 m-0">
            ⚡ Total Latency: 1-10 seconds
          </p>
        </div>
      </div>

      {/* WebSocket Real-Time Updates */}
      <h2>WebSocket Real-Time Updates</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <Radio className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Instant Dashboard Updates</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Status changes appear immediately on all connected dashboards without page refresh
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <Bell className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Live Incident Notifications</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            New incidents appear in real-time with visual and sound notifications
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Activity className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Real-Time Metrics</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Response times and health check results stream continuously
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Multi-User Sync</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            All team members see the same state simultaneously
          </p>
        </div>
      </div>

      {/* Benefits */}
      <h2>Benefits of Real-Time Monitoring</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>⚡ Faster Response:</strong> Detect and respond to incidents 3-30x faster than traditional 
            monitoring systems. Minutes matter during outages.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>👥 Better Collaboration:</strong> Entire team sees incidents simultaneously. No confusion 
            about who's working on what.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>📊 Accurate MTTR:</strong> Sub-second precision in detecting failures leads to accurate 
            Mean Time To Repair metrics.
          </p>
        </div>
      </div>

    </div>
  )
}
