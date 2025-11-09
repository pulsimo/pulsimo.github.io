import { Metadata } from 'next'
import { Shield, Crown, UserCog, User, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roles & Permissions - Pulsimo Documentation',
  description: 'Understanding RBAC, role hierarchy, and permission matrix',
}

export default function RolesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Roles & Permissions (RBAC)</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo uses Role-Based Access Control (RBAC) to manage user permissions at both organization 
          and project levels.
        </p>
      </div>

      {/* Key Concepts */}
      <h2>Key Concepts</h2>
      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Role</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Collection of permissions (Owner, Admin, Member, Viewer)
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <UserCog className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Permission</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Specific action a user can perform
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Eye className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Scope</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Where role applies (Organization or Project)
          </p>
        </div>
      </div>

      {/* Role Hierarchy */}
      <h2>Role Hierarchy</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Organization Level</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold">
              <Crown className="w-4 h-4" />
              <span>Owner (Full control)</span>
            </div>
            <div className="ml-6 text-slate-600 dark:text-slate-400">↓</div>
            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Admin (Manage organization)</span>
            </div>
            <div className="ml-6 text-slate-600 dark:text-slate-400">↓</div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
              <User className="w-4 h-4" />
              <span>Member (Create & manage resources)</span>
            </div>
            <div className="ml-6 text-slate-600 dark:text-slate-400">↓</div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold">
              <Eye className="w-4 h-4" />
              <span>Viewer (Read-only)</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Project Level</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Project Admin (Full project control)</span>
            </div>
            <div className="ml-6 text-slate-600 dark:text-slate-400">↓</div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold">
              <UserCog className="w-4 h-4" />
              <span>Project Editor (Modify resources)</span>
            </div>
            <div className="ml-6 text-slate-600 dark:text-slate-400">↓</div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold">
              <Eye className="w-4 h-4" />
              <span>Project Viewer (Read-only)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role Definitions */}
      <h2>Role Definitions</h2>

      <h3>Owner 👑</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 my-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
          <strong>Full administrative control</strong> over the organization.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">Permissions:</p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
            <li>✅ All organization permissions</li>
            <li>✅ All project permissions</li>
            <li>✅ Manage billing</li>
            <li>✅ Delete organization</li>
            <li>✅ Transfer ownership</li>
          </ul>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mt-3 mb-1">Typical Use:</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            CEO, CTO, Founder - Only 1-2 per organization
          </p>
        </div>
      </div>

      <h3>Admin 🛡️</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-l-4 border-orange-500 my-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
          <strong>Manage organization and users</strong> but cannot delete organization or manage billing.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">Permissions:</p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
            <li>✅ Invite/remove users</li>
            <li>✅ Manage roles</li>
            <li>✅ Create/delete projects</li>
            <li>✅ Manage all endpoints</li>
            <li>✅ Manage alert policies</li>
          </ul>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mt-3 mb-1">Typical Use:</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            DevOps Lead, Infrastructure Manager
          </p>
        </div>
      </div>

      <h3>Member 👤</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 my-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
          <strong>Create and manage own resources</strong> within assigned projects.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">Permissions:</p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
            <li>✅ Create projects</li>
            <li>✅ Add/edit/delete endpoints</li>
            <li>✅ Acknowledge incidents</li>
            <li>✅ View all organization data</li>
            <li>❌ Cannot manage users</li>
          </ul>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mt-3 mb-1">Typical Use:</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Engineers, Developers, SREs
          </p>
        </div>
      </div>

      <h3>Viewer 👁️</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-900 border-l-4 border-slate-500 my-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
          <strong>Read-only access</strong> to organization data.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">Permissions:</p>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
            <li>✅ View dashboards</li>
            <li>✅ View incidents</li>
            <li>✅ View performance metrics</li>
            <li>❌ Cannot create or modify anything</li>
          </ul>
          <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mt-3 mb-1">Typical Use:</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Stakeholders, Management, External Auditors
          </p>
        </div>
      </div>

      {/* Permission Matrix */}
      <h2>Permission Matrix</h2>
      <p>Complete permissions by role:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Permission</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Owner</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Admin</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Member</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Viewer</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">Manage organization</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">Invite/remove users</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">Create projects</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">Create/edit endpoints</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-red-600 dark:text-red-400">✗</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">View dashboards</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
              <td className="text-center py-3 px-4 text-green-600 dark:text-green-400">✓</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>🎯 Principle of Least Privilege:</strong> Grant users the minimum permissions needed for their role.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>👥 Limit Owners:</strong> Only 1-2 Owner accounts per organization to reduce security risk.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>🔄 Regular Reviews:</strong> Audit user permissions quarterly and remove access for inactive users.
          </p>
        </div>
      </div>

    </div>
  )
}
