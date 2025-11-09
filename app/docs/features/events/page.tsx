import { Metadata } from 'next'
import { FileText, Users, Activity, Shield, Clock, Search, Filter, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Event Trail - Pulsimo Documentation',
  description: 'Comprehensive audit logging and activity tracking for compliance and debugging',
}

export default function EventsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Event Trail</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The Event Trail provides a complete audit log of all actions taken in Pulsimo, including user activities, 
          system events, configuration changes, and incident updates - essential for compliance and debugging.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        Track all user actions and system events in real-time with comprehensive audit logging. The Event Trail 
        captures everything that happens in Pulsimo, providing a searchable, filterable history for compliance 
        requirements, security audits, and troubleshooting configuration issues.
      </p>

      {/* Key Benefits */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Compliance</h3>
          </div>
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            Meet audit requirements with complete activity logs for GDPR, HIPAA, and SOC2 compliance
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Search className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Debugging</h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            Trace configuration changes that caused issues and identify who made specific modifications
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Security</h3>
          </div>
          <p className="text-sm text-red-900 dark:text-red-100 m-0">
            Monitor unauthorized access attempts and track all user login/logout activities
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Accountability</h3>
          </div>
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            Track who made specific changes with timestamped records and IP addresses
          </p>
        </div>
      </div>

      {/* Tracked Events */}
      <h2>Tracked Events</h2>
      
      <h3>User Actions</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Authentication</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• User login/logout</li>
            <li>• Failed login attempts</li>
            <li>• Password changes</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Endpoint Management</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Endpoint creation</li>
            <li>• Configuration modifications</li>
            <li>• Endpoint deletion</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Project Operations</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Project creation</li>
            <li>• Project updates</li>
            <li>• Project deletion</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Notifications</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Channel configuration</li>
            <li>• Alert policy changes</li>
            <li>• Test notifications</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">User Management</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• User creation</li>
            <li>• Role changes</li>
            <li>• User deactivation</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Dependencies</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Dependency creation</li>
            <li>• Type modifications</li>
            <li>• Dependency removal</li>
          </ul>
        </div>
      </div>

      <h3>System Events</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Health Checks</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Health check executions</li>
            <li>• Response time measurements</li>
            <li>• Success/failure results</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Status Changes</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Service UP → DOWN transitions</li>
            <li>• Service DOWN → UP recoveries</li>
            <li>• Degraded state detection</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Incidents</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Incident creation</li>
            <li>• Acknowledgements</li>
            <li>• Status updates</li>
            <li>• Resolutions</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Alerts</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Alert dispatches</li>
            <li>• Delivery confirmations</li>
            <li>• Failed deliveries</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Maintenance</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• Scheduled tasks execution</li>
            <li>• Database cleanup operations</li>
            <li>• Data aggregation runs</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">API Calls</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 m-0">
            <li>• API key usage</li>
            <li>• External integrations</li>
            <li>• Webhook triggers</li>
          </ul>
        </div>
      </div>

      {/* Event Details */}
      <h2>Event Details</h2>
      <p>Each event in the trail includes comprehensive information:</p>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Example</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Timestamp</td>
              <td className="py-3 px-4">When the event occurred</td>
              <td className="py-3 px-4 font-mono text-xs">2024-11-09 03:15:42 UTC</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">User</td>
              <td className="py-3 px-4">Who performed the action</td>
              <td className="py-3 px-4">john.doe@company.com</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Event Type</td>
              <td className="py-3 px-4">Category of the event</td>
              <td className="py-3 px-4">ENDPOINT_CREATED</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Details</td>
              <td className="py-3 px-4">Specific information</td>
              <td className="py-3 px-4">Created "API Gateway" endpoint</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">IP Address</td>
              <td className="py-3 px-4">Origin of the action</td>
              <td className="py-3 px-4 font-mono text-xs">192.168.1.100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Filtering & Search */}
      <h2>Filtering & Search</h2>
      <p>Find specific events quickly using powerful filters:</p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="flex gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-2">Date Range Filters</h4>
            <p className="text-xs text-blue-800 dark:text-blue-200 m-0">
              Filter by last hour, 24 hours, 7 days, 30 days, or custom date range
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <Filter className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 text-sm mb-2">Event Type Filters</h4>
            <p className="text-xs text-purple-800 dark:text-purple-200 m-0">
              Show only specific event types like logins, endpoint changes, or incidents
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <Users className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-2">User-Specific Filters</h4>
            <p className="text-xs text-green-800 dark:text-green-200 m-0">
              See all actions performed by a specific user for accountability
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <Search className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 text-sm mb-2">Text Search</h4>
            <p className="text-xs text-orange-800 dark:text-orange-200 m-0">
              Search event details for specific keywords, service names, or descriptions
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <h2>Common Use Cases</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Compliance</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
            Meet audit requirements with complete activity logs. Export event history for SOC2, HIPAA, or GDPR 
            compliance audits showing who accessed what and when.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">Debugging</h3>
          <p className="text-sm text-purple-800 dark:text-purple-200 m-0">
            Trace configuration changes that caused issues. When something breaks, search the event trail to see 
            exactly what was changed, when, and by whom.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">Security</h3>
          <p className="text-sm text-red-800 dark:text-red-200 m-0">
            Monitor unauthorized access attempts and suspicious activities. Review failed login attempts, unusual 
            configuration changes, or access patterns that deviate from normal behavior.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">Accountability</h3>
          <p className="text-sm text-green-800 dark:text-green-200 m-0">
            Track who made specific changes with timestamped records. Perfect for team environments where multiple 
            people manage the same monitoring infrastructure.
          </p>
        </div>
      </div>

      {/* Exporting Events */}
      <h2>Exporting Events</h2>
      <div className="not-prose p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 my-6">
        <div className="flex gap-3 mb-3">
          <Download className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Export Capabilities</h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Export filtered event data for external analysis or archival:
        </p>
        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
          <li>• <strong>CSV Export:</strong> Spreadsheet-compatible format</li>
          <li>• <strong>JSON Export:</strong> Machine-readable structured data</li>
          <li>• <strong>Filtered Exports:</strong> Only export events matching current filters</li>
        </ul>
      </div>

    </div>
  )
}
