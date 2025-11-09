import { Metadata } from 'next'
import { Key, Code, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Keys - Pulsimo Documentation',
  description: 'Programmatic access with API keys, scopes, and security practices',
}

export default function ApiKeysPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>API Keys</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          API Keys provide programmatic access to Pulsimo's API without requiring user authentication.
        </p>
      </div>

      {/* Use Cases */}
      <h2>Use Cases</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">CI/CD Pipelines</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Add/remove endpoints during deployment
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">External Tools</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Query health data from monitoring tools
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Key className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Custom Dashboards</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Fetch metrics for custom visualizations
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Code className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Infrastructure as Code</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Terraform, Pulumi, and other IaC tools
          </p>
        </div>
      </div>

      {/* Creating API Keys */}
      <h2>Creating API Keys</h2>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500 my-6">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto mb-3">
{`POST /api/v1/api-keys
Authorization: Bearer <jwt-token>
{
  "name": "CI/CD Pipeline",
  "scopes": ["endpoint:read", "endpoint:create"],
  "expires_at": "2026-01-01T00:00:00Z"
}`}
        </pre>
        
        <div className="p-3 rounded-lg bg-red-100 dark:bg-red-950 border border-red-300 dark:border-red-800">
          <div className="flex gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-900 dark:text-red-100 m-0">
              <strong>Important:</strong> API key is shown only once! Save it securely.
            </p>
          </div>
        </div>
      </div>

      {/* API Key Scopes */}
      <h2>API Key Scopes</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Scope</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Permissions</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">endpoint:read</td>
              <td className="py-3 px-4">View endpoints and health checks</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">endpoint:create</td>
              <td className="py-3 px-4">Create new endpoints</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">incident:read</td>
              <td className="py-3 px-4">View incidents</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">analytics:read</td>
              <td className="py-3 px-4">Access analytics data</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-red-600 dark:text-red-400">admin</td>
              <td className="py-3 px-4">Full access (use with caution!)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Using API Keys */}
      <h2>Using API Keys</h2>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto">
{`curl -H "Authorization: Bearer pul_live_abc123..." \\
  https://your-domain.com/api/v1/endpoints`}
        </pre>
      </div>

      {/* Security Best Practices */}
      <h2>Security Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-900 dark:text-red-100 m-0">
            <strong>🚫 Never Commit Keys:</strong> Store in environment variables or secrets manager.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <p className="text-sm text-orange-900 dark:text-orange-100 m-0">
            <strong>🔒 Least Privilege:</strong> Only grant necessary scopes. Avoid admin scope.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-900 dark:text-yellow-100 m-0">
            <strong>🔄 Rotate Regularly:</strong> Change API keys every 90 days.
          </p>
        </div>
      </div>

    </div>
  )
}
