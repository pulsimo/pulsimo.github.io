import { Metadata } from 'next'
import { Settings, Lock, Database, Mail, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Environment Variables - Pulsimo Documentation',
  description: 'Complete guide to configuring Pulsimo with environment variables',
}

export default function EnvironmentPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Environment Variables</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Complete guide to all environment variables used in Pulsimo. Configure databases, authentication, 
          monitoring, and notification services.
        </p>
      </div>

      {/* Quick Start */}
      <h2>🚀 Quick Start</h2>
      <div className="not-prose p-6 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500 my-6">
        <p className="text-slate-700 dark:text-slate-300 mb-4 font-semibold">
          Minimum configuration to deploy Pulsimo:
        </p>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded overflow-x-auto">
{`# 1. Copy template
cp .env.example .env

# 2. Edit .env - Set these 3 variables:
HOST_IP=192.168.1.100                        # Your server IP
POSTGRES_PASSWORD=$(openssl rand -base64 24) # Generate secure password
JWT_SECRET=$(openssl rand -base64 32)        # Generate secure secret

# 3. Deploy
./setup-prod.sh`}
        </pre>
        <p className="text-slate-700 dark:text-slate-300 mt-4 m-0">
          <strong>That's it!</strong> All other variables have sensible defaults.
        </p>
      </div>

      {/* Essential Variables */}
      <h2>Essential Variables</h2>
      <p>These <strong>must be configured</strong> for production deployment:</p>

      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Default</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">HOST_IP</td>
              <td className="py-3 px-4 font-mono text-xs">localhost</td>
              <td className="py-3 px-4">Server IP or domain name</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">POSTGRES_PASSWORD</td>
              <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">⚠️ Must change!</td>
              <td className="py-3 px-4">Database password</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">JWT_SECRET</td>
              <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">⚠️ Must change!</td>
              <td className="py-3 px-4">Authentication secret (32+ chars)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Database Configuration */}
      <h2>Database Configuration</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">PostgreSQL Settings</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">POSTGRES_DB</code>
              <span className="text-xs text-slate-600 dark:text-slate-400 ml-4">monitoring_system</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">POSTGRES_USER</code>
              <span className="text-xs text-slate-600 dark:text-slate-400 ml-4">monitoring</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">POSTGRES_PORT</code>
              <span className="text-xs text-slate-600 dark:text-slate-400 ml-4">5432</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">POSTGRES_PASSWORD</code>
              <span className="text-xs text-red-600 dark:text-red-400 ml-4">Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Redis Configuration */}
      <h2>Redis Configuration</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">REDIS_URL</td>
              <td className="py-3 px-4 font-mono text-xs">redis://redis:6379</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">REDIS_PORT</td>
              <td className="py-3 px-4 font-mono text-xs">6379</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SMTP Configuration */}
      <h2>SMTP Configuration</h2>
      <p>
        For email notifications. See detailed <Link href="/docs/config/smtp" className="text-cyan-600 dark:text-cyan-400 hover:underline">SMTP Configuration Guide</Link>.
      </p>

      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-3">Email Settings</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">SMTP_HOST</code>
              <span className="text-xs text-slate-600 dark:text-slate-400 ml-4">smtp.gmail.com</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">SMTP_PORT</code>
              <span className="text-xs text-slate-600 dark:text-slate-400 ml-4">587</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">SMTP_USERNAME</code>
              <span className="text-xs text-red-600 dark:text-red-400 ml-4">Required for email</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">SMTP_PASSWORD</code>
              <span className="text-xs text-red-600 dark:text-red-400 ml-4">Required for email</span>
            </div>
            <div className="flex justify-between items-start">
              <code className="text-xs text-slate-900 dark:text-white font-medium">FROM_EMAIL</code>
              <span className="text-xs text-red-600 dark:text-red-400 ml-4">Required for email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Configuration */}
      <h2>Monitoring Configuration</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Default</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">CHECK_INTERVAL_SECONDS</td>
              <td className="py-3 px-4 font-mono text-xs">30</td>
              <td className="py-3 px-4">How often to check endpoints</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">MAX_CONCURRENT_CHECKS</td>
              <td className="py-3 px-4 font-mono text-xs">100</td>
              <td className="py-3 px-4">Parallel check limit</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">CHECK_TIMEOUT_SECONDS</td>
              <td className="py-3 px-4 font-mono text-xs">30</td>
              <td className="py-3 px-4">Request timeout</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Security Best Practices */}
      <h2>Security Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-900 dark:text-red-100 font-semibold mb-1">Generate Strong Passwords</p>
              <code className="text-xs text-red-800 dark:text-red-200">openssl rand -base64 32</code>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-orange-900 dark:text-orange-100 m-0">
                <strong>Never commit .env files:</strong> Add .env to .gitignore. Use secrets management in production.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>🔄 Rotate Secrets:</strong> Change JWT_SECRET and database passwords periodically.
          </p>
        </div>
      </div>

    </div>
  )
}
