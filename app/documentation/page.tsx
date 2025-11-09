import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { Rocket, BookOpen, Settings, Code, Database, Bell, Activity, Shield, Zap, Users, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - Pulsimo',
  description: 'Complete documentation for Pulsimo - Modern On-Premise Service Monitoring Platform',
}

export default function DocumentationPage() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#d5f4f4] via-[#e0f7f7] to-[#cbf0f0] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/40 dark:border-cyan-500/30 backdrop-blur-sm mb-6">
                <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">
                  v1.0.0-beta
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#1e40af] via-[#0891b2] to-[#14b8a6] dark:from-[#3b82f6] dark:via-[#06b6d4] dark:to-[#14b8a6] bg-clip-text text-transparent">
                  Pulsimo
                </span>
                <span className="text-slate-800 dark:text-white"> Documentation</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Modern On-Premise Service Monitoring Platform - Complete guides and API reference
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Rocket, label: 'Quick Start', href: '#quick-start' },
                { icon: Settings, label: 'Installation', href: '#installation' },
                { icon: Code, label: 'Features', href: '#features' },
                { icon: GitBranch, label: 'GitHub', href: 'https://github.com/Cloud-Council/pulsimo', external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-md transition-all group"
                >
                  <item.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* What is Pulsimo */}
        <section id="overview" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">
                What is Pulsimo?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Pulsimo is a comprehensive, modern, on-premise service monitoring and incident management platform designed to provide real-time visibility into your infrastructure's health. Built with a focus on developer experience and operational excellence, Pulsimo offers an all-in-one solution for monitoring HTTP/HTTPS endpoints, databases, message queues, and custom services across your entire technology stack.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Activity, title: 'Real-Time Monitoring', desc: 'Continuous health checks across HTTP, TCP, Database, Kafka, Redis, and more' },
                  { icon: Bell, title: 'Intelligent Alerting', desc: 'Multi-channel notifications via Slack, Discord, Email, Teams, and custom webhooks' },
                  { icon: Shield, title: 'Incident Management', desc: 'Complete incident lifecycle with acknowledgement and post-mortem capabilities' },
                  { icon: GitBranch, title: 'Dependency Mapping', desc: 'Automatic discovery and visualization of service dependencies' },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <feature.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                  Quick Start Guide
                </h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white text-sm font-bold">1</span>
                    Create Your First Project
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Projects help organize your monitoring endpoints by team, application, or environment.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Click "Projects" in the left sidebar</li>
                      <li>• Click "New Project" button</li>
                      <li>• Enter project name, description, and color</li>
                      <li>• Add tags for filtering (production, web, critical)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white text-sm font-bold">2</span>
                    Add Your First Endpoint
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Start monitoring your services with health checks.
                  </p>
                  <div className="bg-slate-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                    <div className="text-cyan-400 text-sm font-mono space-y-2">
                      <div>• <span className="text-slate-400">Name:</span> "Main API Health Check"</div>
                      <div>• <span className="text-slate-400">URL:</span> https://api.yourcompany.com/health</div>
                      <div>• <span className="text-slate-400">Check Interval:</span> 30 seconds</div>
                      <div>• <span className="text-slate-400">Expected Status:</span> 200</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white text-sm font-bold">3</span>
                    Configure Notifications
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Get alerts when services go down via your preferred channels.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Slack', 'Discord', 'Email', 'Teams', 'Google Chat', 'Webhook'].map((channel) => (
                      <div key={channel} className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center text-sm text-slate-700 dark:text-slate-300">
                        {channel}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                  Installation
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    System Requirements
                  </h3>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• <strong>Docker:</strong> Version 20.10+ and Docker Compose V2</li>
                      <li>• <strong>RAM:</strong> Minimum 4GB (8GB recommended)</li>
                      <li>• <strong>CPU:</strong> 2+ cores recommended</li>
                      <li>• <strong>Storage:</strong> 20GB+ available disk space</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    Quick Install with Docker Compose
                  </h3>
                  <div className="bg-slate-900 dark:bg-black rounded-lg p-4 overflow-x-auto mb-3">
                    <pre className="text-cyan-400 text-sm font-mono">
{`# Clone the repository
git clone https://github.com/Cloud-Council/pulsimo.git
cd pulsimo

# Copy environment template
cp .env.example .env

# Start all services
docker compose up -d

# Access Pulsimo
open http://localhost:3000`}
                    </pre>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                    <p className="text-sm text-cyan-900 dark:text-cyan-100">
                      <strong>⚡ Setup Time:</strong> Approximately 15 minutes including download and initialization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
                Core Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Activity,
                    title: 'Service Dashboard',
                    desc: 'Real-time overview of all monitored services with health status, response times, and uptime metrics'
                  },
                  {
                    icon: Zap,
                    title: 'Performance Analytics',
                    desc: 'Detailed metrics, SLA tracking, and trend analysis with comprehensive performance insights'
                  },
                  {
                    icon: Bell,
                    title: 'Notification Channels',
                    desc: 'Multi-channel alerts via Slack, Discord, Email, Teams, Google Chat, and custom webhooks'
                  },
                  {
                    icon: Shield,
                    title: 'Incident Management',
                    desc: 'Complete incident lifecycle management with acknowledgement, investigation, and post-mortems'
                  },
                  {
                    icon: GitBranch,
                    title: 'Service Dependencies',
                    desc: 'Visualize and analyze service dependencies with interactive graphs and critical path analysis'
                  },
                  {
                    icon: Database,
                    title: 'Database Health',
                    desc: 'Monitor PostgreSQL, MySQL, MongoDB with maintenance schedulers and performance tracking'
                  },
                  {
                    icon: Users,
                    title: 'Role-Based Access',
                    desc: 'Granular permissions with Admin, Member, and Viewer roles for team collaboration'
                  },
                  {
                    icon: Code,
                    title: 'RESTful API',
                    desc: 'Complete API for integrations, automation, and custom tooling with API key management'
                  },
                  {
                    icon: BookOpen,
                    title: 'Event Trail',
                    desc: 'Comprehensive audit logging and activity tracking for compliance and debugging'
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
                  >
                    <feature.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-4" />
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">
                Pulsimo vs. Traditional Stack
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">Feature</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-600 dark:text-cyan-400">Pulsimo</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">Prometheus + Grafana</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { feature: 'Setup Time', pulsimo: '15 minutes', traditional: 'Several hours to days' },
                      { feature: 'Learning Curve', pulsimo: 'Intuitive UI', traditional: 'PromQL, YAML configs' },
                      { feature: 'Incident Management', pulsimo: 'Built-in', traditional: 'External tools required' },
                      { feature: 'Dependency Mapping', pulsimo: 'Automatic', traditional: 'Manual or separate tools' },
                      { feature: 'Multi-Channel Alerts', pulsimo: '6+ channels', traditional: 'Basic webhooks' },
                      { feature: 'User Management', pulsimo: 'RBAC with 3 roles', traditional: 'Limited' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">{row.feature}</td>
                        <td className="px-6 py-4 text-cyan-600 dark:text-cyan-400 font-medium">{row.pulsimo}</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-500">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Zap className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">
                Ready to Start Monitoring?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Deploy Pulsimo on your infrastructure and start monitoring your services in minutes.
              </p>
              <a
                href="https://github.com/Cloud-Council/pulsimo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
              >
                <GitBranch className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
