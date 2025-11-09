import { Metadata } from 'next'
import { CheckCircle2, Rocket, FolderPlus, Link2, Bell, BarChart3, GitBranch, Users, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quick Start Guide - Pulsimo Documentation',
  description: 'Get started with Pulsimo in 15 minutes - Step-by-step guide',
}

export default function QuickStartPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Quick Start Guide</h1>

      <h2>Prerequisites</h2>
      <p>Before starting, ensure you have:</p>
      <ul>
        <li>✅ Pulsimo installed and running</li>
        <li>✅ Created an admin account</li>
        <li>✅ Logged into the web interface</li>
      </ul>
      <div className="not-prose p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 my-6">
        <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
          ℹ️ If you haven't completed installation, see the{' '}
          <a href="/docs/installation" className="font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
            Installation Guide
          </a>
          .
        </p>
      </div>

      {/* Step 1 - Create Project */}
      <div className="not-prose my-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-xl">
            1
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Create Your First Project</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm m-0">Organize your monitoring endpoints</p>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Projects help organize your monitoring endpoints by team, application, or environment.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Navigate to Projects</h3>
        <ol className="space-y-2 text-slate-600 dark:text-slate-400">
          <li>1. Click <strong className="text-slate-900 dark:text-white">"Projects"</strong> in the left sidebar</li>
          <li>2. Click the <strong className="text-slate-900 dark:text-white">"New Project"</strong> button (top-right, blue gradient)</li>
        </ol>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Fill Project Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Field</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Example</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400">
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Project Name</td>
                <td className="py-3 px-4">Descriptive name for your project</td>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">Production Web Services</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Description</td>
                <td className="py-3 px-4">Brief overview of what this project monitors</td>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">Main customer-facing web application</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Color</td>
                <td className="py-3 px-4">Visual identifier for the project</td>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">Blue, Green, or any color</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Tags</td>
                <td className="py-3 px-4">Keywords for filtering and organization</td>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">production, web, critical</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Priority</td>
                <td className="py-3 px-4">Importance level</td>
                <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">High, Medium, Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>✅ Success!</strong> Your project is now ready to contain monitoring endpoints!
          </p>
        </div>
      </div>

      {/* Step 2 - Add Endpoint */}
      <div className="not-prose my-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-xl">
            2
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Add Your First Endpoint</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm m-0">Monitor your services</p>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Endpoints are the services you want to monitor (APIs, websites, databases, etc.).
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Navigate to Dashboard</h3>
        <ol className="space-y-2 text-slate-600 dark:text-slate-400">
          <li>1. Click <strong className="text-slate-900 dark:text-white">"Dashboard"</strong> in the left sidebar</li>
          <li>2. Click the <strong className="text-slate-900 dark:text-white">"Add Endpoint"</strong> button (top-right, blue gradient)</li>
        </ol>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Basic Information</h3>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-6 mb-4">
          <div className="font-mono text-sm space-y-3">
            <div><span className="text-slate-500">Endpoint Name:</span> <span className="text-cyan-400">"Main API Health Check"</span></div>
            <div><span className="text-slate-500">URL:</span> <span className="text-cyan-400">https://api.yourcompany.com/health</span></div>
            <div><span className="text-slate-500">Service Type:</span> <span className="text-cyan-400">HTTP/HTTPS</span></div>
            <div><span className="text-slate-500">Project:</span> <span className="text-cyan-400">"Production Web Services"</span></div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Health Check Configuration</h3>
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Check Interval</td>
              <td className="py-3 px-4">30 seconds (recommended)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Timeout</td>
              <td className="py-3 px-4">30 seconds</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Expected Status Code</td>
              <td className="py-3 px-4">200 (OK)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Authentication (if required)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Bearer Token</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">For JWT or API tokens</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">API Key</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Custom header authentication</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Basic Auth</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Username and password</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Alert Policy</h3>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
          <li><strong className="text-slate-900 dark:text-white">Failure Threshold:</strong> 3 (prevents false positives)</li>
          <li><strong className="text-slate-900 dark:text-white">First Failure Warning:</strong> Enable for critical services only</li>
          <li><strong className="text-slate-900 dark:text-white">Recovery Notification:</strong> Enable (to know when issues resolve)</li>
        </ul>

        <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>✅ Your endpoint is now being monitored!</strong> Within 10 seconds, you'll see the first health check result.
          </p>
        </div>
      </div>

      {/* Step 3 - Notifications */}
      <div className="not-prose my-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-xl">
            3
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Set Up Notifications</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm m-0">Get alerted when services go down</p>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Configure where you want to receive alerts when services go down. Pulsimo supports 6+ notification channels.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Slack', icon: '💬', color: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' },
            { name: 'Discord', icon: '🎮', color: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' },
            { name: 'Email', icon: '📧', color: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20' },
            { name: 'Microsoft Teams', icon: '👥', color: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20' },
            { name: 'Google Chat', icon: '📱', color: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' },
            { name: 'Custom Webhook', icon: '🔗', color: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20' },
          ].map((channel) => (
            <div key={channel.name} className={`p-4 rounded-lg bg-gradient-to-br ${channel.color} border border-slate-200 dark:border-slate-700`}>
              <div className="text-2xl mb-2">{channel.icon}</div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{channel.name}</h4>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Configure Slack (Example)</h3>
        <div className="space-y-4">
          <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
            <div className="font-mono text-sm text-cyan-400 space-y-2">
              <div><span className="text-slate-500">1.</span> Go to Slack workspace settings</div>
              <div><span className="text-slate-500">2.</span> Navigate to "Apps" → "Incoming Webhooks"</div>
              <div><span className="text-slate-500">3.</span> Click "Add to Slack"</div>
              <div><span className="text-slate-500">4.</span> Select channel and copy webhook URL</div>
              <div><span className="text-slate-500">5.</span> Paste webhook in Pulsimo notification channel</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
              <strong>💡 Pro Tip:</strong> Test your channel after creating it with the "Test" button to ensure notifications work correctly.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Checklist */}
      <div className="not-prose my-12 p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">✅ Quick Start Checklist</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Created at least one project',
            'Added 3-5 critical endpoints',
            'Configured at least one notification channel',
            'Tested notification channel successfully',
            'Set appropriate failure thresholds',
            'Can read dashboard status cards',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <h2>Next Steps</h2>
      <p>Now that you've completed the quick start, explore these advanced features:</p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <a href="/docs/features/incidents" className="block p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-bold text-slate-900 dark:text-white m-0">Incident Management</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Learn how to acknowledge, investigate, and resolve incidents
          </p>
        </a>

        <a href="/docs/features/dependencies" className="block p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <GitBranch className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-bold text-slate-900 dark:text-white m-0">Dependency Mapping</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Visualize service dependencies and critical paths
          </p>
        </a>

        <a href="/docs/features/performance" className="block p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-bold text-slate-900 dark:text-white m-0">Performance Analytics</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Track SLAs, response times, and availability metrics
          </p>
        </a>

        <a href="/docs/users/roles" className="block p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-bold text-slate-900 dark:text-white m-0">User Management</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Add team members with role-based access control
          </p>
        </a>
      </div>
    </div>
  )
}
