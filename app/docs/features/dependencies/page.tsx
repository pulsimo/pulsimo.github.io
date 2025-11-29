import { Metadata } from 'next'
import { Sparkles, Target, Database, Layers, Search, MessageSquare, CheckCircle2, XCircle, RefreshCw, TrendingUp, Zap, Shield, BarChart3, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dependency Auto-Discovery - Pulsimo Documentation',
  description: 'Intelligent automatic detection of service relationships with AI-powered pattern matching',
}

export default function AutoDiscoveryPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>Dependency Auto-Discovery System</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          The <strong>Auto-Discovery System</strong> is Pulsimo's intelligent feature that <strong>automatically detects</strong> relationships 
          between your services without manual configuration. It analyzes your infrastructure and suggests dependency connections based on 
          proven patterns and industry standards.
        </p>
      </div>

      {/* Hero Section */}
      <div className="not-prose my-8 p-6 rounded-xl bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border border-cyan-200 dark:border-cyan-800">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">What is Auto-Discovery?</h2>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          Auto-Discovery is like having an <strong>AI assistant</strong> that watches your infrastructure and says:
        </p>
        <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border-l-4 border-cyan-500">
          <p className="text-slate-800 dark:text-slate-200 italic m-0">
            "Hey! I noticed your Backend service talks to that Redis instance on port 6379. Should I track that as a dependency?"
          </p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 m-0">
          Instead of manually configuring every dependency relationship, Pulsimo <strong>automatically finds them</strong> and asks for your approval.
        </p>
      </div>

      {/* How It Works */}
      <h2>How It Works</h2>
      <div className="not-prose my-6">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Continuous Scanning',
                desc: 'Pulsimo analyzes all your registered services, looking for patterns, ports, and naming conventions',
                color: 'cyan',
              },
              {
                step: 2,
                title: 'Pattern Matching',
                desc: 'Applies smart detection rules based on port numbers, service names, and URL patterns',
                color: 'blue',
              },
              {
                step: 3,
                title: 'Confidence Scoring',
                desc: 'Each discovery gets a confidence score from 70% (uncertain) to 95% (very sure)',
                color: 'purple',
              },
              {
                step: 4,
                title: 'Your Approval',
                desc: 'Pulsimo shows you the discoveries. You approve ✅ or reject ❌',
                color: 'pink',
              },
              {
                step: 5,
                title: 'Automatic Tracking',
                desc: 'Approved dependencies are tracked and health monitoring begins automatically',
                color: 'green',
              },
            ].map((item) => (
              <div key={item.step} className="relative flex gap-4 pl-0">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${item.color}-500 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
                  {item.step}
                </div>
                <div className={`flex-1 p-4 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800`}>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1 mt-0">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Can Be Auto-Discovered */}
      <h2>What Can Be Auto-Discovered?</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-5 my-6">
        {/* Cache Layers */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-7 h-7 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">1. Cache Layers 💾</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-red-900 dark:text-red-100 text-sm">Redis Detection</span>
                <span className="text-xs px-2 py-1 rounded-full bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100">90-95%</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 m-0 list-none pl-0">
                <li>✓ Port 6379 in URL</li>
                <li>✓ "redis" in service name</li>
                <li>✓ redis:// URL scheme</li>
              </ul>
            </div>
            
            <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-orange-900 dark:text-orange-100 text-sm">Memcached Detection</span>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100">85-90%</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 m-0 list-none pl-0">
                <li>✓ Port 11211 in URL</li>
                <li>✓ "memcache" in name</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Layers */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">2. Search Layers 🔍</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-900 dark:text-blue-100 text-sm">Elasticsearch</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100">90-95%</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 m-0 list-none pl-0">
                <li>✓ Port 9200 (HTTP API)</li>
                <li>✓ Port 9300 (transport)</li>
                <li>✓ "elastic" in name</li>
              </ul>
            </div>
            
            <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-cyan-900 dark:text-cyan-100 text-sm">Apache Solr</span>
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-200 dark:bg-cyan-800 text-cyan-900 dark:text-cyan-100">85-90%</span>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 m-0 list-none pl-0">
                <li>✓ Port 8983 in URL</li>
                <li>✓ "solr" in service name</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">3. Database Layers 🗄️</h3>
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'PostgreSQL', port: '5432', conf: '95%' },
              { name: 'MySQL/MariaDB', port: '3306', conf: '95%' },
              { name: 'MongoDB', port: '27017', conf: '95%' },
            ].map((db) => (
              <div key={db.name} className="p-2 rounded-lg bg-white/60 dark:bg-slate-800/50 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-purple-900 dark:text-purple-100 text-sm">{db.name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Port {db.port}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100">
                  {db.conf}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Message Queues */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-7 h-7 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">4. Message Queues 📨</h3>
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'RabbitMQ', ports: '5672, 15672', conf: '90%' },
              { name: 'Apache Kafka', ports: '9092', conf: '90%' },
            ].map((mq) => (
              <div key={mq.name} className="p-2 rounded-lg bg-white/60 dark:bg-slate-800/50 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-green-900 dark:text-green-100 text-sm">{mq.name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Ports {mq.ports}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100">
                  {mq.conf}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confidence Score System */}
      <h2>Confidence Score System</h2>
      <p>Every discovered dependency gets a <strong>confidence score</strong> (0-100%) indicating how sure Pulsimo is about the relationship.</p>

      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {[
          { level: 'Very High', range: '95-100%', icon: '🟢', action: 'Safe to auto-approve', color: 'green' },
          { level: 'High', range: '85-94%', icon: '🟢', action: 'Review and approve', color: 'blue' },
          { level: 'Medium', range: '75-84%', icon: '🟡', action: 'Verify before approving', color: 'yellow' },
          { level: 'Fair', range: '70-74%', icon: '🟡', action: 'Double-check carefully', color: 'orange' },
        ].map((item) => (
          <div key={item.level} className={`p-4 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20 border border-${item.color}-200 dark:border-${item.color}-800`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{item.icon}</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{item.level}</span>
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">{item.range}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">{item.action}</div>
          </div>
        ))}
      </div>

      {/* User Interface */}
      <h2>User Interface</h2>
      <p><strong>Location:</strong> Dashboard → Dependencies → Auto-Discovery Tab</p>

      <div className="not-prose my-6 space-y-4">
        <div className="p-5 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">✨ Auto-Discovered Connections</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="text-sm text-slate-700 dark:text-slate-300 mb-1">Found 5 same-project dependencies</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Review and approve to add them</div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-colors">
                Approve 3 High Confidence
              </button>
              <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Scan for More
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="font-bold text-slate-900 dark:text-white">NodeJsProjects</span>
              <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-semibold">
                High
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">93%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 p-3 rounded bg-white dark:bg-slate-800/50">
              <div className="font-semibold text-slate-900 dark:text-white text-sm">NodeJsDemoBackend</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">backend</div>
            </div>
            <div className="text-2xl text-slate-400">→</div>
            <div className="flex-1 p-3 rounded bg-white dark:bg-slate-800/50">
              <div className="font-semibold text-slate-900 dark:text-white text-sm">RedisSessionCache</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">cache</div>
            </div>
          </div>
          
          <div className="mb-3 p-3 rounded bg-white/50 dark:bg-slate-800/30">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Detection:</div>
            <div className="text-sm text-slate-900 dark:text-white">Redis default port detected</div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 text-sm font-semibold border border-red-300 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-1">
              <XCircle className="w-4 h-4" />
              Reject
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Approve
            </button>
          </div>
        </div>
      </div>

      {/* Using Auto-Discovery */}
      <h2>Using Auto-Discovery</h2>
      
      <h3>Reviewing Discoveries</h3>
      <div className="not-prose my-6">
        <ol className="space-y-3">
          {[
            { title: 'Access Auto-Discovery', desc: 'Go to Dashboard → Dependencies → Auto-Discovery tab' },
            { title: 'Review Each Discovery', desc: 'Check service names, confidence score, and detection reason' },
            { title: 'Take Action', desc: 'Approve individual, reject, or bulk approve high confidence discoveries' },
          ].map((step, index) => (
            <li key={index} className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 dark:text-white mb-1">{step.title}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Smart Features */}
      <h2>Smart Features</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base m-0">Same-Project Filtering</h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
            Auto-discovery only suggests dependencies within the same project to prevent cross-project noise and focus on relevant relationships.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base m-0">Duplicate Prevention</h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
            Won't suggest dependencies that already exist. Checks before every scan to keep suggestions clean and relevant.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base m-0">Confidence-Based Sorting</h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
            Discoveries are shown highest confidence first, making it easy to approve the most certain ones quickly.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base m-0">Auto-Expiration</h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
            Unverified discoveries older than 30 days are auto-removed to prevent stale suggestions and keep the list fresh.
          </p>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-5 my-6">
        <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-3">For DevOps Teams</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 m-0">
            <li className="flex gap-2"><span>✓</span><span>Run discovery after infrastructure changes</span></li>
            <li className="flex gap-2"><span>✓</span><span>Review discoveries weekly</span></li>
            <li className="flex gap-2"><span>✓</span><span>Use naming conventions for better detection</span></li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-3">For Platform Engineers</h3>
          <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200 m-0">
            <li className="flex gap-2"><span>✓</span><span>Audit approved dependencies monthly</span></li>
            <li className="flex gap-2"><span>✓</span><span>Monitor confidence trends</span></li>
            <li className="flex gap-2"><span>✓</span><span>Document custom dependencies manually</span></li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <h2>Frequently Asked Questions</h2>
      
      <div className="not-prose space-y-3 my-6">
        {[
          {
            q: 'Does auto-discovery run automatically?',
            a: 'Yes, it runs every 5 minutes in the background. You can also trigger manual scans anytime.',
          },
          {
            q: 'Will it suggest cross-project dependencies?',
            a: 'No, only same-project relationships are suggested. Cross-project dependencies must be added manually.',
          },
          {
            q: 'What happens if I reject a discovery by mistake?',
            a: 'Click "Scan for More" to regenerate discoveries, or add the dependency manually.',
          },
          {
            q: 'Can auto-discovery detect custom ports?',
            a: 'If the service name contains the technology name (e.g., "CustomRedis"), it will be detected even on non-standard ports.',
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
        <a href="/docs/features/dependencies/health" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Dependency Health System</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">How dependencies affect service health</p>
        </a>
        <a href="/docs/features/dashboard" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Services Section Guide</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Managing discovered dependencies</p>
        </a>
        <a href="/docs/features/dependencies" className="block p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Manual Dependency Setup</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 m-0">Creating dependencies manually</p>
        </a>
      </div>
    </div>
  )
}
