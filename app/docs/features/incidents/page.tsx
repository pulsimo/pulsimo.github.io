import { Metadata } from 'next'
import { AlertCircle, CheckCircle2, Clock, Users, FileText, TrendingUp, Bell, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Incident Management - Pulsimo Documentation',
  description: 'Complete incident lifecycle management with acknowledgement, investigation, and post-mortem generation',
}

export default function IncidentsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Incident Management</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Incidents are the cornerstone of operational response when services fail. Pulsimo provides a comprehensive 
          incident management system that tracks the entire lifecycle from detection through resolution.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        When a monitored endpoint fails health checks beyond its configured threshold, Pulsimo automatically creates 
        an incident. This incident becomes the central hub for all information, actions, and collaboration related to 
        that outage. From automatic creation to post-mortem generation, the incident management system guides your 
        team through effective incident response.
      </p>

      {/* Key Benefits */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Automatic Detection</h3>
          </div>
          <p className="text-sm text-red-900 dark:text-red-100 m-0">
            Incidents created instantly when thresholds exceeded - no manual intervention required
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Bell className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Alert Management</h3>
          </div>
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            Stop notification spam by acknowledging incidents - prevent alert fatigue
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Collaboration</h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            Multiple team members can work on same incident with investigation notes
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Post-Mortems</h3>
          </div>
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            Automatic report generation with timeline, metrics, and complete audit trail
          </p>
        </div>
      </div>

      {/* Incident Lifecycle */}
      <h2>Incident Lifecycle</h2>
      <p>Every incident progresses through four defined states:</p>

      {/* OPEN State */}
      <div className="not-prose my-6 p-6 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">1</div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">OPEN</h3>
            <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-red-500 text-white mt-1">Red Badge</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Triggered When:</h4>
            <ul className="text-sm text-red-800 dark:text-red-200 space-y-1 m-0">
              <li>• Endpoint fails consecutive health checks (threshold exceeded)</li>
              <li>• Automatic incident creation, no manual intervention</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">System Actions:</h4>
            <ul className="text-sm text-red-800 dark:text-red-200 space-y-1 m-0">
              <li>✓ Creates incident record</li>
              <li>✓ Sends alerts to notification channels</li>
              <li>✓ Displays in Incidents page</li>
              <li>✓ Records start time</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ACKNOWLEDGED State */}
      <div className="not-prose my-6 p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">2</div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">ACKNOWLEDGED</h3>
            <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-yellow-500 text-white mt-1">Yellow Badge</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Triggered When:</h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 m-0">
              Team member clicks "Acknowledge" button (Member or Admin role)
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">System Actions:</h4>
            <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1 m-0">
              <li>✓ Stops sending repeat alerts</li>
              <li>✓ Records who acknowledged and when</li>
              <li>✓ Notifies team of acknowledgement</li>
            </ul>
          </div>
          
          <div className="mt-3 p-3 rounded bg-yellow-100 dark:bg-yellow-900/30">
            <p className="text-sm text-yellow-900 dark:text-yellow-100 m-0">
              <strong>Best Practice:</strong> Acknowledge immediately when starting work and add a note explaining what you're doing
            </p>
          </div>
        </div>
      </div>

      {/* INVESTIGATING State */}
      <div className="not-prose my-6 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">INVESTIGATING</h3>
            <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-500 text-white mt-1">Blue Badge</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What This Means:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 m-0">
              <li>• Active troubleshooting underway</li>
              <li>• Root cause analysis in progress</li>
              <li>• Fix being implemented</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">User Actions Available:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 m-0">
              <li>✓ Add detailed investigation notes</li>
              <li>✓ Document findings and troubleshooting steps</li>
              <li>✓ Attach screenshots or logs</li>
              <li>✓ Update progress</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RESOLVED State */}
      <div className="not-prose my-6 p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">4</div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">RESOLVED</h3>
            <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-green-500 text-white mt-1">Green Badge</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">System Actions:</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 m-0">
              <li>✓ Marks incident as resolved</li>
              <li>✓ Calculates total downtime</li>
              <li>✓ Calculates time-to-resolve (TTR)</li>
              <li>✓ Updates MTTR metrics</li>
              <li>✓ Sends recovery notification</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">User Actions Available:</h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 m-0">
              <li>✓ Add resolution notes (what fixed it)</li>
              <li>✓ Generate post-mortem report</li>
              <li>✓ Export incident data (JSON)</li>
              <li>✓ View complete timeline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Acknowledging Incidents */}
      <h2>How to Acknowledge an Incident</h2>
      <p>When you receive an alert notification:</p>
      <ol>
        <li>Navigate to the <strong>Incidents</strong> page in the sidebar</li>
        <li>Click on the open incident</li>
        <li>Click the <strong>"Acknowledge"</strong> button</li>
        <li>Add optional notes about your investigation plan</li>
        <li>This stops repeat notifications and prevents alert fatigue</li>
      </ol>

      {/* Key Features */}
      <h2>Key Features</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Clock className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">MTTR Tracking</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Mean Time To Resolution calculated automatically for every incident
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <FileText className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Complete Audit Trail</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Every action timestamped and attributed to specific users
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Incident Analytics</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Track incident frequency, patterns, and affected services
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Post-Mortem Generation</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Automated reports with timeline, metrics, and resolution details
            </p>
          </div>
        </div>
      </div>

      {/* Incident Metrics */}
      <h2>Incident Metrics</h2>
      <p>Pulsimo automatically calculates key metrics for every incident:</p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Metric</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Example</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">MTTR</td>
              <td className="py-3 px-4">Mean Time To Repair - Average resolution time</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">23.5 minutes</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">MTTD</td>
              <td className="py-3 px-4">Mean Time To Detect - Time until incident created</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">2.3 minutes</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">Total Downtime</td>
              <td className="py-3 px-4">Complete duration service was unavailable</td>
              <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-medium">1,410 seconds (23.5 min)</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">Affected Checks</td>
              <td className="py-3 px-4">Number of failed health check attempts</td>
              <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">47 failed checks</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">Incident Count (24h)</td>
              <td className="py-3 px-4">Total incidents in last 24 hours</td>
              <td className="py-3 px-4 text-purple-600 dark:text-purple-400 font-medium">3 incidents</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>📝 Document Everything:</strong> Add investigation notes as you troubleshoot. Future you 
            (and your team) will thank you when writing the post-mortem.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>⚡ Acknowledge Quickly:</strong> Acknowledge incidents immediately when you start working 
            on them to stop alert spam and signal to others that it's being handled.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>🔍 Review Patterns:</strong> Regularly review incident history to identify recurring 
            issues and proactively address root causes.
          </p>
        </div>
      </div>

    </div>
  )
}
