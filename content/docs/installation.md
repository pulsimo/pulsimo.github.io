# Installation

Pulsimo runs on your own server with Docker Compose. Everything it needs, including
PostgreSQL, Redis, VictoriaMetrics and VictoriaLogs, starts in the same Compose project,
so one Linux machine is enough to get going.

## Requirements

| | Minimum | Recommended for production |
|---|---|---|
| CPU | 4 vCPU | 8 vCPU |
| Memory | 8 GB | 16 GB |
| Disk | 20 GB free | 50 GB SSD, more if you keep long metric and log history |
| Software | Docker 20.10+ with Docker Compose v2 | the same |
| OS | Linux (Ubuntu 20.04+, Debian 11+ or similar) | the same |

Browsers reach the web app on port **3000** and the API on port **8080**. Both can be
changed in `.env`. Check that Docker works before you start:

```bash
docker --version
docker compose version
```

## Choose how to run it

| | Published images | From source |
|---|---|---|
| Compose file | `docker-compose.prod.yml` | `docker-compose.yml` |
| What happens | Pulls ready-made `pulsimo/*` images | Builds every service on your machine |
| Setup script | `./setup-prod.sh` | `./setup.sh` |
| Best for | Servers, trying Pulsimo out | Developing Pulsimo itself |

Both use the same `.env` file and behave the same once running. The rest of this page uses
the published images; for a source build, drop `-f docker-compose.prod.yml` from the
commands.

## Install with the setup script

The script checks Docker and the machine's resources, detects the server's IP address,
writes `.env` with a generated database password and JWT secret, starts every service and
waits until the web app and the API answer.

```bash
chmod +x setup-prod.sh
./setup-prod.sh
```

The script does not generate `METRICS_SECRET_KEY`. When it pauses with "Press Enter to
continue with deployment", open `.env` in another terminal and replace that placeholder
with the output of `openssl rand -base64 32`, then press Enter.

When it finishes, open `http://<server-ip>:3000` and continue with
[First sign-in](#first-sign-in).

## Install by hand

1. **Create the configuration.** Start from the template that ships next to the Compose
   file:

   ```bash
   cp .env.example .env
   ```

2. **Set the address and the secrets.** At a minimum, set the address people will use and
   replace the three secrets:

   ```bash
   HOST_IP=192.168.1.100                     # the server's IP or name
   POSTGRES_PASSWORD=<openssl rand -base64 24>
   JWT_SECRET=<openssl rand -base64 32>
   METRICS_SECRET_KEY=<openssl rand -base64 32>
   ```

   `HOST_IP` matters: the web app calls the API at `http://HOST_IP:8080`, so with the default
   `localhost` nobody but the server itself can sign in. Behind a domain or HTTPS, set
   `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_WS_URL` instead (see
   [Configuration](/docs/config/environment/)).

3. **Start Pulsimo.**

   ```bash
   docker compose -f docker-compose.prod.yml pull
   docker compose -f docker-compose.prod.yml up -d
   ```

   The `migrations` container prepares the database and exits; every other service waits
   for it and for PostgreSQL to be healthy.

4. **Check that everything is up.**

   ```bash
   docker compose -f docker-compose.prod.yml ps
   curl -s http://localhost:8080/health
   ```

## First sign-in

1. Open `http://<HOST_IP>:3000`.
2. Sign in as `superadmin@pulsimo.io` with the password `admin`. The database
   migrations create this administrator on every new install.
3. Change that password straight away: **Users** → **Reset password** on your own row.
   There is no sign-up page; everyone else is added from **Users**.
4. Add someone else as an administrator too (Users → Add user), so you are never locked
   out of user management. See [Users and access](/docs/users/roles/).

Then follow the [Quick start](/docs/quick-start/) to add your first endpoint and alert
channel.

## What runs

| Service | What it does |
|---|---|
| `frontend` | The web app (port 3000) |
| `api-gateway` | REST API and live updates for the web app (port 8080); log ingestion |
| `checker` | Runs endpoint checks and evaluates monitors that use metrics |
| `notification` | Sends alerts to Slack, Discord, Teams, Google Chat, email and webhooks |
| `metrics-collector` | Scrapes metric sources, discovery, SLOs, anomalies, capacity, alarm rules |
| `dependency-tracker` | Builds the dependency map |
| `maintenance-scheduler` | Retention, roll-ups and database upkeep on a schedule |
| `migrations` | Applies database migrations on start, then exits |
| `postgres` | Configuration, checks, incidents and users (PostgreSQL 17) |
| `redis` | Live updates and events between services |
| `victoriametrics` | Stores metrics (internal only) |
| `victorialogs` | Stores logs (internal only) |
| `vmalert` | Evaluates the recording rules Pulsimo generates |

How they fit together is on the [Architecture](/docs/architecture/) page.

## Upgrade

Published images are tagged with a version. Set the one you want in `.env` and recreate
the services:

```bash
PULSIMO_VERSION=<new version>
```

```bash
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

Database migrations run automatically on start. To roll back, set the previous version
and run the same two commands. Take a database backup before upgrading (see
[Running in production](/docs/guides/production/)).

## Stop or remove

```bash
docker compose -f docker-compose.prod.yml down      # stop, keep all data
docker compose -f docker-compose.prod.yml down -v   # stop and DELETE all data
```

`down -v` removes the volumes with your database, metrics and logs. There is no undo.

## Next steps

- [Quick start](/docs/quick-start/): your first endpoint, alert channel and metric source.
- [Configuration](/docs/config/environment/): every `.env` value.
- [Running in production](/docs/guides/production/): HTTPS, firewall, backups.
