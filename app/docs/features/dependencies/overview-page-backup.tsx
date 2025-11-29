import { Metadata } from 'next'
import { GitBranch, Network, AlertTriangle, Eye, Layers, Zap, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Dependencies - Pulsimo Documentation',
  description: 'Visualize and analyze service dependencies with automatic discovery and interactive graphs',
}

export default function DependenciesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Service Dependencies</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The Dependencies feature provides powerful visualization and analysis of service relationships across 
          your infrastructure. Understand blast radius, identify single points of failure, and predict cascade 
          failures before they impact your users.
        </p>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        Modern applications rarely exist in isolation. They depend on databases, APIs, message queues, and other 
        services to function. Understanding these relationships is critical for incident response, architecture 
        planning, and reliability engineering. Pulsimo's dependency mapping transforms implicit relationships 
        into explicit, visual, actionable knowledge.
      </p>

      {/* Key Benefits */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-3">
            <Network className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Visual Mapping</h3>
          </div>
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            Interactive graph showing all service relationships with real-time status updates
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Impact Analysis</h3>
          </div>
          <p className="text-sm text-red-900 dark:text-red-100 m-0">
            Understand blast radius when services fail and predict cascade failures
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Critical Path</h3>
          </div>
          <p className="text-sm text-yellow-900 dark:text-yellow-100 m-0">
            Identify services on the critical path to user functionality
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">SPOF Detection</h3>
          </div>
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            Find single points of failure automatically and mitigate risks
          </p>
        </div>
      </div>

      {/* Creating Dependencies */}
      <h2>Creating Dependencies</h2>
      <p>Map relationships between your services in a few simple steps:</p>

      <div className="not-prose my-6">
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">1</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium m-0">Click "Dependencies" in the sidebar</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">2</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium m-0">Click "Add Dependency" button</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">3</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Select Source Service (the service that depends on...)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Example: "Web Frontend"</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">4</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Select Target Service (the service it depends on)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Example: "API Gateway"</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">5</span>
            <div className="flex-1">
              <p className="text-slate-800 dark:text-slate-200 font-medium m-0">Choose Dependency Type and save</p>
            </div>
          </li>
        </ol>
      </div>

      {/* Dependency Types */}
      <h2>Dependency Types</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">STRONG</h3>
          <p className="text-sm text-red-800 dark:text-red-200 m-0">
            Source <strong>cannot function</strong> without target. If target goes down, source is immediately impacted.
          </p>
          <div className="mt-3 p-3 rounded bg-red-100 dark:bg-red-900/30">
            <p className="text-xs text-red-900 dark:text-red-100 m-0">
              <strong>Example:</strong> Web Frontend → API Gateway (frontend is useless without API)
            </p>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-500">
          <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">WEAK</h3>
          <p className="text-sm text-yellow-800 dark:text-yellow-200 m-0">
            Source is <strong>degraded but functional</strong> without target. Some features may be unavailable.
          </p>
          <div className="mt-3 p-3 rounded bg-yellow-100 dark:bg-yellow-900/30">
            <p className="text-xs text-yellow-900 dark:text-yellow-100 m-0">
              <strong>Example:</strong> Web App → Analytics Service (app works but no analytics)
            </p>
          </div>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">MONITORING</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200 m-0">
            Just tracking the relationship for <strong>documentation purposes</strong>. No functional dependency.
          </p>
          <div className="mt-3 p-3 rounded bg-blue-100 dark:bg-blue-900/30">
            <p className="text-xs text-blue-900 dark:text-blue-100 m-0">
              <strong>Example:</strong> Service A → Service B (same team, related but independent)
            </p>
          </div>
        </div>
      </div>

      {/* Dependency Graph Features */}
      <h2>Dependency Graph Features</h2>
      <p>The interactive dependency graph provides powerful visualization capabilities:</p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Nodes</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Circles represent your services, sized by importance
          </p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-shrink-0">→</div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Edges</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Arrows show dependencies between services
          </p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm m-0">Real-Time</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
            Service status updates instantly on the graph
          </p>
        </div>
      </div>

      {/* Status Indicators */}
      <h2>Status Indicators on Graph</h2>
      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        <div className="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <h4 className="font-bold text-green-900 dark:text-green-100 text-sm m-0">Green</h4>
          </div>
          <p className="text-xs text-green-800 dark:text-green-200 m-0">Service UP</p>
        </div>

        <div className="p-4 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <h4 className="font-bold text-red-900 dark:text-red-100 text-sm m-0">Red</h4>
          </div>
          <p className="text-xs text-red-800 dark:text-red-200 m-0">Service DOWN</p>
        </div>

        <div className="p-4 rounded-lg border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 text-sm m-0">Yellow</h4>
          </div>
          <p className="text-xs text-yellow-800 dark:text-yellow-200 m-0">Critical path</p>
        </div>

        <div className="p-4 rounded-lg border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <h4 className="font-bold text-orange-900 dark:text-orange-100 text-sm m-0">Orange</h4>
          </div>
          <p className="text-xs text-orange-800 dark:text-orange-200 m-0">Single point of failure</p>
        </div>
      </div>

      {/* Use Cases */}
      <h2>Common Use Cases</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>🔍 Incident Response:</strong> When a service goes down, instantly see which other services 
            are impacted to prioritize recovery efforts.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>📋 Maintenance Planning:</strong> Identify all dependent services before taking a service 
            offline for maintenance.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-900 dark:text-green-100 m-0">
            <strong>🏗️ Architecture Documentation:</strong> Maintain a living diagram of your infrastructure 
            that updates automatically with service health.
          </p>
        </div>
      </div>

    </div>
  )
}
