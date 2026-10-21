## Projects

| Method and path | Does |
|---|---|
| `GET /api/v1/projects` | List projects |
| `POST /api/v1/projects` | Create a project |
| `GET /api/v1/projects/:id` | One project |
| `PUT /api/v1/projects/:id` | Change a project |
| `DELETE /api/v1/projects/:id` | Delete a project (administrators) |

## Endpoints

| Method and path | Does |
|---|---|
| `GET /api/v1/endpoints` | List endpoints with their status |
| `POST /api/v1/endpoints` | Add an endpoint (`name`, `url`, `service_type`, `api_protocol`, `check_interval_seconds` 10 to 3600, `timeout_seconds`, `expected_status_code`, `project_id`…) |
| `GET /api/v1/endpoints/:id` | One endpoint |
| `PUT /api/v1/endpoints/:id` | Change it; `is_active: false` pauses it |
| `DELETE /api/v1/endpoints/:id` | Delete it (administrators) |
| `GET /api/v1/endpoints/:id/history` | Recent check results |
| `GET /api/v1/endpoints/:id/stats` | Uptime and response-time figures |

## Incidents

| Method and path | Does |
|---|---|
| `GET /api/v1/incidents` | List incidents |
| `POST /api/v1/incidents` | Open an incident by hand |
| `GET /api/v1/incidents/stats` | Counts by state and severity |
| `GET /api/v1/incidents/:id` | One incident |
| `PUT /api/v1/incidents/:id` | Change it (title, severity, assignee…) |
| `PUT /api/v1/incidents/:id/state` | Move it to another state |
| `POST /api/v1/incidents/:id/acknowledge` | Acknowledge: reminders and escalation stop |
| `GET /api/v1/incidents/:id/timeline` | Everything that happened, in order |
| `POST /api/v1/incidents/:id/updates` | Add an update |
| `GET /api/v1/incidents/:id/evidence` | Metrics, logs and changes saved with it |
| `GET /api/v1/incidents/:id/post-mortem` | A post-mortem draft with impact and evidence |
| `DELETE /api/v1/incidents/:id` | Delete it (administrators) |

## Alarms and maintenance

| Method and path | Does |
|---|---|
| `GET /api/v1/alarms` | Open and past alarms |
| `GET /api/v1/alarms/:id` | One alarm with its timeline |
| `POST /api/v1/alarms/:id/acknowledge` | Acknowledge one alarm |
| `POST /api/v1/alarms/acknowledge` | Acknowledge several |
| `POST /api/v1/alarms/:id/resolve` | Resolve by hand |
| `GET /api/v1/alarm-rules` | Alarm rules |
| `POST /api/v1/alarm-rules/preview` | Try a rule on recent data before saving |
| `PUT /api/v1/alarm-rules/:id/enabled` | Turn a rule on or off |
| `GET /api/v1/maintenance-windows` | Maintenance windows |
| `POST /api/v1/maintenance-windows/:id/end` | End a running window now |
