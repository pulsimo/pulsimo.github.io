import { Metadata } from 'next'
import { BarChart3, TrendingUp, Clock, Target, Activity, Zap, CheckCircle2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Performance Analytics - Pulsimo Documentation',
  description: 'Track response times, analyze trends, and ensure SLA compliance with comprehensive performance metrics',
}

export default function PerformancePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Performance Analytics</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Track response times, analyze trends, and ensure SLA compliance with comprehensive performance 
          metrics and detailed insights into your services' performance over time.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        The Performance Analytics page provides in-depth insights into your services' performance over time. 
        Monitor response times, track availability percentages, identify slow endpoints, and analyze trends 
        to optimize your infrastructure.
      </p>

      {/* Key Features */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Detailed Metrics</h3>
          </div>
          <p className="text-sm text-cyan-900 dark:text-cyan-100 m-0">
            Response time, uptime, and success rate tracking across all monitored services
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Trend Analysis</h3>
          </div>
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            Visualize performance trends over time with interactive charts and graphs
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">SLA Tracking</h3>
          </div>
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            99.9% uptime compliance monitoring with detailed availability reports
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Identify Bottlenecks</h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            Find slowest endpoints and optimization opportunities to improve performance
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <h2>Key Metrics</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Activity className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Average Response Time</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Track average response times across all services with breakdown by endpoint, project, and time period
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Uptime Percentage</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              24-hour, 7-day, and 30-day availability metrics to track service reliability
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Success Rate</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Percentage of successful health checks vs failed attempts over selected time range
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Error Rate</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Failed health checks and error trends to identify problematic services
            </p>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <h2>Performance Charts</h2>
      <p>Visual representations of your service performance:</p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Response Time Graph</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            24-hour trend line showing response times with min, max, and average values
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Activity className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Availability Chart</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Uptime percentage over selected period with downtime incidents highlighted
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Comparison View</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Compare performance across multiple endpoints side-by-side
          </p>
        </div>
      </div>

      {/* Supported Protocols */}
      <h2>Supported Monitoring Protocols</h2>
      <p>Pulsimo supports monitoring across multiple service types and protocols:</p>

      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🌐 HTTP/HTTPS</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">REST APIs, web apps</p>
          <code className="text-xs text-blue-600 dark:text-blue-400">GET /health → 200 OK</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">📊 GraphQL</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">GraphQL APIs</p>
          <code className="text-xs text-purple-600 dark:text-purple-400">query HealthCheck</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border border-cyan-200 dark:border-cyan-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">⚡ gRPC</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">gRPC services</p>
          <code className="text-xs text-cyan-600 dark:text-cyan-400">grpc://service:50051</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🐘 PostgreSQL</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">PostgreSQL databases</p>
          <code className="text-xs text-green-600 dark:text-green-400">SELECT 1</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🐬 MySQL</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">MySQL/MariaDB</p>
          <code className="text-xs text-orange-600 dark:text-orange-400">SELECT 1</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔴 Redis</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Redis cache</p>
          <code className="text-xs text-red-600 dark:text-red-400">PING → PONG</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔍 Elasticsearch</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Search clusters</p>
          <code className="text-xs text-yellow-700 dark:text-yellow-400">GET /_cluster/health</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔌 WebSocket</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">WebSocket servers</p>
          <code className="text-xs text-indigo-600 dark:text-indigo-400">PING → PONG</code>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-900/20 border border-slate-300 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔗 Custom</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Any protocol</p>
          <code className="text-xs text-slate-600 dark:text-slate-400">Auto-detection</code>
        </div>
      </div>

      {/* SLA Compliance */}
      <h2>SLA Compliance Tracking</h2>
      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">SLA Target</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Allowed Downtime</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Monthly</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Yearly</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">99.9%</td>
              <td className="py-3 px-4">43 minutes/month</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">✓ Standard</td>
              <td className="py-3 px-4">8.7 hours/year</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">99.95%</td>
              <td className="py-3 px-4">22 minutes/month</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">High</td>
              <td className="py-3 px-4">4.4 hours/year</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">99.99%</td>
              <td className="py-3 px-4">4.3 minutes/month</td>
              <td className="py-3 px-4 text-purple-600 dark:text-purple-400 font-medium">Premium</td>
              <td className="py-3 px-4">52 minutes/year</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Best Practices */}
      <h2>Performance Optimization Tips</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>📊 Monitor Trends:</strong> Watch for gradual increases in response time - they often 
            indicate growing load or degrading infrastructure before failures occur.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>🎯 Set Baselines:</strong> Establish normal performance baselines for each service to 
            quickly identify anomalies and performance degradation.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>⚡ Optimize Slow Endpoints:</strong> Use the comparison view to identify consistently 
            slow services and prioritize optimization efforts.
          </p>
        </div>
      </div>

    </div>
  )
}
