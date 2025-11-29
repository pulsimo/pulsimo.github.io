import { Metadata } from 'next'
import { Activity, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Plus, Server, TrendingUp, Network, Shield, Gauge, Zap, Radio, BarChart3, Globe, Clock, Edit, Bell, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services Section - Pulsimo Documentation',
  description: 'Complete guide to Pulsimo Services Section - monitoring, analytics, and service management',
}

export default function ServicesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Services Section - Complete User Guide</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The <strong>Services</strong> section in Pulsimo is your central hub for monitoring, analyzing, and managing all 
          your service endpoints across your infrastructure. This comprehensive section provides deep insights into service 
          health, performance, and reliability.
        </p>
      </div>

      {/* What is Services Section */}
      <h2>What is the Services Section?</h2>
      <p>
        The Services section is a <strong>multi-faceted monitoring dashboard</strong> that combines real-time health 
        monitoring with advanced analytics. It helps you:
      </p>
      <ul>
        <li><strong>Monitor</strong> all your service endpoints in real-time</li>
        <li><strong>Analyze</strong> response times, performance patterns, and trends</li>
        <li><strong>Identify</strong> bottlenecks and performance issues</li>
        <li><strong>Manage</strong> SSL certificates and network connectivity</li>
        <li><strong>Track</strong> service dependencies and relationships</li>
      </ul>

      {/* Services Section Structure */}
      <h2>Services Section Structure</h2>
      <p>
        The Services section is organized into <strong>six specialized subsections</strong>, each focusing on 
        different aspects of service monitoring:
      </p>

      {/* Subsections Grid */}
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        {[
          { icon: Activity, title: '1. Overview', desc: 'Command center for all services at a glance', color: 'cyan' },
          { icon: Server, title: '2. Endpoints', desc: 'Comprehensive list with advanced filtering', color: 'blue' },
          { icon: TrendingUp, title: '3. Response Analytics', desc: 'Deep dive into response time patterns', color: 'green' },
          { icon: Gauge, title: '4. Performance Insights', desc: 'Advanced analytics combining multiple dimensions', color: 'purple' },
          { icon: Network, title: '5. Network Analysis', desc: 'Network-level monitoring and connectivity', color: 'orange' },
          { icon: Shield, title: '6. SSL Certificates', desc: 'Certificate management and expiration tracking', color: 'red' },
        ].map((section) => (
          <div key={section.title} className={`flex gap-3 p-4 rounded-lg bg-${section.color}-50 dark:bg-${section.color}-900/20 border border-${section.color}-200 dark:border-${section.color}-800`}>
            <section.icon className={`w-6 h-6 text-${section.color}-600 dark:text-${section.color}-400 flex-shrink-0 mt-1`} />
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1 m-0">{section.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">{section.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 1. Overview Section */}
      <h2>1. Overview</h2>
      <p><strong>Location:</strong> Dashboard → Services → Overview</p>
      <p>Your <strong>command center</strong> for all services at a glance.</p>

      <h3>What You See</h3>
      <div className="not-prose my-4">
        <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Service Cards with Color-Coded Health Status</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Green = Healthy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Yellow = Degraded</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Red = Down</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">Gray = Unknown</span>
            </div>
          </div>
        </div>
      </div>

      <h4>Key Metrics for Each Service</h4>
      <ul>
        <li>Current health status</li>
        <li>Response time (latest check)</li>
        <li>Uptime percentage</li>
        <li>Next check countdown timer</li>
        <li>Active alerts or silences</li>
      </ul>

      <h4>Quick Actions</h4>
      <ul>
        <li>View detailed analytics</li>
        <li>Edit service configuration</li>
        <li>Silence notifications</li>
        <li>Jump to performance insights</li>
        <li>Open service URL</li>
      </ul>

      {/* 2. Endpoints Section */}
      <h2>2. Endpoints</h2>
      <p><strong>Location:</strong> Dashboard → Services → Endpoints</p>
      <p><strong>Comprehensive list</strong> of all monitored service endpoints with advanced filtering and management.</p>

      <h3>Enhanced Dependency Health</h3>
      <div className="not-prose my-4 p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <h4 className="font-bold text-slate-900 dark:text-white m-0">Major New Feature</h4>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
          This section now shows <strong>computed health status</strong> that considers all dependencies, not just the service's own health check.
        </p>
      </div>

      <h4>Computed Health Status</h4>
      <ul>
        <li><strong>Direct Status:</strong> Your service's own health check result</li>
        <li><strong>Computed Status:</strong> Overall health including all dependencies</li>
      </ul>

      <h4>Operating Modes</h4>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-4">
        {[
          { mode: 'Optimal', icon: '⚡', desc: 'Everything running perfectly', color: 'green' },
          { mode: 'Degraded', icon: '⚠️', desc: 'Minor issues, full functionality', color: 'yellow' },
          { mode: 'Critical', icon: '🔥', desc: 'Severe issues, using fallbacks', color: 'orange' },
          { mode: 'Down', icon: '💀', desc: 'Service unavailable', color: 'red' },
        ].map((item) => (
          <div key={item.mode} className={`p-3 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{item.icon}</span>
              <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.mode}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <h4>Health Metrics</h4>
      <ul>
        <li><strong>Overall Health:</strong> Percentage based on all dependency checks</li>
        <li><strong>Performance Score:</strong> Speed and reliability metric</li>
        <li><strong>Active Fallbacks:</strong> Shows if backup systems are in use</li>
      </ul>

      <h4>Dependency Cards</h4>
      <p>For each dependency, you see:</p>
      <ul>
        <li><strong>Service Name</strong> and type (database, cache, API)</li>
        <li><strong>Health Percentage</strong> with visual progress bar</li>
        <li><strong>Dependency Role:</strong> Primary, Cache, Search, Fallback, Optional</li>
        <li><strong>Criticality Level:</strong> Critical, High, Medium, Low</li>
      </ul>

      <h4>Active Fallback Indication</h4>
      <p>When a primary dependency fails but a fallback is available:</p>
      <ul>
        <li>Glowing pulse animation on fallback card</li>
        <li>"Currently Active" badge</li>
        <li>Degradation reason explaining the switch</li>
        <li>Performance impact notification</li>
      </ul>

      {/* 3. Response Analytics */}
      <h2>3. Response Analytics</h2>
      <p><strong>Location:</strong> Dashboard → Services → Response Analytics</p>
      <p><strong>Deep dive</strong> into how fast your services respond over time.</p>

      <h3>Response Time Charts</h3>
      <ul>
        <li><strong>Time-series graphs</strong> showing response times</li>
        <li><strong>Multiple timeframes:</strong> Last hour, day, week, month</li>
      </ul>

      <div className="not-prose my-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Color-Coded Zones</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">Green = Fast (&lt; 200ms)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-3 bg-yellow-500 rounded"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">Yellow = Acceptable (200-1000ms)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-3 bg-red-500 rounded"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">Red = Slow (&gt; 1000ms)</span>
          </div>
        </div>
      </div>

      <h3>Statistical Breakdown</h3>
      <ul>
        <li><strong>Average Response Time:</strong> Mean across all checks</li>
        <li><strong>Median Response Time:</strong> Typical response time</li>
        <li><strong>95th Percentile:</strong> Worst-case scenarios</li>
        <li><strong>99th Percentile:</strong> Extreme edge cases</li>
        <li><strong>Min/Max Values:</strong> Performance range</li>
      </ul>

      {/* 4. Performance Insights */}
      <h2>4. Performance Insights</h2>
      <div className="not-prose mb-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="font-bold text-purple-900 dark:text-purple-100">New Feature</span>
        </div>
        <p className="text-sm text-purple-800 dark:text-purple-200 m-0">
          <strong>Advanced analytics</strong> combining multiple performance dimensions for comprehensive insights.
        </p>
      </div>

      <h3>Performance Score Dashboard</h3>
      <ul>
        <li><strong>Overall Performance Score</strong> (0-100)</li>
        <li>Combines response time, uptime, and stability</li>
        <li>Color-coded: Green (&gt;90), Yellow (60-90), Red (&lt;60)</li>
      </ul>

      <h3>Smart Recommendations</h3>
      <p>Pulsimo analyzes your data and suggests:</p>
      <div className="not-prose my-4 space-y-2">
        {[
          'Consider increasing timeout for Service X',
          'Cache hit rate low - check Redis configuration',
          'Frequent fallback activation - primary database may need scaling',
          'Response time spike during peak hours - consider load balancing',
        ].map((rec, index) => (
          <div key={index} className="flex gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <span className="text-blue-600 dark:text-blue-400">💡</span>
            <span className="text-sm text-slate-700 dark:text-slate-300">{rec}</span>
          </div>
        ))}
      </div>

      {/* 5. Network Analysis */}
      <h2>5. Network Analysis</h2>
      <p><strong>Location:</strong> Dashboard → Services → Network Analysis</p>
      <p><strong>Network-level monitoring</strong> showing connectivity and latency patterns.</p>

      <h3>Connection Statistics</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-4">
        {[
          { metric: 'DNS Resolution Time', icon: Globe },
          { metric: 'Connection Establishment', icon: Network },
          { metric: 'Time to First Byte (TTFB)', icon: Clock },
          { metric: 'Total Request Time', icon: Activity },
        ].map((item) => (
          <div key={item.metric} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <item.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">{item.metric}</span>
          </div>
        ))}
      </div>

      <h3>Network Health Indicators</h3>
      <div className="not-prose grid md:grid-cols-3 gap-3 my-4">
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="font-semibold text-green-900 dark:text-green-100 mb-1">Healthy</div>
          <div className="text-xs text-green-700 dark:text-green-300">Latency &lt; 50ms, 0% packet loss</div>
        </div>
        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Degraded</div>
          <div className="text-xs text-yellow-700 dark:text-yellow-300">Latency 50-200ms, &lt;1% packet loss</div>
        </div>
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <div className="font-semibold text-red-900 dark:text-red-100 mb-1">Poor</div>
          <div className="text-xs text-red-700 dark:text-red-300">Latency &gt;200ms, &gt;1% packet loss</div>
        </div>
      </div>

      {/* 6. SSL Certificates */}
      <h2>6. SSL Certificates</h2>
      <p><strong>Location:</strong> Dashboard → Services → SSL Certificates</p>
      <p><strong>Certificate management</strong> and expiration tracking for HTTPS services.</p>

      <h3>Expiration Status</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-4">
        {[
          { status: 'Valid', days: '> 30 days', color: 'green', icon: CheckCircle2 },
          { status: 'Expiring Soon', days: '7-30 days', color: 'yellow', icon: AlertTriangle },
          { status: 'Critical', days: '< 7 days', color: 'red', icon: AlertTriangle },
          { status: 'Expired', days: 'Already expired', color: 'gray', icon: XCircle },
        ].map((item) => (
          <div key={item.status} className={`flex gap-3 p-3 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800`}>
            <item.icon className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400`} />
            <div>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">{item.status}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{item.days} remaining</div>
            </div>
          </div>
        ))}
      </div>

      <h3>Automated Alerts</h3>
      <p>Pulsimo automatically alerts you:</p>
      <ul>
        <li><strong>30 days</strong> before expiration (first warning)</li>
        <li><strong>14 days</strong> before expiration (second warning)</li>
        <li><strong>7 days</strong> before expiration (urgent warning)</li>
        <li><strong>Daily</strong> when &lt;7 days remaining</li>
        <li><strong>Immediately</strong> if certificate becomes invalid</li>
      </ul>

      {/* Common Workflows */}
      <h2>Common Workflows</h2>

      <h3>Scenario 1: Daily Health Check</h3>
      <div className="not-prose my-4">
        <ol className="space-y-2">
          {[
            'Open Services → Overview',
            'Scan service cards for any yellow/red status',
            'Click affected services for details',
            'Review Enhanced Dependency Health section',
            'Check if fallbacks are active',
            'Investigate root cause if needed',
          ].map((step, index) => (
            <li key={index} className="flex gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <h3>Scenario 2: Performance Investigation</h3>
      <div className="not-prose my-4">
        <ol className="space-y-2">
          {[
            'Notice service slowdown in overview',
            'Go to Response Analytics',
            'Check response time chart for spikes',
            'Compare to historical baseline',
            'Go to Performance Insights',
            'Check dependency impact analysis',
            'Identify bottleneck (e.g., slow database)',
            'Take corrective action',
          ].map((step, index) => (
            <li key={index} className="flex gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Pro Tips */}
      <h2>Pro Tips</h2>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">For DevOps Teams</h4>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li>• Use Endpoints view for bulk operations</li>
            <li>• Set up auto-refresh dashboards on wall monitors</li>
            <li>• Export endpoint data for capacity planning</li>
            <li>• Monitor Performance Insights for infrastructure decisions</li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">For Site Reliability Engineers</h4>
          <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <li>• Focus on Operating Mode changes</li>
            <li>• Track fallback activation frequency</li>
            <li>• Use Network Analysis to optimize service placement</li>
            <li>• Monitor 95th percentile response times for SLAs</li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">For Security Teams</h4>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <li>• Regularly review SSL Certificates section</li>
            <li>• Track certificate security grades</li>
            <li>• Set up certificate expiration alerts</li>
            <li>• Ensure TLS 1.2+ is enforced</li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">For Development Teams</h4>
          <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
            <li>• Use Response Analytics to validate optimizations</li>
            <li>• Check dependency health after deploying features</li>
            <li>• Monitor cache performance</li>
            <li>• Review performance recommendations</li>
          </ul>
        </div>
      </div>

      {/* What's New */}
      <h2>What's New in This Release</h2>

      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Enhanced Dependency Health</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 m-0">
            <li>• Computed health status considers all dependencies</li>
            <li>• Operating modes show degradation level</li>
            <li>• Visual fallback indicators with pulse animations</li>
            <li>• Dependency cards with role and criticality</li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Services Section Reorganization</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 m-0">
            <li>• New subsection structure with 6 specialized views</li>
            <li>• Collapsible navigation in sidebar</li>
            <li>• Breadcrumb navigation for context</li>
            <li>• Consistent design across all subsections</li>
          </ul>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">SSL Certificate Tracking</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 m-0">
            <li>• New dedicated section for certificate management</li>
            <li>• Expiration countdown with visual indicators</li>
            <li>• Security grade scoring</li>
            <li>• Automated renewal detection</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2>Frequently Asked Questions</h2>

      <div className="not-prose space-y-4 my-6">
        {[
          {
            q: 'Why is my service yellow when health checks pass?',
            a: 'Your service itself is healthy, but one or more dependencies are failing. Check the Enhanced Dependency Health section for details.',
          },
          {
            q: 'What does "fallback active" mean?',
            a: 'Your primary dependency (like main database) failed, but Pulsimo detected a backup system (like cache or replica) and switched to it automatically.',
          },
          {
            q: 'How often are services checked?',
            a: 'Check intervals are configurable per service (default: 30 seconds). Real-time updates appear via WebSocket.',
          },
          {
            q: 'What\'s the difference between Direct and Computed status?',
            a: 'Direct status = Your service\'s own health check result. Computed status = Overall health including all dependency checks.',
          },
        ].map((faq, index) => (
          <div key={index} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Q: {faq.q}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong>A:</strong> {faq.a}</p>
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
        <a href="/docs/features/incidents" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Incident Management</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Incident tracking and root cause analysis</p>
        </a>
        <a href="/docs/features/performance" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Performance Analytics</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Detailed metrics and trends</p>
        </a>
      </div>
    </div>
  )
}
