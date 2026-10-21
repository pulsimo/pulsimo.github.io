# Pulsimo user guide: metrics, dashboards and connected monitoring

This guide covers everything Pulsimo does with metrics and logs: pulling them from your
exporters and apps, graphing them, connecting them to the endpoints you monitor,
and the features that use them behind the scenes (SLOs, deploy markers, incident
evidence, capacity forecasts, smarter alerts).

Each chapter has the same shape: **what it is**, **where to find it**, **how to use
it**, **how it works**, and **limits**. Use it as the source for the public
documentation and for in-app help.

| # | Chapter | In one line |
|---|---|---|
| 1 | [Metric sources](01-metric-sources.md) | Tell Pulsimo where `/metrics` lives; it pulls on a schedule |
| 2 | [Metrics Explorer](02-metrics-explorer.md) | Graph anything with PromQL or a point-and-click builder |
| 3 | [Dashboards](03-dashboards.md) | Grafana-style dashboards, editor, variables and Grafana import |
| 4 | [Connected monitoring](04-connected-monitoring.md) | One service, one place: endpoint checks + its metrics + its dashboards |
| 5 | [Discovered services](05-discovery.md) | APIs, databases and hosts found in your metrics, ready to monitor |
| 6 | [Monitoring from metrics](06-metric-monitors.md) | Health from the app's own metrics (5xx, p95, traffic) instead of, or as well as, calling it |
| 7 | [Reliability targets (SLOs)](07-slos.md) | Error budgets, burn-rate alerts and real-user Apdex |
| 8 | [Change markers](08-change-markers.md) | Deploys, restarts and new routes drawn on every chart |
| 9 | [Incidents and evidence](09-incident-evidence.md) | What the metrics showed, saved with the incident; impact computed for you |
| 10 | [Capacity and anomalies](10-capacity-and-anomalies.md) | "Disk full in ~3 days" and "traffic 70% below last week" |
| 11 | [Alerts: routing, digests, deploy grace](11-alerts.md) | The right channel, fewer pages during deploys, one digest for the small stuff |
| 12 | [Pulsimo's own health](12-pipeline-health.md) | Check lag, scrape success, alert delay, series per source |
| 13 | [Logs](13-logs.md) | Collect app logs with Fluent Bit, search them in the Log Browser, link them to endpoints |
| 14 | [Probable cause](14-probable-cause.md) | Ranked causes from changes, logs and metrics; confirm, resolve, "seen before" |
| 15 | [Logs end to end](15-logs-walkthrough.md) | Walkthrough: a Docker host's logs (WakerPortal) from Fluent Bit to endpoints and incidents |
| 16 | [Incidents from logs](16-incidents-from-logs.md) | Exceptions in the logs open warning/critical incidents that resolve themselves; tune, test on 24 h, mute |
| 17 | [System Health and Database Health](17-system-health.md) | Every Pulsimo component probed with real uptime; storage, retention and maintenance jobs, all set in .env |
| 18 | [Dependencies](18-dependencies.md) | Live map of which service needs which, suggestions with evidence, impact on incidents and alerts |
| 19 | [Service analytics](19-service-analytics.md) | Response times, Apdex and anomalies, network phases and certificates; every figure and row clicks through to the endpoint, its metrics, logs and incidents |
| 20 | [Users and access](20-users.md) | Roles, who needs attention (locks, expired passwords, inactivity), safe administration, access that changes at once |
| 21 | [Alerting: channels and delivery](21-alerts.md) | Alert channels with tests, health and 7-day figures; delivery log with each platform's answer; muting; how alerts are sent |
| 22 | [Settings](22-settings.md) | Organization, sign-in security (inactivity sign-out, locks, password rules), API keys, real integrations, backup |
| 23 | [Projects and the Services overview](23-projects-and-overview.md) | Live status board; project reliability against targets and error budgets; analytics with trends, MTTA/MTTR and drill-down |
| 24 | [Configuration](24-configuration.md) | Every `.env` value: what it controls, which service reads it, defaults, ranges, how to apply it; what is set in the app instead; fixed limits; recipes |
| 25 | [Alerting: alarms and rules](25-alarms.md) | One place for everything that can wake someone up: rules for logs, traffic, metrics, incidents and checks; acknowledge, routing by severity and project, maintenance windows, timelines |
| 26 | [API metrics and Event trail](26-api-metrics-and-event-trail.md) | How Pulsimo's API answers your organization per route; who did what, with changes, filters, insights and export |
| 27 | [Infrastructure: hosts and containers](27-infrastructure.md) | Servers and containers from node_exporter, cAdvisor and their logs; connecting an existing Prometheus with remote_write; host and container pages; built-in host and container alarms |
| 28 | [Kubernetes](28-kubernetes.md) | Clusters, nodes, workloads and pods from kube-state-metrics; the in-cluster agent in one kubectl apply; what needs a look; workload and pod pages with logs; built-in Kubernetes alarms |

For how it is built (services, data flow, series names, tables, settings), see
[architecture/metrics-pipeline.md](../architecture/metrics-pipeline.md).

## Words used in this guide

| Word | Meaning |
|---|---|
| **Endpoint** / **monitor** | Something Pulsimo checks: a URL, database, Redis, gRPC service… (Services → Endpoints) |
| **Check** | One attempt to reach an endpoint. Checks decide Up/Down and open incidents |
| **Metric source** | A URL that serves Prometheus-format metrics (an exporter or an app's `/metrics`) |
| **Series** | One metric with one set of labels, e.g. `http_requests_total{route="/api/orders",status="200"}` |
| **Link** | The connection between an endpoint and the metrics that describe it (a source plus label filters such as `route="/api/orders"`) |
| **Profile** | What a link's source exposes: an HTTP app, a process, a host, PostgreSQL, MySQL, containers |
| **Change** | A deploy, restart or new route that Pulsimo detected from the metrics |
| **Digest** | One periodic message with the low-urgency findings, instead of many small alerts |
