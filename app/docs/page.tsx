import { Metadata } from 'next'
import { Activity, Bell, Shield, GitBranch, Zap, Users, Database, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation Overview - Pulsimo',
  description: 'Complete documentation for Pulsimo - Modern On-Premise Service Monitoring Platform',
}

export default function DocsOverviewPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold mb-4">
          BETA v1.0.0
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Pulsimo Documentation
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Modern On-Premise Service Monitoring Platform
        </p>
      </div>

      {/* What is Pulsimo */}
      <h2>What is Pulsimo?</h2>
      <p className="mb-4">
        <strong>Pulsimo</strong> is a comprehensive, modern, on-premise service monitoring and incident management 
        platform designed to provide real-time visibility into your infrastructure's health. Built with a focus on 
        developer experience and operational excellence, Pulsimo offers an all-in-one solution for monitoring 
        HTTP/HTTPS endpoints, databases, message queues, and custom services across your entire technology stack.
      </p>
      <p className="mb-6">
        Unlike traditional monitoring solutions that require multiple tools and complex configurations, Pulsimo 
        provides a unified, intuitive interface for monitoring, alerting, incident management, and dependency 
        tracking—all deployable on your own infrastructure with complete data sovereignty.
      </p>

      {/* Key Capabilities */}
      <h2>Key Capabilities</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        {[
          {
            icon: Activity,
            title: 'Real-Time Health Monitoring',
            desc: 'Continuous health checks across HTTP, TCP, Database, Kafka, Redis, Elasticsearch, and custom endpoints'
          },
          {
            icon: Bell,
            title: 'Intelligent Alerting',
            desc: 'Multi-channel notifications via Slack, Discord, Email, Microsoft Teams, Google Chat, and custom webhooks'
          },
          {
            icon: Shield,
            title: 'Incident Management',
            desc: 'Complete incident lifecycle management with acknowledgement, investigation, and post-mortem capabilities'
          },
          {
            icon: GitBranch,
            title: 'Dependency Mapping',
            desc: 'Automatic discovery and visualization of service dependencies with critical path analysis'
          },
          {
            icon: Zap,
            title: 'Performance Analytics',
            desc: 'In-depth performance metrics, SLA tracking, and trend analysis'
          },
          {
            icon: Users,
            title: 'Role-Based Access Control',
            desc: 'Granular permissions system with admin, member, and viewer roles'
          },
        ].map((feature) => (
          <div key={feature.title} className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <feature.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 m-0">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Problem We Solve */}
      <h2>The Problem We Solve</h2>
      <p>
        Modern infrastructure monitoring presents several challenges that traditional tools often fail to address adequately:
      </p>

      <h3>1. Complexity and Fragmentation</h3>
      <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border-l-4 border-cyan-500 p-4 my-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">The Challenge:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Traditional monitoring stacks like Prometheus + Grafana + Alertmanager require deploying, configuring, and 
          maintaining multiple separate tools. Each tool has its own learning curve, configuration language, and 
          operational requirements.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">Pulsimo's Solution:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
          An integrated, all-in-one platform where monitoring, alerting, incident management, and dependency tracking 
          work seamlessly together. Deploy once, configure through an intuitive UI, and start monitoring in minutes.
        </p>
      </div>

      <h3>2. Developer Experience</h3>
      <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border-l-4 border-blue-500 p-4 my-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">The Challenge:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Prometheus requires learning PromQL, Grafana needs dashboard JSON configurations, and Alertmanager uses 
          YAML-based routing rules. Setting up a simple alert can take hours of documentation reading.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">Pulsimo's Solution:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
          A modern, intuitive web interface designed for both technical and non-technical users. Create endpoints, 
          configure alerts, and manage incidents through simple forms—no query languages or configuration files required.
        </p>
      </div>

      <h3>3. Incident Management Gap</h3>
      <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border-l-4 border-purple-500 p-4 my-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">The Challenge:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Traditional monitoring tools tell you when something is down but provide no structured way to manage the 
          incident lifecycle. Teams resort to external ticketing systems or spreadsheets.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">Pulsimo's Solution:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
          Built-in incident management with acknowledgement tracking, multi-user escalation, investigation notes, 
          post-mortem generation, and complete audit trails—all integrated with your monitoring data.
        </p>
      </div>

      <h3>4. Data Sovereignty and Compliance</h3>
      <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border-l-4 border-green-500 p-4 my-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">The Challenge:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Cloud-based monitoring services send your operational data to external servers, creating compliance issues 
          for regulated industries and raising data sovereignty concerns.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong className="text-slate-900 dark:text-white">Pulsimo's Solution:</strong></p>
        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
          Fully on-premise deployment with complete data control. Your monitoring data never leaves your infrastructure, 
          ensuring compliance with GDPR, HIPAA, SOC2, and internal security policies.
        </p>
      </div>

      {/* Core Philosophy */}
      <h2>Core Philosophy</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">1</div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Simplicity Without Compromise</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Powerful features delivered through intuitive interfaces. Complex monitoring doesn't require complex tools.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">2</div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Data Sovereignty First</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Your infrastructure data stays on your infrastructure. No third-party dependencies for core functionality.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">3</div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Developer-Centric Design</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Built by developers, for developers. Every feature considers the on-call engineer's 3 AM experience.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm">4</div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Production-Ready by Default</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
              Optimized for performance, reliability, and scale. Battle-tested for production workloads from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Who Should Use Pulsimo */}
      <h2>Who Should Use Pulsimo?</h2>
      
      <h3>Perfect For</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
        <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="text-blue-600 dark:text-blue-400 text-lg">👥</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">DevOps Teams</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">managing microservices architectures</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <div className="text-purple-600 dark:text-purple-400 text-lg">🛠️</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Platform Engineers</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">building internal developer platforms</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="text-green-600 dark:text-green-400 text-lg">⚡</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Site Reliability Engineers (SRE)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">maintaining production systems</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <div className="text-red-600 dark:text-red-400 text-lg">🏥</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Regulated Industries</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">(healthcare, finance, government) requiring data sovereignty</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <div className="text-orange-600 dark:text-orange-400 text-lg">🚀</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Startups & Scale-ups</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">needing enterprise features without enterprise complexity</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <div className="text-cyan-600 dark:text-cyan-400 text-lg">🔒</div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Self-Hosted Advocates</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">preferring control over convenience</p>
          </div>
        </div>
      </div>

      <h3>Use Cases</h3>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Microservices Monitoring</strong> - Track health across distributed services</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">API Gateway Monitoring</strong> - Ensure API availability and performance</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Database Health Checks</strong> - Monitor PostgreSQL, MySQL, MongoDB instances</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Message Queue Monitoring</strong> - Track Kafka and Redis health</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Third-Party API Monitoring</strong> - Monitor external dependencies</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Multi-Region Infrastructure</strong> - Monitor services across geographic locations</p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0"><strong className="text-slate-900 dark:text-white">Compliance Monitoring</strong> - Meet uptime SLAs with documented evidence</p>
        </div>
      </div>

      {/* Comparison Table */}
      <h2>Pulsimo vs. Traditional Monitoring Stacks</h2>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Feature</th>
              <th className="text-left py-3 px-4 font-semibold text-cyan-600 dark:text-cyan-400">Pulsimo</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Prometheus + Grafana + Alertmanager</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            {[
              { feature: 'Setup Time', pulsimo: '15 minutes with Docker Compose', traditional: 'Several hours to days' },
              { feature: 'Learning Curve', pulsimo: 'Intuitive UI, no special languages', traditional: 'Requires learning PromQL, Grafana queries' },
              { feature: 'Incident Management', pulsimo: 'Built-in with post-mortems', traditional: 'Requires external tools' },
              { feature: 'Dependency Mapping', pulsimo: 'Automatic discovery & visualization', traditional: 'Manual configuration or separate tools' },
              { feature: 'Multi-Channel Alerts', pulsimo: '6+ channels out-of-the-box', traditional: 'Basic webhook support, needs integration' },
              { feature: 'User Management', pulsimo: 'Built-in RBAC with 3 roles', traditional: 'Limited, requires external auth' },
              { feature: 'Configuration', pulsimo: 'Web UI with forms', traditional: 'YAML files and code' },
              { feature: 'Database Monitoring', pulsimo: 'Native PostgreSQL, MySQL, MongoDB', traditional: 'Requires exporters and configuration' },
            ].map((row, index) => (
              <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">{row.pulsimo}</td>
                <td className="py-3 px-4">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tech Stack */}
      <h2>Technology Stack</h2>
      <p>
        Pulsimo is built with proven, production-ready technologies:
      </p>
      <div className="not-prose grid md:grid-cols-2 gap-3 my-6">
        {[
          { name: 'Rust', desc: 'High-performance checker service' },
          { name: 'Node.js + Express', desc: 'RESTful API backend' },
          { name: 'React + Next.js', desc: 'Modern web interface' },
          { name: 'PostgreSQL', desc: 'Primary data storage' },
          { name: 'Redis', desc: 'Caching and real-time updates' },
          { name: 'WebSockets', desc: 'Live dashboard updates' },
        ].map((tech) => (
          <div key={tech.name} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <div>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">{tech.name}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{tech.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <h2>Next Steps</h2>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <a href="/docs/quick-start" className="block p-6 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all">
          <div className="text-cyan-600 dark:text-cyan-400 mb-2">
            <Activity className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Quick Start Guide</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Get started with Pulsimo in 15 minutes. Create your first project and monitor services.
          </p>
        </a>
        <a href="/docs/installation" className="block p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all">
          <div className="text-blue-600 dark:text-blue-400 mb-2">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Installation Guide</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
            Deploy Pulsimo on your infrastructure with Docker Compose in minutes.
          </p>
        </a>
      </div>

      <div className="not-prose mt-12 p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="mb-4 opacity-90">
          Deploy Pulsimo on your infrastructure and start monitoring your services today.
        </p>
        <a
          href="https://github.com/Cloud-Council/pulsimo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-cyan-600 font-semibold hover:bg-slate-50 transition-colors"
        >
          <GitBranch className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </div>
  )
}
