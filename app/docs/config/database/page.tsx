import { Metadata } from 'next'
import { Database, HardDrive, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Database Configuration - Pulsimo Documentation',
  description: 'PostgreSQL configuration, migrations, and optimization',
}

export default function DatabasePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Database Configuration</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo uses PostgreSQL 17 as its primary database. This guide covers configuration, migrations, 
          performance optimization, and backup strategies.
        </p>
      </div>

      {/* Database Schema */}
      <h2>Database Schema</h2>
      <p>Core tables in the Pulsimo database:</p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <Database className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">organizations</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Top-level tenant isolation
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <Database className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">users</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            User accounts and authentication
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <Database className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">projects</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Logical grouping of endpoints
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">endpoints</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Services being monitored
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <Database className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">health_checks</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Check results and response times
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800">
          <Database className="w-6 h-6 text-red-600 dark:text-red-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">incidents</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Service outages and failures
          </p>
        </div>
      </div>

      {/* Migrations */}
      <h2>Database Migrations</h2>
      <p>Pulsimo uses numbered SQL migration files for schema changes:</p>

      <div className="not-prose my-6">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto">
{`backend/migrations/
├── 001_initial_schema.sql
├── 002_add_organizations.sql
├── 003_add_health_checks.sql
├── ...
└── 029_latest_feature.sql`}
        </pre>
      </div>

      <h3>Docker Initialization</h3>
      <div className="not-prose p-5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 my-4">
        <p className="text-sm text-blue-900 dark:text-blue-100 mb-3">
          <strong>First Start:</strong> All migrations execute automatically in order when database is created.
        </p>
        <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
          <strong>Subsequent Starts:</strong> Migrations are skipped if database exists. Apply new migrations manually.
        </p>
      </div>

      <h3>Manual Migration</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded overflow-x-auto">
{`# Apply new migration
docker exec -i monitoring-postgres psql \\
  -U monitoring -d monitoring_system \\
  < backend/migrations/029_new_feature.sql`}
        </pre>
      </div>

      {/* Performance Optimization */}
      <h2>Performance Optimization</h2>

      <h3>Indexing Strategy</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Table</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Index</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">endpoints</td>
              <td className="py-3 px-4 font-mono text-xs">project_id</td>
              <td className="py-3 px-4">Fast project filtering</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">health_checks</td>
              <td className="py-3 px-4 font-mono text-xs">endpoint_id, checked_at</td>
              <td className="py-3 px-4">Time-series queries</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">incidents</td>
              <td className="py-3 px-4 font-mono text-xs">status, created_at</td>
              <td className="py-3 px-4">Active incident lookup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Connection Pooling</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto">
{`# Recommended pool settings
DATABASE_POOL_SIZE=20
DATABASE_MAX_OVERFLOW=10
DATABASE_POOL_TIMEOUT=30`}
        </pre>
      </div>

      {/* Backup & Recovery */}
      <h2>Backup & Recovery</h2>

      <h3>Automated Backup</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto">
{`# Daily backup script
docker exec monitoring-postgres pg_dump \\
  -U monitoring monitoring_system \\
  | gzip > backup_\${DATE}.sql.gz

# Keep last 30 days
find /backups -name "backup_*.sql.gz" -mtime +30 -delete`}
        </pre>
      </div>

      <h3>Restore from Backup</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-orange-400 p-4 rounded overflow-x-auto">
{`# Stop services
docker compose down

# Restore database
gunzip -c backup_2025-11-09.sql.gz | \\
  docker exec -i monitoring-postgres psql \\
  -U monitoring -d monitoring_system

# Restart services
docker compose up -d`}
        </pre>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="flex gap-3">
            <HardDrive className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-green-900 dark:text-green-100 m-0">
                <strong>Regular Backups:</strong> Automate daily backups and test restoration quarterly to ensure recoverability.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex gap-3">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
                <strong>Monitor Performance:</strong> Track query times, connection pool usage, and slow queries. 
                Add indexes for frequently queried columns.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
                <strong>Secure Access:</strong> Use strong passwords, limit network access, and enable SSL/TLS 
                for production databases.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
