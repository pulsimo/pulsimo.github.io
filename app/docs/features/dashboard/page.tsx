import { Metadata } from 'next'
import { Activity, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Plus, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard - Pulsimo Documentation',
  description: 'Real-time service monitoring dashboard with live updates',
}

export default function DashboardPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Dashboard - Real-Time Service Monitoring</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The Dashboard is your central command center for monitoring all services in real-time. It provides instant 
          visibility into your entire infrastructure's health with live updates and intuitive visual indicators.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        The Dashboard displays all monitored endpoints with their current health status, response times, and 
        availability metrics. Built with WebSocket technology, it updates automatically without requiring page 
        refreshes, ensuring you always see the latest state of your infrastructure.
      </p>

      {/* Key Benefits */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        {[
          { icon: Activity, title: 'Instant Visibility', desc: 'See all service statuses at a glance' },
          { icon: RefreshCw, title: 'Real-Time Updates', desc: 'WebSocket-powered live data streaming' },
          { icon: Plus, title: 'Quick Actions', desc: 'Add endpoints and refresh data with one click' },
          { icon: Server, title: 'Smart Organization', desc: 'Filter and group by projects, status, or tags' },
        ].map((benefit) => (
          <div key={benefit.title} className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <benefit.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 m-0">{benefit.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard Components */}
      <h2>Dashboard Components</h2>

      <h3>1. Header Section</h3>
      <p><strong>Page Title:</strong> "Service Dashboard" with subtitle "Monitor all your services in real-time"</p>
      
      <p><strong>Action Buttons:</strong></p>
      <ul>
        <li><strong>Refresh Button</strong> - Manually triggers data refresh, useful after configuration changes</li>
        <li><strong>Add Endpoint Button</strong> - Primary action button that opens endpoint creation dialog</li>
      </ul>

      {/* Stats Cards */}
      <h3>2. Stats Overview Cards</h3>
      <p>Four summary cards displaying aggregate metrics:</p>

      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-2">
            <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Total Endpoints</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Total number of monitored services
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Healthy (UP)</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Services currently passing health checks
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-2">
            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Down</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Services currently failing health checks
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Partial Outage</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Services with degraded performance
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <h3>3. Service Cards</h3>
      <p>Each monitored endpoint is displayed as a card showing:</p>

      <div className="not-prose my-4">
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Service Name</td>
              <td className="py-3 px-4">Friendly name of the endpoint</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">URL</td>
              <td className="py-3 px-4">The monitored endpoint address</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Status Badge</td>
              <td className="py-3 px-4">UP (green), DOWN (red), CHECKING (blue)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Response Time</td>
              <td className="py-3 px-4">Current response time in milliseconds</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Check Interval</td>
              <td className="py-3 px-4">How often the service is checked</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Last Checked</td>
              <td className="py-3 px-4">Timestamp of last health check</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Uptime %</td>
              <td className="py-3 px-4">24-hour availability percentage</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-Time Updates */}
      <h3>4. Real-Time Updates</h3>
      <p>The dashboard leverages WebSocket technology for live updates:</p>
      <ul>
        <li>⚡ <strong>Instant feedback</strong> when endpoints change status</li>
        <li>🔄 <strong>Live countdown</strong> showing time until next check</li>
        <li>📊 <strong>Real-time metrics</strong> without page refresh</li>
        <li>🔔 <strong>Visual notifications</strong> when services go down/up</li>
      </ul>

      {/* Status Indicators */}
      <h2>Status Indicators</h2>

      <h3>Color Coding</h3>
      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-lg border-2 border-green-500 dark:border-green-600 bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h4 className="font-bold text-green-900 dark:text-green-100 m-0">UP</h4>
          </div>
          <p className="text-sm text-green-800 dark:text-green-200 m-0">
            Service is healthy and responding correctly
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <h4 className="font-bold text-red-900 dark:text-red-100 m-0">DOWN</h4>
          </div>
          <p className="text-sm text-red-800 dark:text-red-200 m-0">
            Service is failing health checks
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-blue-500 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100 m-0">CHECKING</h4>
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
            Health check currently in progress
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2>Quick Actions</h2>

      <h3>Adding a New Endpoint</h3>
      <ol>
        <li>Click the <strong>"Add Endpoint"</strong> button (top-right)</li>
        <li>Fill in endpoint details (name, URL, type)</li>
        <li>Configure health check settings</li>
        <li>Set alert policies</li>
        <li>Click "Create" to start monitoring</li>
      </ol>

      <h3>Managing Endpoints</h3>
      <ul>
        <li><strong>Edit:</strong> Click the pencil icon on any service card</li>
        <li><strong>Delete:</strong> Click the trash icon (requires confirmation)</li>
        <li><strong>Pause:</strong> Temporarily disable monitoring</li>
        <li><strong>View Details:</strong> Click the card for full metrics</li>
      </ul>

      {/* Best Practices */}
      <h2>Best Practices</h2>

      <div className="not-prose space-y-4 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Organize by Projects</h4>
          <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
            Group related endpoints into projects for easier management and team organization
          </p>
        </div>

        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Set Appropriate Check Intervals</h4>
          <p className="text-sm text-green-800 dark:text-green-200 m-0">
            Use 10-second intervals for critical services, 30-60 seconds for less critical ones
          </p>
        </div>

        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Use Tags for Filtering</h4>
          <p className="text-sm text-purple-800 dark:text-purple-200 m-0">
            Add tags like "production", "critical", "database" to quickly filter and find services
          </p>
        </div>
      </div>

      {/* Next Steps */}
      <h2>Next Steps</h2>
      <p>Explore related features:</p>
      <ul>
        <li><a href="/docs/features/performance">Performance Analytics</a> - Detailed metrics and trends</li>
        <li><a href="/docs/features/incidents">Incident Management</a> - Handle service failures</li>
        <li><a href="/docs/features/alerts">Notifications & Alerts</a> - Configure alert channels</li>
      </ul>
    </div>
  )
}
