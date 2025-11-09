import { Metadata } from 'next'
import { Building2, FolderKanban, Shield, Users, Settings, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects & Organizations - Pulsimo Documentation',
  description: 'Understanding the hierarchical multi-tenant architecture of Pulsimo',
}

export default function ProjectsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Projects & Organizations</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo uses a hierarchical multi-tenant architecture with Organizations containing Projects containing Endpoints.
        </p>
      </div>

      {/* Hierarchy Diagram */}
      <h2>Resource Hierarchy</h2>
      <div className="not-prose p-6 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-900 border border-slate-200 dark:border-slate-700 my-6">
        <pre className="text-sm text-slate-700 dark:text-slate-300 m-0 font-mono">
{`Organization (Company)
  └─ Project (Environment/Team)
      └─ Endpoints (Services)
          └─ Health Checks
              └─ Incidents`}
        </pre>
      </div>

      {/* Organizations */}
      <h2>Organizations</h2>
      <p>
        An organization represents a <strong>company, team, or business entity</strong>. It's the top-level isolation 
        boundary in Pulsimo.
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Complete Isolation</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Users in Org A cannot see data from Org B. Database-level isolation with organization_id ensures security.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Settings className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Centralized Settings</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Default check intervals, notification channels, branding, and feature flags at organization level.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">User Management</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Separate RBAC and permissions per organization with Owner, Admin, Member, and Viewer roles.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Building2 className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Billing & Limits</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Usage tracking, endpoint limits, user limits, and retention policies per organization.
          </p>
        </div>
      </div>

      <h3>Creating an Organization</h3>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <p className="text-sm text-cyan-900 dark:text-cyan-100 m-0">
            <strong>First Organization:</strong> Created automatically during registration. You become the Owner role 
            with a default project created automatically.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>Additional Organizations:</strong> Contact support for multi-org access. Each represents a 
            separate billing entity with independent user base.
          </p>
        </div>
      </div>

      {/* Projects */}
      <h2>Projects</h2>
      <p>
        A project is a <strong>logical grouping of endpoints</strong> within an organization. Typically represents:
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <FolderKanban className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Environment</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Production, Staging, Development, Testing
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Team</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              Backend, Frontend, Infrastructure, Data
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <GitBranch className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Application</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              E-commerce, CRM, Analytics, Payment System
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Customer</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
              For agencies managing multiple clients
            </p>
          </div>
        </div>
      </div>

      <h3>Environment Separation</h3>
      <p>Best practice example for organizing projects by environment:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Project</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Alert Policy</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Check Interval</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Notification</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Production</td>
              <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">Strict (1 failure)</td>
              <td className="py-3 px-4">10 seconds</td>
              <td className="py-3 px-4">Slack + Email + PagerDuty</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Staging</td>
              <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-medium">Moderate (3 failures)</td>
              <td className="py-3 px-4">30 seconds</td>
              <td className="py-3 px-4">Slack only</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Development</td>
              <td className="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium">Relaxed (5 failures)</td>
              <td className="py-3 px-4">60 seconds</td>
              <td className="py-3 px-4">Email summary only</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>📁 Organize by Environment:</strong> Create separate projects for Production, Staging, and Development 
            with appropriate alert policies for each.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>🎯 Clear Naming:</strong> Use descriptive project names like "production", "backend-staging", 
            "frontend-dev" instead of "proj1" or "test".
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>🔐 Limit Access:</strong> Grant project-level permissions to restrict who can modify endpoints 
            in sensitive environments like Production.
          </p>
        </div>
      </div>

    </div>
  )
}
