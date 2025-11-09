import { Metadata } from 'next'
import { UserPlus, LogIn, KeyRound, Mail, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'User Management - Pulsimo Documentation',
  description: 'User lifecycle, authentication, and account management',
}

export default function UserManagementPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>User Management</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Comprehensive user management with JWT-based authentication, RBAC authorization, and complete 
          user lifecycle management.
        </p>
      </div>

      {/* User Lifecycle */}
      <h2>User Lifecycle</h2>

      <h3>1. Registration (First User)</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 my-6">
        <div className="flex items-center gap-3 mb-3">
          <UserPlus className="w-6 h-6 text-green-600 dark:text-green-400" />
          <h4 className="font-bold text-slate-900 dark:text-white m-0">Creating an Organization</h4>
        </div>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded overflow-x-auto mb-3">
{`POST /api/v1/auth/register
{
  "email": "admin@example.com",
  "password": "SecurePassword123!",
  "organization_name": "Acme Corp"
}`}
        </pre>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2">Creates:</p>
        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
          <li>✅ New organization</li>
          <li>✅ User account (Owner role)</li>
          <li>✅ Default project</li>
          <li>✅ JWT token</li>
        </ul>
      </div>

      <h3>2. Invitation (Additional Users)</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 my-6">
        <div className="flex items-center gap-3 mb-3">
          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h4 className="font-bold text-slate-900 dark:text-white m-0">Invite Users to Organization</h4>
        </div>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-blue-400 p-4 rounded overflow-x-auto mb-3">
{`POST /api/v1/users/invite
Authorization: Bearer <token>
{
  "email": "engineer@example.com",
  "role": "member",
  "projects": ["project-uuid"]
}`}
        </pre>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2">Process:</p>
        <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
          <li>1. Email sent to user</li>
          <li>2. User clicks invitation link</li>
          <li>3. User sets password</li>
          <li>4. User gains access</li>
        </ol>
      </div>

      <h3>3. Login</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 my-6">
        <div className="flex items-center gap-3 mb-3">
          <LogIn className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h4 className="font-bold text-slate-900 dark:text-white m-0">User Authentication</h4>
        </div>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto mb-3">
{`POST /api/v1/auth/login
{
  "email": "user@example.com",
  "password": "password"
}`}
        </pre>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2">Response:</p>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto m-0">
{`{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "member",
    "organization_id": "org-uuid"
  },
  "expires_at": "2025-11-10T12:00:00Z"
}`}
        </pre>
      </div>

      <h3>4. Password Reset</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500 my-6">
        <div className="flex items-center gap-3 mb-3">
          <KeyRound className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          <h4 className="font-bold text-slate-900 dark:text-white m-0">Forgot Password</h4>
        </div>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-orange-400 p-4 rounded overflow-x-auto mb-3">
{`POST /api/v1/auth/forgot-password
{
  "email": "user@example.com"
}`}
        </pre>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2">Process:</p>
        <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
          <li>1. Reset email sent</li>
          <li>2. User clicks reset link (valid 1 hour)</li>
          <li>3. User enters new password</li>
          <li>4. Password updated, old sessions invalidated</li>
        </ol>
      </div>

      {/* Authentication */}
      <h2>Authentication</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">JWT Tokens</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Stateless authentication with JWT tokens. Tokens expire after 7 days by default.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <KeyRound className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Password Security</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Bcrypt hashing with salt rounds. Minimum 8 characters, recommended 12+.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Mail className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email Verification</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Optional email verification for new accounts (configurable).
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Session Management</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Multiple active sessions supported. Revoke all sessions on password change.
          </p>
        </div>
      </div>

      {/* User Operations */}
      <h2>User Operations</h2>

      <h3>List Users</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto">
{`GET /api/v1/users
Authorization: Bearer <token>

# Requires: Admin or Owner role`}
        </pre>
      </div>

      <h3>Update User Role</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto">
{`PATCH /api/v1/users/:user_id/role
Authorization: Bearer <token>
{
  "role": "admin"
}

# Requires: Admin or Owner role`}
        </pre>
      </div>

      <h3>Remove User</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-red-400 p-4 rounded overflow-x-auto">
{`DELETE /api/v1/users/:user_id
Authorization: Bearer <token>

# Requires: Admin or Owner role
# Cannot remove yourself
# Cannot remove last Owner`}
        </pre>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>🔒 Strong Passwords:</strong> Require minimum 12 characters with mix of uppercase, lowercase, 
            numbers, and symbols.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>👥 Offboarding Process:</strong> Remove users immediately when they leave the organization. 
            Review and reassign their projects first.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>📧 Verify Email Addresses:</strong> Always verify email addresses before granting access 
            to prevent unauthorized access.
          </p>
        </div>
      </div>

    </div>
  )
}
