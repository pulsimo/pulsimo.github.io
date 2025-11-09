import { Metadata } from 'next'
import { Bell, Mail, MessageSquare, Hash, Users as UsersIcon, Webhook, CheckCircle2, AlertTriangle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notifications & Alerts - Pulsimo Documentation',
  description: 'Multi-channel notifications via Slack, Discord, Email, Teams, Google Chat, and custom webhooks',
}

export default function AlertsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Notifications & Alerts</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The Alerts feature ensures your team is immediately notified when services experience issues. With support 
          for six notification channels, intelligent routing, and configurable policies, you can eliminate alert 
          fatigue while ensuring critical issues never go unnoticed.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        Effective alerting is the bridge between monitoring and incident response. Pulsimo's alerting system 
        automatically sends notifications when endpoints fail, routing them through your preferred communication 
        channels with smart controls to prevent notification spam while ensuring visibility into critical issues.
      </p>

      {/* Key Benefits */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Bell className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Multi-Channel Support</h3>
          </div>
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            Six platforms out-of-the-box: Email, Slack, Discord, Microsoft Teams, Google Chat, and Webhooks
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Repeat Control</h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            Prevent alert spam with configurable intervals - recommended 15-30 minutes
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Testing & Validation</h3>
          </div>
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            Test channels before relying on them with one-click test notifications
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-7 h-7 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">First-Failure Warnings</h3>
          </div>
          <p className="text-sm text-orange-900 dark:text-orange-100 m-0">
            Option for immediate notification on first failure for critical services
          </p>
        </div>
      </div>

      {/* Supported Channels */}
      <h2>Supported Channels</h2>
      <p>Pulsimo supports six notification platforms out-of-the-box:</p>

      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">📧 Email</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            SMTP-based email notifications with customizable templates
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">💬 Slack</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Incoming webhook integration with rich message formatting
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800">
          <Hash className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🎮 Discord</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Channel webhook notifications with embed support
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border border-cyan-200 dark:border-cyan-800">
          <UsersIcon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">👥 Microsoft Teams</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Incoming webhook connector for Teams channels
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <MessageSquare className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">📱 Google Chat</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Space webhook integration for Google Chat rooms
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-900/20 border border-slate-300 dark:border-slate-700">
          <Webhook className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔗 Custom Webhook</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            POST/GET to any URL for custom integrations
          </p>
        </div>
      </div>

      {/* Creating a Notification Channel */}
      <h2>Creating a Notification Channel</h2>
      <p>Configure your first notification channel in a few simple steps:</p>

      <div className="not-prose my-6">
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">1</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium m-0">Navigate to "Notifications" or "Alerts" in sidebar</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">2</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium m-0">Click "Add Channel" button (top-right, blue gradient)</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">3</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Choose your platform</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">(Slack, Discord, Email, Teams, Google Chat, or Webhook)</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">4</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Enter webhook URL or email address</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">See platform-specific setup instructions below</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">5</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Set repeat interval</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Recommended: 15-30 minutes to prevent alert spam</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">6</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Click "Create" and test the channel</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Use the "Test" button to verify notifications work</p>
            </div>
          </li>
        </ol>
      </div>

      {/* Slack Setup Example */}
      <h2>Slack Setup Example</h2>
      <div className="not-prose my-6 p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-4">Getting Slack Webhook URL</h3>
        <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <li>1. Go to your Slack workspace settings</li>
          <li>2. Navigate to "Apps" → "Incoming Webhooks"</li>
          <li>3. Click "Add to Slack"</li>
          <li>4. Select channel (e.g., <code className="px-2 py-1 rounded bg-purple-200 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100">#production-alerts</code>)</li>
          <li>5. Copy webhook URL</li>
          <li>6. Paste into Pulsimo notification channel configuration</li>
        </ol>
        <div className="mt-4 p-3 rounded bg-purple-100 dark:bg-purple-900/30">
          <p className="text-xs text-purple-900 dark:text-purple-100 m-0">
            <strong>Example Webhook URL:</strong> https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
          </p>
        </div>
      </div>

      {/* Alert Policies */}
      <h2>Alert Policies</h2>
      <p>Configure when and how alerts are sent:</p>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Policy</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Recommended</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Failure Threshold</td>
              <td className="py-3 px-4">Consecutive failures before alerting</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">3-5 failures</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">First Failure Warning</td>
              <td className="py-3 px-4">Alert immediately on first failure</td>
              <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-medium">Critical services only</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Recovery Notification</td>
              <td className="py-3 px-4">Alert when service comes back up</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">Enabled</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Repeat Interval</td>
              <td className="py-3 px-4">How often to repeat alerts</td>
              <td className="py-3 px-4 text-purple-600 dark:text-purple-400 font-medium">15-30 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Incident Severities */}
      <h2>Incident Severities</h2>
      <p>Understand severity levels to route alerts appropriately:</p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Severity</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Response Time</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Example</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-bold text-red-600 dark:text-red-400">Critical</td>
              <td className="py-3 px-4">Complete service outage</td>
              <td className="py-3 px-4 font-medium">Immediate</td>
              <td className="py-3 px-4">API completely down</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-bold text-orange-600 dark:text-orange-400">High</td>
              <td className="py-3 px-4">Major functionality broken</td>
              <td className="py-3 px-4 font-medium">{'< 15 minutes'}</td>
              <td className="py-3 px-4">Database connection errors</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-bold text-yellow-600 dark:text-yellow-400">Medium</td>
              <td className="py-3 px-4">Degraded performance</td>
              <td className="py-3 px-4 font-medium">{'< 1 hour'}</td>
              <td className="py-3 px-4">Slow response times</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">Low</td>
              <td className="py-3 px-4">Minor issues</td>
              <td className="py-3 px-4 font-medium">{'< 4 hours'}</td>
              <td className="py-3 px-4">Non-critical feature broken</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Smart Alerting */}
      <h2>Smart Alerting Features</h2>
      <p>Pulsimo includes intelligent features to prevent alert fatigue:</p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">🔕 Alert Silencing</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Temporarily mute notifications during planned maintenance windows without disabling health checks. System keeps monitoring but won't send alerts.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">⏰ Cooldown Periods</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Prevent duplicate alerts with configurable cooldown periods. Once an alert is sent, it won't repeat for the specified duration.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">✅ Auto-Resolution</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Incidents automatically resolve when service health checks succeed. Recovery notifications sent to keep your team informed.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">🎯 Condition-Based Alerts</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Create custom alert conditions based on consecutive failures, response times, status codes, and more sophisticated rules.
          </p>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>🎯 Start Conservative:</strong> Begin with failure thresholds of 3-5 consecutive failures to 
            avoid false positives from transient network issues.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>📢 Use Different Channels:</strong> Send critical alerts to PagerDuty/phone, warnings to 
            Slack, and summaries to email for appropriate urgency levels.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>✅ Test Everything:</strong> Always test notification channels after configuration. The "Test" 
            button sends a sample alert to verify it works.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <p className="text-sm text-orange-900 dark:text-orange-100 m-0">
            <strong>⏰ Respect Repeat Intervals:</strong> Set appropriate repeat intervals (15-30 min minimum) to 
            prevent alert fatigue while keeping incidents visible.
          </p>
        </div>
      </div>

    </div>
  )
}
