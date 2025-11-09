import { Metadata } from 'next'
import { Server, Database, Zap, GitBranch, Bell, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Architecture - Pulsimo Documentation',
  description: 'Pulsimo system architecture, microservices design, and technology stack',
}

export default function ArchitecturePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>System Architecture</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo is a microservices-based monitoring platform built with Rust and Next.js, designed for 
          high-performance, real-time monitoring of distributed systems.
        </p>
      </div>

      {/* Design Principles */}
      <h2>Design Principles</h2>
      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <Server className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Microservices Architecture</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Independent, scalable services that can be deployed and updated separately
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Zap className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Real-Time First</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            WebSocket-based live updates for instant visibility into system health
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <GitBranch className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Multi-Tenancy</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Organization-level isolation ensures data security and privacy
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Activity className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">High Performance</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Rust backend provides speed, safety, and minimal resource usage
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Developer Experience</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Modern UI built with TypeScript, Next.js 15, and React 19
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800">
          <Database className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Data Sovereignty</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            On-premise deployment with complete data control
          </p>
        </div>
      </div>

      {/* System Components */}
      <h2>System Components</h2>
      
      <h3>Backend Services</h3>
      <div className="not-prose space-y-4 my-6">
        <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500">
          <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">🚪 API Gateway</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Single entry point for all API requests with authentication and routing
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>✓ JWT authentication and authorization</li>
            <li>✓ CORS handling</li>
            <li>✓ API request logging</li>
            <li>✓ Service auto-detection</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500">
          <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">⚕️ Checker Service</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Executes health checks for all endpoints at configurable intervals
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>✓ Supports HTTP, GraphQL, gRPC, WebSocket, PostgreSQL, MySQL, Redis, Elasticsearch</li>
            <li>✓ Detects service failures and timeouts</li>
            <li>✓ Calculates response times</li>
            <li>✓ Triggers incidents on failures</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500">
          <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">📧 Notification Service</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Sends notifications for incidents and alerts via multiple channels
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>✓ Email (SMTP)</li>
            <li>✓ Slack, Discord, Microsoft Teams, Google Chat</li>
            <li>✓ Custom webhooks</li>
            <li>✓ Repeat interval control</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500">
          <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">🔗 Dependency Tracker</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Tracks and analyzes service dependencies
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>✓ Auto-discover service dependencies</li>
            <li>✓ Visualize dependency graphs</li>
            <li>✓ Calculate impact radius</li>
            <li>✓ Detect single points of failure</li>
          </ul>
        </div>
      </div>

      {/* Technology Stack */}
      <h2>Technology Stack</h2>
      
      <h3>Backend</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Component</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Technology</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Language</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">Rust 1.80+</td>
              <td className="py-3 px-4">High performance, memory safety</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Frontend</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Framework</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">Next.js 15</td>
              <td className="py-3 px-4">React with SSR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Infrastructure</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Database</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">PostgreSQL 17</td>
              <td className="py-3 px-4">Primary data store</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Cache</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">Redis 7</td>
              <td className="py-3 px-4">Cache and PubSub</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
