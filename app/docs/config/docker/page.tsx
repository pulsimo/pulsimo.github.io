import { Metadata } from 'next'
import { Container, Play, Square, RotateCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Docker Setup - Pulsimo Documentation',
  description: 'Docker and Docker Compose configuration for Pulsimo',
}

export default function DockerPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Docker Setup</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Pulsimo is designed to run with Docker and Docker Compose for easy deployment and management.
        </p>
      </div>

      {/* Prerequisites */}
      <h2>Prerequisites</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Docker</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Version 24.0+ required
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Docker Compose</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Version 2.20+ required
          </p>
        </div>
      </div>

      {/* Quick Start */}
      <h2>Quick Start</h2>
      <div className="not-prose my-6">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded overflow-x-auto">
{`# Clone repository
git clone https://github.com/Cloud-Council/pulsimo.git
cd pulsimo

# Configure environment
cp .env.example .env
nano .env  # Edit configuration

# Start all services
docker compose up -d --remove-orphans

# Check status
docker compose ps`}
        </pre>
      </div>

      {/* Service Management */}
      <h2>Service Management</h2>
      
      <h3>Start Services</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-cyan-400 p-4 rounded overflow-x-auto">
{`# Start all services in background
docker compose up -d

# Start specific service
docker compose up -d api-gateway

# View logs while starting
docker compose up`}
        </pre>
      </div>

      <h3>Stop Services</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-orange-400 p-4 rounded overflow-x-auto">
{`# Stop all services
docker compose down

# Stop and remove volumes (⚠️ deletes data)
docker compose down -v

# Stop specific service
docker compose stop api-gateway`}
        </pre>
      </div>

      <h3>View Logs</h3>
      <div className="not-prose my-4">
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto">
{`# All services
docker compose logs -f

# Specific service
docker compose logs -f checker

# Last 100 lines
docker compose logs --tail=100 api-gateway`}
        </pre>
      </div>

      {/* Common Commands */}
      <h2>Common Commands</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Play className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Restart Services</h4>
          </div>
          <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-green-400 p-3 rounded overflow-x-auto m-0">
{`docker compose restart`}
          </pre>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Container className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Check Status</h4>
          </div>
          <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-cyan-400 p-3 rounded overflow-x-auto m-0">
{`docker compose ps`}
          </pre>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <RotateCw className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Rebuild Images</h4>
          </div>
          <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-purple-400 p-3 rounded overflow-x-auto m-0">
{`docker compose up -d --build`}
          </pre>
        </div>

        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Square className="w-5 h-5 text-red-600 dark:text-red-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Clean Everything</h4>
          </div>
          <pre className="text-xs bg-slate-900 dark:bg-slate-950 text-red-400 p-3 rounded overflow-x-auto m-0">
{`docker compose down -v
docker system prune -a`}
          </pre>
        </div>
      </div>

      {/* Troubleshooting */}
      <h2>Troubleshooting</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-900 dark:text-yellow-100 mb-2 font-semibold">Port Already in Use</p>
          <pre className="text-xs bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-100 p-2 rounded m-0">
{`# Check what's using the port
sudo lsof -i :3000

# Change port in .env
EXPOSE_FRONTEND_PORT=3001`}
          </pre>
        </div>

        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-900 dark:text-red-100 mb-2 font-semibold">Service Won't Start</p>
          <pre className="text-xs bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-100 p-2 rounded m-0">
{`# Check logs for errors
docker compose logs service-name

# Try recreating
docker compose up -d --force-recreate service-name`}
          </pre>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 mb-2 font-semibold">Database Connection Failed</p>
          <pre className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100 p-2 rounded m-0">
{`# Wait for PostgreSQL to be ready
docker compose logs postgres

# Restart dependent services
docker compose restart api-gateway checker`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>🔄 Always Use --remove-orphans:</strong> Prevents accumulation of old containers from previous configurations.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>💾 Regular Backups:</strong> Backup volumes before major updates or migrations.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <p className="text-sm text-cyan-900 dark:text-cyan-100 m-0">
            <strong>📊 Monitor Resources:</strong> Use <code>docker stats</code> to monitor CPU and memory usage.
          </p>
        </div>
      </div>

    </div>
  )
}
