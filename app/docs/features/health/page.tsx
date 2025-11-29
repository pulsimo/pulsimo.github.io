import { Metadata } from 'next'
import { Heart, Activity, Zap, AlertTriangle, CheckCircle2, XCircle, Shield, Layers, TrendingUp, BarChart3, RefreshCw, Gauge, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dependency Health System - Pulsimo Documentation',
  description: 'Intelligent computed health status that considers all dependencies for true service health',
}

export default function DependencyHealthPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Dependency Health System</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The <strong>Dependency Health System</strong> is Pulsimo's intelligent engine that goes beyond simple "up/down" monitoring. 
          It understands that modern applications are <strong>networks of services</strong> and calculates <strong>true health</strong> by 
          analyzing how all dependencies work together.
        </p>
      </div>

      {/* Hero Section */}
      <div className="not-prose my-8 p-6 rounded-xl bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border border-cyan-200 dark:border-cyan-800">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What is Dependency-Aware Health?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Traditional Monitoring</h4>
            <p className="text-sm text-red-800 dark:text-red-200 m-0">"Does this service respond to health checks?"</p>
          </div>
          
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Pulsimo's Approach</h4>
            <p className="text-sm text-green-800 dark:text-green-200 m-0">"Can this service actually serve users given its current dependency status?"</p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <h2>The Problem with Traditional Monitoring</h2>
      <div className="not-prose my-6 p-5 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Example Scenario:</h4>
        <div className="p-4 rounded bg-white/50 dark:bg-slate-800/50 mb-3">
          <div className="font-semibold text-slate-900 dark:text-white mb-2">Your E-Commerce Backend:</div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✅</span>
              <span className="text-slate-700 dark:text-slate-300">Health check: PASSING (200 OK)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400">❌</span>
              <span className="text-slate-700 dark:text-slate-300">Database: DOWN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400">❌</span>
              <span className="text-slate-700 dark:text-slate-300">Redis Cache: DOWN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400">❌</span>
              <span className="text-slate-700 dark:text-slate-300">Payment Gateway: DOWN</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded bg-red-100 dark:bg-red-900/30">
            <div className="font-semibold text-red-900 dark:text-red-100 text-sm mb-1">Traditional Monitoring:</div>
            <div className="text-xs text-red-800 dark:text-red-200">"Backend is UP" 🟢</div>
          </div>
          <div className="p-3 rounded bg-orange-100 dark:bg-orange-900/30">
            <div className="font-semibold text-orange-900 dark:text-orange-100 text-sm mb-1">Reality:</div>
            <div className="text-xs text-orange-800 dark:text-orange-200">Backend can't process orders 🔴</div>
          </div>
        </div>
      </div>

      <div className="not-prose my-6 p-5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Pulsimo's Answer:</h4>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Direct Status:</div>
            <div className="font-semibold text-green-900 dark:text-green-100">UP</div>
          </div>
          <div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Computed Status:</div>
            <div className="font-semibold text-orange-900 dark:text-orange-100">PARTIAL OUTAGE</div>
          </div>
          <div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Operating Mode:</div>
            <div className="font-semibold text-red-900 dark:text-red-100">CRITICAL</div>
          </div>
          <div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Health:</div>
            <div className="font-semibold text-orange-900 dark:text-orange-100">40%</div>
          </div>
        </div>
        <div className="mt-3 p-3 rounded bg-green-100 dark:bg-green-900/30">
          <div className="text-xs text-green-900 dark:text-green-100">
            <strong>Reason:</strong> "Primary database down, using read replica with reduced functionality"
          </div>
        </div>
      </div>

      {/* Health Computation Algorithm */}
      <h2>Health Computation Algorithm</h2>
      <div className="not-prose my-6 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <div className="font-mono text-sm text-center text-slate-900 dark:text-white mb-4">
          <div className="inline-block p-4 rounded-lg bg-white dark:bg-slate-700">
            <div>Computed Health =</div>
            <div className="font-bold text-lg">Direct Health × Dependency Factor × Fallback Factor</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-3">
          <div className="p-3 rounded bg-white dark:bg-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Direct Health</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Service's own health (0-100%)</div>
          </div>
          <div className="p-3 rounded bg-white dark:bg-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Dependency Factor</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Weighted average of dependency health</div>
          </div>
          <div className="p-3 rounded bg-white dark:bg-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Fallback Factor</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Penalty for using fallbacks (0.8 if active)</div>
          </div>
        </div>
      </div>

      {/* Example Calculation */}
      <h3>Example Calculation</h3>
      <div className="not-prose my-6 space-y-4">
        <div className="p-5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Scenario 1: All Healthy ✅</h4>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div>Direct Health: <span className="font-semibold">100%</span></div>
            <div>Primary DB: <span className="font-semibold">100%</span> (up)</div>
            <div>Redis Cache: <span className="font-semibold">100%</span> (up)</div>
            <div>Elasticsearch: <span className="font-semibold">100%</span> (up)</div>
          </div>
          <div className="mt-3 p-3 rounded bg-green-100 dark:bg-green-900/30 font-mono text-xs text-green-900 dark:text-green-100">
            Computed Health = 100% × 100% × 1.0 = <strong className="text-lg">100%</strong>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-1 rounded text-xs font-semibold bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100">Status: UP</span>
            <span className="px-2 py-1 rounded text-xs font-semibold bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100">Mode: OPTIMAL ⚡</span>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Scenario 2: Database Down, Fallback Active 🔄</h4>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div>Direct Health: <span className="font-semibold">100%</span></div>
            <div>Primary DB: <span className="font-semibold text-red-600">0%</span> (down) → Fallback: <span className="font-semibold text-green-600">100%</span> (up)</div>
            <div>Redis Cache: <span className="font-semibold">100%</span> (up)</div>
            <div>Elasticsearch: <span className="font-semibold">100%</span> (up)</div>
          </div>
          <div className="mt-3 p-3 rounded bg-orange-100 dark:bg-orange-900/30 font-mono text-xs text-orange-900 dark:text-orange-100">
            Computed Health = 100% × 100% × 0.8 = <strong className="text-lg">80%</strong>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100">Status: PARTIAL OUTAGE</span>
            <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100">Mode: DEGRADED ⚠️</span>
          </div>
          <div className="mt-2 text-xs text-orange-800 dark:text-orange-200">
            Reason: "Using read replica (fallback), write operations disabled"
          </div>
        </div>

        <div className="p-5 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Scenario 3: Cache Down, No Fallback ⚠️</h4>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div>Direct Health: <span className="font-semibold">100%</span></div>
            <div>Primary DB: <span className="font-semibold">100%</span> (up)</div>
            <div>Redis Cache: <span className="font-semibold text-red-600">0%</span> (down, no fallback)</div>
            <div>Elasticsearch: <span className="font-semibold">100%</span> (up)</div>
          </div>
          <div className="mt-3 p-3 rounded bg-yellow-100 dark:bg-yellow-900/30 font-mono text-xs text-yellow-900 dark:text-yellow-100">
            Computed Health = 100% × 70% × 1.0 = <strong className="text-lg">70%</strong>
          </div>
          <div className="mt-2 flex gap-2">
            <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100">Status: DEGRADED</span>
            <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100">Mode: DEGRADED ⚠️</span>
          </div>
          <div className="mt-2 text-xs text-yellow-800 dark:text-yellow-200">
            Reason: "Cache unavailable, increased database load"
          </div>
        </div>
      </div>

      {/* Dependency Roles */}
      <h2>Dependency Roles</h2>
      <p>Each dependency has a <strong>role</strong> that determines how it's treated:</p>

      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🎯</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">Primary</h4>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Main data source or critical service</div>
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <div>• Weight: 0.4-0.6</div>
            <div>• Failure Impact: Severe</div>
            <div>• Examples: Primary DB, Auth service</div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">💾</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">Cache</h4>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Performance optimization layer</div>
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <div>• Weight: 0.2-0.4</div>
            <div>• Failure Impact: Performance degradation</div>
            <div>• Examples: Redis, Memcached</div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🔍</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">Search</h4>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Search and discovery features</div>
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <div>• Weight: 0.2-0.3</div>
            <div>• Failure Impact: Feature loss</div>
            <div>• Examples: Elasticsearch, Solr</div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🔄</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">Fallback</h4>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Backup when primary fails</div>
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <div>• Weight: Same as primary</div>
            <div>• Auto-Activation: Yes</div>
            <div>• Examples: Read replica, backup cache</div>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📎</span>
            <h4 className="font-bold text-slate-900 dark:text-white text-base m-0">Optional</h4>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">Enhancement features</div>
          <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <div>• Weight: 0.1-0.2</div>
            <div>• Failure Impact: Minimal</div>
            <div>• Examples: Analytics, recommendations</div>
          </div>
        </div>
      </div>

      {/* Operating Modes */}
      <h2>Operating Modes</h2>
      <p>The <strong>Operating Mode</strong> is a high-level indicator of service health:</p>

      <div className="not-prose grid md:grid-cols-2 gap-5 my-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚡</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">OPTIMAL</h3>
              <div className="text-sm text-green-700 dark:text-green-300">95-100% Health</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>Service responding normally</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>All dependencies healthy</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>Full functionality available</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>Performance within normal range</span></div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-300 dark:border-yellow-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">DEGRADED</h3>
              <div className="text-sm text-yellow-700 dark:text-yellow-300">60-94% Health</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600" /><span>Service responding but slower</span></div>
            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600" /><span>Some dependencies unhealthy</span></div>
            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600" /><span>Reduced functionality</span></div>
            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-600" /><span>Performance below normal</span></div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-300 dark:border-orange-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔥</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">CRITICAL</h3>
              <div className="text-sm text-orange-700 dark:text-orange-300">40-59% Health</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-orange-600" /><span>Critical dependencies failed</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-orange-600" /><span>Running on fallback systems</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-orange-600" /><span>Limited functionality</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-orange-600" /><span>High failure risk</span></div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 border-2 border-red-300 dark:border-red-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💀</span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">DOWN</h3>
              <div className="text-sm text-red-700 dark:text-red-300">0-39% Health</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /><span>Service not responding</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /><span>Critical dependencies unavailable</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /><span>No fallbacks available</span></div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /><span>Complete failure</span></div>
          </div>
        </div>
      </div>

      {/* Fallback System */}
      <h2>Fallback System</h2>
      <p>Pulsimo automatically detects and activates fallback dependencies when primary systems fail:</p>

      <div className="not-prose my-6 p-5 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Fallback Activation Process</h4>
        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
          <div>11:42 AM - Primary Database health check fails</div>
          <div>11:42 AM - Retry 1/3</div>
          <div>11:43 AM - Retry 2/3</div>
          <div>11:44 AM - Retry 3/3 - FAILED</div>
          <div className="text-cyan-600 dark:text-cyan-400">11:44 AM - Checking fallback: Read Replica</div>
          <div className="text-cyan-600 dark:text-cyan-400">11:44 AM - Read Replica: HEALTHY</div>
          <div className="text-green-600 dark:text-green-400 font-bold">11:44 AM - ✓ Fallback activated</div>
          <div>11:44 AM - Computed Status: PARTIAL OUTAGE</div>
          <div>11:44 AM - Operating Mode: CRITICAL</div>
          <div>11:44 AM - Health: 60% (80% with fallback penalty)</div>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose grid md:grid-cols-2 gap-5 my-6">
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Dependency Configuration</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 m-0">
            <li>• Set criticality accurately - don't mark everything critical</li>
            <li>• Configure fallbacks for critical dependencies</li>
            <li>• Test fallback switches before you need them</li>
            <li>• Review weights based on real impact</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Monitoring</h3>
          <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200 m-0">
            <li>• Watch for frequent fallback activation</li>
            <li>• Track operating mode changes</li>
            <li>• Monitor performance scores</li>
            <li>• Review dependency health trends</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">Incident Response</h3>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-200 m-0">
            <li>• Check computed status first - more accurate than direct</li>
            <li>• Review dependency health for root cause</li>
            <li>• Verify fallback activation</li>
            <li>• Plan based on operating mode urgency</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Performance Optimization</h3>
          <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200 m-0">
            <li>• Use performance scores to identify slow dependencies</li>
            <li>• Optimize frequently failing dependencies</li>
            <li>• Monitor cache hit rates</li>
            <li>• Plan capacity based on health trends</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-3 my-6">
        {[
          {
            q: 'Why is my service yellow when health checks pass?',
            a: 'Your service itself is healthy (Direct Status: UP), but one or more dependencies are failing, resulting in a lower Computed Status.',
          },
          {
            q: 'What does "fallback active" mean?',
            a: 'Your primary dependency failed, but Pulsimo detected a backup system and switched to it automatically. Service continues but may be degraded.',
          },
          {
            q: 'How is computed health calculated?',
            a: 'It combines your service\'s direct health with weighted health of all dependencies, applying penalties if fallbacks are active.',
          },
          {
            q: 'Can I customize dependency weights?',
            a: 'Yes! When configuring dependencies, you can set criticality levels (Critical, High, Medium, Low) which determine their weight in health calculations.',
          },
        ].map((faq, index) => (
          <div key={index} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Q: {faq.q}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400"><strong>A:</strong> {faq.a}</div>
          </div>
        ))}
      </div>

      {/* Related Documentation */}
      <h2>Related Documentation</h2>
      <div className="not-prose grid md:grid-cols-3 gap-3 my-6">
        <a href="/docs/features/dependencies" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Auto-Discovery System</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">How dependencies are automatically detected</p>
        </a>
        <a href="/docs/features/dashboard" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Services Section Guide</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Managing service health and dependencies</p>
        </a>
        <a href="/docs/features/incidents" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Incident Management</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">How dependencies trigger incidents</p>
        </a>
      </div>
    </div>
  )
}
