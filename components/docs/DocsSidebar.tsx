'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, BookOpen, Rocket, Settings, Code, Database, Bell, Activity, Users, Shield, GitBranch, FileText, HelpCircle } from 'lucide-react'

const navigation = [
  {
    title: 'Getting Started',
    icon: Rocket,
    items: [
      { title: 'Overview', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
      { title: 'First Project Setup', href: '/docs/first-project' },
    ]
  },
  {
    title: 'Core Concepts',
    icon: BookOpen,
    items: [
      { title: 'Architecture', href: '/docs/architecture' },
      { title: 'Projects & Organization', href: '/docs/projects' },
      { title: 'Health Checks', href: '/docs/health-checks' },
      { title: 'Real-time Monitoring', href: '/docs/monitoring' },
    ]
  },
  {
    title: 'Features',
    icon: Activity,
    items: [
      { title: 'Service Dashboard', href: '/docs/features/dashboard' },
      { title: 'Performance Analytics', href: '/docs/features/performance' },
      { title: 'Incident Management', href: '/docs/features/incidents' },
      { title: 'Dependencies', href: '/docs/features/dependencies' },
      { title: 'Notifications & Alerts', href: '/docs/features/alerts' },
      { title: 'Database Health', href: '/docs/features/database' },
      { title: 'Event Trail', href: '/docs/features/events' },
    ]
  },
  {
    title: 'Configuration',
    icon: Settings,
    items: [
      { title: 'Environment Variables', href: '/docs/config/environment' },
      { title: 'Docker Setup', href: '/docs/config/docker' },
      { title: 'SMTP & Email', href: '/docs/config/smtp' },
      { title: 'Database Config', href: '/docs/config/database' },
    ]
  },
  {
    title: 'User Management',
    icon: Users,
    items: [
      { title: 'Roles & Permissions', href: '/docs/users/roles' },
      { title: 'User Management', href: '/docs/users/management' },
      { title: 'API Keys', href: '/docs/users/api-keys' },
    ]
  },
  {
    title: 'API Reference',
    icon: Code,
    items: [
      { title: 'Authentication', href: '/docs/api/auth' },
      { title: 'Endpoints API', href: '/docs/api/endpoints' },
      { title: 'Incidents API', href: '/docs/api/incidents' },
      { title: 'Webhooks', href: '/docs/api/webhooks' },
    ]
  },
  {
    title: 'Guides',
    icon: FileText,
    items: [
      { title: 'Best Practices', href: '/docs/guides/best-practices' },
      { title: 'Production Deployment', href: '/docs/guides/production' },
      { title: 'Troubleshooting', href: '/docs/guides/troubleshooting' },
    ]
  },
  {
    title: 'Resources',
    icon: HelpCircle,
    items: [
      { title: 'FAQ', href: '/docs/faq' },
      { title: 'GitHub', href: 'https://github.com/Cloud-Council/pulsimo', external: true },
    ]
  },
]

export default function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-2 px-2">Documentation</h2>
        </div>
        
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 px-2 mb-2">
                <section.icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {item.title}
                          <ChevronRight className="w-3 h-3 -rotate-45" />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 font-medium'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
