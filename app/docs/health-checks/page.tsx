import { Metadata } from 'next'
import { Activity, CheckCircle2, Clock, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health Checks - Pulsimo Documentation',
  description: 'Understanding health check system, protocols, and authentication methods',
}

export default function HealthChecksPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Health Check System</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The health check system is the core of Pulsimo's monitoring capabilities. It actively checks the health 
          of your services at configurable intervals and immediately detects failures.
        </p>
      </div>

      {/* Key Features */}
      <h2>Key Features</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <Activity className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Multiple Protocols</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            HTTP, GraphQL, gRPC, WebSocket, PostgreSQL, MySQL, Redis, Elasticsearch, and more
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Flexible Authentication</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            None, Basic, Bearer Token, API Key, OAuth, Custom Headers
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Zap className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Auto-Detection</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Automatically detects service type from URL pattern
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Configurable Intervals</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            10 seconds to 1 hour check intervals with timeout control
          </p>
        </div>
      </div>

      {/* Check Intervals */}
      <h2>Check Intervals</h2>
      <p>Choose the right check interval based on your service criticality:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Interval</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Use Case</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Resource Impact</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-red-600 dark:text-red-400 font-medium">10 seconds</td>
              <td className="py-3 px-4">Critical services</td>
              <td className="py-3 px-4">High</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">30 seconds</td>
              <td className="py-3 px-4">Standard services (Recommended)</td>
              <td className="py-3 px-4">Medium</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-blue-600 dark:text-blue-400 font-medium">60 seconds</td>
              <td className="py-3 px-4">Background services</td>
              <td className="py-3 px-4">Low</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400 font-medium">5 minutes</td>
              <td className="py-3 px-4">Batch jobs</td>
              <td className="py-3 px-4">Very Low</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">1 hour</td>
              <td className="py-3 px-4">Scheduled tasks</td>
              <td className="py-3 px-4">Minimal</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Timeout Settings */}
      <h2>Timeout Settings</h2>
      <p>Set appropriate timeouts based on service type:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Timeout</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white font-medium">3 seconds</td>
              <td className="py-3 px-4">Cache (Redis, Memcached)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white font-medium">5 seconds</td>
              <td className="py-3 px-4">Databases (PostgreSQL, MySQL)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white font-medium">10 seconds</td>
              <td className="py-3 px-4">HTTP APIs</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white font-medium">30 seconds</td>
              <td className="py-3 px-4">Complex queries, heavy endpoints</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 my-6">
        <p className="text-sm text-yellow-900 dark:text-yellow-100 m-0">
          <strong>⚠️ Rule of Thumb:</strong> Timeout should be less than check_interval to prevent check overlap.
        </p>
      </div>

      {/* Authentication Methods */}
      <h2>Authentication Methods</h2>
      
      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">No Authentication</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            For public endpoints and health check endpoints
          </p>
          <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded overflow-x-auto">
            <code>{`{
  "auth_type": "None"
}`}</code>
          </pre>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Basic Authentication</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Username and password sent with each request
          </p>
          <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded overflow-x-auto">
            <code>{`{
  "auth_type": "Basic",
  "auth_credentials": {
    "username": "monitor",
    "password": "secret123"
  }
}`}</code>
          </pre>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 m-0">
            Header: <code>Authorization: Basic &lt;base64(username:password)&gt;</code>
          </p>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Bearer Token</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            For JWT-protected APIs and OAuth 2.0 APIs
          </p>
          <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded overflow-x-auto">
            <code>{`{
  "auth_type": "Bearer",
  "auth_credentials": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}`}</code>
          </pre>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 m-0">
            Header: <code>Authorization: Bearer &lt;token&gt;</code>
          </p>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">API Key</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Custom API key header (default X-API-Key)
          </p>
          <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded overflow-x-auto">
            <code>{`{
  "auth_type": "ApiKey",
  "auth_credentials": {
    "api_key": "sk_live_abc123xyz",
    "header_name": "X-API-Key"
  }
}`}</code>
          </pre>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 m-0">
            Header: <code>X-API-Key: &lt;api_key&gt;</code> (or custom header name)
          </p>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>⏱️ Start Conservative:</strong> Begin with 30-second intervals for new services. Increase 
            frequency only for critical endpoints that require sub-minute detection.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>🔒 Secure Credentials:</strong> Use environment variables or secrets management for 
            authentication credentials. Never hardcode passwords in endpoint configurations.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>📊 Monitor Impact:</strong> Watch your infrastructure load when adding many endpoints with 
            short intervals. Consider staggering checks or increasing intervals if needed.
          </p>
        </div>
      </div>

    </div>
  )
}
