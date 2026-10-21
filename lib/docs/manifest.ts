// The docs table of contents. Every page under /docs is listed here once:
// `slug` is its route below /docs, `file` its Markdown source in content/docs.
// Chapters in content/docs/guide are copied unchanged from the product's
// docs/user-guide folder, so they can be refreshed by copying that folder again.

export type DocItem = {
  slug: string
  file: string
  title: string
  description: string
  /** Built from other pages instead of a single file. */
  generated?: 'api' | 'release-notes'
}

export type DocSection = {
  title: string
  items: DocItem[]
}

export const DOC_SECTIONS: DocSection[] = [
  {
    title: 'Get started',
    items: [
      { slug: 'installation', file: 'installation.md', title: 'Installation', description: 'Run Pulsimo on your own server with Docker Compose, from published images or from source.' },
      { slug: 'quick-start', file: 'quick-start.md', title: 'Quick start', description: 'From an empty install to your first endpoint, alert channel and metric source in about ten minutes.' },
      { slug: 'first-project', file: 'first-project.md', title: 'Your first project', description: 'Group endpoints into a project, set a reliability target and see it on the status board.' },
      { slug: 'architecture', file: 'architecture.md', title: 'Architecture', description: 'The services that make up Pulsimo, where data lives and how a check becomes an alert.' },
      { slug: 'config/environment', file: 'guide/24-configuration.md', title: 'Configuration', description: 'Every .env value: what it controls, which service reads it, defaults, ranges and recipes.' },
    ],
  },
  {
    title: 'Services and checks',
    items: [
      { slug: 'projects', file: 'guide/23-projects-and-overview.md', title: 'Projects and overview', description: 'The live status board, project reliability against targets and error budgets, and project analytics.' },
      { slug: 'health-checks', file: 'health-checks.md', title: 'Endpoints and checks', description: 'What Pulsimo can check, every endpoint setting, and how a check decides Up, Degraded or Down.' },
      { slug: 'monitoring', file: 'guide/06-metric-monitors.md', title: 'Monitoring from metrics', description: "Health from the app's own metrics (5xx, p95, traffic) instead of, or as well as, calling it." },
      { slug: 'features/performance', file: 'guide/19-service-analytics.md', title: 'Service analytics', description: 'Response times, Apdex and anomalies, network phases and certificates for every endpoint.' },
      { slug: 'features/dependencies', file: 'guide/18-dependencies.md', title: 'Dependencies', description: 'A live map of which service needs which, suggestions with evidence, and impact on incidents.' },
    ],
  },
  {
    title: 'Metrics and dashboards',
    items: [
      { slug: 'metrics/sources', file: 'guide/01-metric-sources.md', title: 'Metric sources', description: 'Tell Pulsimo where /metrics lives and it pulls on a schedule.' },
      { slug: 'metrics/explorer', file: 'guide/02-metrics-explorer.md', title: 'Metrics Explorer', description: 'Graph anything with PromQL or a point-and-click builder.' },
      { slug: 'features/dashboard', file: 'guide/03-dashboards.md', title: 'Dashboards', description: 'Grafana-style dashboards with an editor, variables and Grafana JSON import.' },
      { slug: 'metrics/connected', file: 'guide/04-connected-monitoring.md', title: 'Connected monitoring', description: 'One service, one place: endpoint checks, its metrics and its dashboards together.' },
      { slug: 'metrics/discovery', file: 'guide/05-discovery.md', title: 'Discovered services', description: 'APIs, databases, hosts and containers found in your metrics, ready to monitor.' },
    ],
  },
  {
    title: 'Logs',
    items: [
      { slug: 'logs', file: 'guide/13-logs.md', title: 'Logs', description: 'Collect app logs with Fluent Bit, search them in the Log Browser and link them to endpoints.' },
      { slug: 'logs/walkthrough', file: 'guide/15-logs-walkthrough.md', title: 'Logs end to end', description: "Walkthrough: a Docker host's logs from Fluent Bit to endpoints and incidents." },
      { slug: 'logs/incidents', file: 'guide/16-incidents-from-logs.md', title: 'Incidents from logs', description: 'Exceptions in the logs open incidents that resolve themselves. Tune, test on 24 hours, mute.' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { slug: 'infrastructure', file: 'guide/27-infrastructure.md', title: 'Hosts and containers', description: 'Servers and containers from node_exporter, cAdvisor and their logs, with built-in alarms.' },
      { slug: 'infrastructure/kubernetes', file: 'guide/28-kubernetes.md', title: 'Kubernetes', description: 'Clusters, nodes, workloads and pods from kube-state-metrics, with the agent in one kubectl apply.' },
    ],
  },
  {
    title: 'Incidents and reliability',
    items: [
      { slug: 'features/incidents', file: 'guide/09-incident-evidence.md', title: 'Incidents and evidence', description: 'What the metrics showed, saved with the incident, and impact computed for you.' },
      { slug: 'incidents/probable-cause', file: 'guide/14-probable-cause.md', title: 'Probable cause', description: 'Ranked causes from changes, logs and metrics. Confirm, resolve, and see what happened before.' },
      { slug: 'reliability/slos', file: 'guide/07-slos.md', title: 'SLOs', description: 'Error budgets, burn-rate alerts and real-user Apdex.' },
      { slug: 'reliability/change-markers', file: 'guide/08-change-markers.md', title: 'Change markers', description: 'Deploys, restarts and new routes drawn on every chart.' },
      { slug: 'reliability/capacity', file: 'guide/10-capacity-and-anomalies.md', title: 'Capacity and anomalies', description: '"Disk full in about 3 days" and "traffic 70% below last week".' },
    ],
  },
  {
    title: 'Alerting',
    items: [
      { slug: 'alerting/alarms', file: 'guide/25-alarms.md', title: 'Alarms and rules', description: 'Rules for logs, traffic, metrics, incidents and checks; acknowledging, routing and maintenance windows.' },
      { slug: 'features/alerts', file: 'guide/21-alerts.md', title: 'Channels and delivery', description: 'Slack, Discord, Teams, Google Chat, email and webhooks, with tests, a delivery log and muting.' },
      { slug: 'alerting/routing', file: 'guide/11-alerts.md', title: 'Routing, digests and deploy grace', description: 'The right channel, fewer pages during deploys, and one digest for the small stuff.' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { slug: 'users/roles', file: 'guide/20-users.md', title: 'Users and access', description: 'Roles, who needs attention, safe administration, and access that changes at once.' },
      { slug: 'users/management', file: 'guide/22-settings.md', title: 'Settings and API keys', description: 'Organization, sign-in security, API keys, integrations and configuration backup.' },
      { slug: 'features/events', file: 'guide/26-api-metrics-and-event-trail.md', title: 'API metrics and Event trail', description: "How Pulsimo's API answers per route, and who did what, with filters and export." },
    ],
  },
  {
    title: "Pulsimo's own health",
    items: [
      { slug: 'features/database', file: 'guide/17-system-health.md', title: 'System and database health', description: 'Every Pulsimo component probed with real uptime; storage, retention and maintenance jobs.' },
      { slug: 'features/health', file: 'guide/12-pipeline-health.md', title: 'Monitoring pipeline', description: 'Check lag, scrape success, alert delay and series per source.' },
    ],
  },
  {
    title: 'API',
    items: [
      { slug: 'api/auth', file: 'api-auth.md', title: 'Authentication', description: 'Sign in with an API key or a session token, scopes, and error responses.' },
      { slug: 'api/endpoints', file: '', title: 'API reference', description: 'Every REST endpoint, grouped by feature.', generated: 'api' },
      { slug: 'api/webhooks', file: 'api-webhooks.md', title: 'Webhooks', description: 'The JSON Pulsimo sends to webhook channels, and how to handle it.' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { slug: 'guides/production', file: 'guides-production.md', title: 'Running in production', description: 'Secrets, HTTPS, firewall, backups, retention and upgrades.' },
      { slug: 'guides/best-practices', file: 'guides-best-practices.md', title: 'Best practices', description: 'How to set up checks, alerts and projects so the right people hear about the right things.' },
      { slug: 'guides/troubleshooting', file: 'guides-troubleshooting.md', title: 'Troubleshooting', description: 'Fixes for sign-in, checks, email, logs and metrics problems.' },
      { slug: 'faq', file: 'faq.md', title: 'FAQ', description: 'Short answers to common questions.' },
      { slug: 'release-notes', file: '', title: 'Release notes', description: 'What changed in recent releases.', generated: 'release-notes' },
    ],
  },
]

export const ALL_DOCS: DocItem[] = DOC_SECTIONS.flatMap((s) => s.items)

export function docHref(slug: string) {
  return slug ? `/docs/${slug}/` : '/docs/'
}

export function findDoc(slug: string) {
  return ALL_DOCS.find((d) => d.slug === slug)
}

export function sectionOf(slug: string) {
  return DOC_SECTIONS.find((s) => s.items.some((i) => i.slug === slug))
}

/** Old addresses that now live elsewhere. */
export const DOC_REDIRECTS: Record<string, string> = {
  'users/api-keys': '/docs/users/management/#api-keys',
  'api/incidents': '/docs/api/endpoints/',
  'config/docker': '/docs/installation/',
  'config/smtp': '/docs/features/alerts/#email-setup',
  'config/database': '/docs/features/database/',
}
