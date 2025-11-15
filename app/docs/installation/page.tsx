import { Metadata } from 'next'
import { Server, HardDrive, Cpu, Database, Network, CheckCircle2, AlertTriangle, Code2, Rocket, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Installation Guide - Pulsimo Documentation',
  description: 'Complete guide to installing and deploying Pulsimo on your infrastructure',
}

export default function InstallationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      {/* System Requirements */}
      <h2>System Requirements</h2>
      
      <h3>Minimum Requirements</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Component</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Specification</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Notes</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  CPU
                </div>
              </td>
              <td className="py-3 px-4">2 cores (4 recommended)</td>
              <td className="py-3 px-4">For handling concurrent health checks</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  RAM
                </div>
              </td>
              <td className="py-3 px-4">4 GB (8 GB recommended)</td>
              <td className="py-3 px-4">Supports up to 200 endpoints</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Storage
                </div>
              </td>
              <td className="py-3 px-4">20 GB SSD</td>
              <td className="py-3 px-4">For database and logs</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Network
                </div>
              </td>
              <td className="py-3 px-4">Stable internet connection</td>
              <td className="py-3 px-4">For pulling images and monitoring</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Recommended Production Requirements</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">CPU</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">4-8 cores</td>
              <td className="py-3 px-4">For 500+ endpoints with optimal performance</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">RAM</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">16 GB</td>
              <td className="py-3 px-4">Supports up to 1000 endpoints comfortably</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Storage</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">100 GB SSD</td>
              <td className="py-3 px-4">Recommended for production with extended retention</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">OS</td>
              <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-medium">Ubuntu 22.04 LTS or RHEL 8+</td>
              <td className="py-3 px-4">Long-term support versions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Supported Platforms</h3>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <h4 className="text-sm font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Linux Distributions
          </h4>
          <ul className="space-y-1 text-sm text-green-800 dark:text-green-200 m-0">
            <li>• Ubuntu 20.04 LTS, 22.04 LTS</li>
            <li>• Debian 11, 12</li>
            <li>• CentOS 8, 9</li>
            <li>• RHEL 8, 9</li>
            <li>• Fedora 37+</li>
            <li>• Amazon Linux 2</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Cloud Providers
          </h4>
          <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200 m-0">
            <li>• AWS EC2</li>
            <li>• Google Cloud Compute Engine</li>
            <li>• Microsoft Azure VMs</li>
            <li>• DigitalOcean Droplets</li>
            <li>• Linode</li>
            <li>• Any VPS with Docker support</li>
          </ul>
        </div>
      </div>

      <div className="not-prose p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 my-6">
        <p className="text-sm text-orange-900 dark:text-orange-100 flex items-start gap-2 m-0">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span><strong>Windows & macOS:</strong> Supported for development only. Production deployment on Linux is strongly recommended.</span>
        </p>
      </div>

      <h3>Software Prerequisites</h3>
      <p>Before installing Pulsimo, ensure you have:</p>
      <ol>
        <li><strong>Docker Engine</strong> - Version 20.10.0 or higher</li>
        <li><strong>Docker Compose</strong> - Version 2.0.0 or higher</li>
        <li><strong>Git</strong> - For cloning the repository</li>
        <li><strong>Available Ports</strong> - 80, 443, 3000, 5432, 6379, 8080</li>
      </ol>

      {/* Docker Installation */}
      <h2>Installing Docker</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 italic">(Suggested to use official installation method)</p>
      
      <h3>Ubuntu/Debian</h3>
      <p>If you don't have Docker installed, follow these steps:</p>

      <div className="not-prose my-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">1. Update Package Index</h4>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">sudo apt-get update</pre>
        </div>
      </div>

      <div className="not-prose my-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">2. Install Required Packages</h4>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`sudo apt-get install -y \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release`}</pre>
        </div>
      </div>

      <div className="not-prose my-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">3. Add Docker's Official GPG Key</h4>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \\
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`}</pre>
        </div>
      </div>

      <div className="not-prose my-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">4. Install Docker Engine</h4>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin`}</pre>
        </div>
      </div>

      <div className="not-prose my-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">5. Verify Installation</h4>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`sudo docker --version
sudo docker compose version`}</pre>
        </div>
      </div>

      {/* Quick Install */}
      <h2>Quick Installation with Docker Compose</h2>
      <p>The fastest way to get Pulsimo running:</p>

      <div className="not-prose my-6">
        <div className="bg-slate-900 dark:bg-black rounded-lg p-6">
          <div className="font-mono text-sm space-y-4">
            <div>
              <div className="text-slate-500 mb-1"># Clone the repository</div>
              <div className="text-cyan-400">git clone https://github.com/Cloud-Council/pulsimo.git</div>
              <div className="text-cyan-400">cd pulsimo</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1"># Copy environment template</div>
              <div className="text-cyan-400">cp .env.example .env</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1"># Edit environment variables (optional)</div>
              <div className="text-cyan-400">nano .env</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1"># Start all services</div>
              <div className="text-cyan-400">docker compose up -d --remove-orphans</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1"># View logs</div>
              <div className="text-cyan-400">docker compose logs -f</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1"># Access Pulsimo</div>
              <div className="text-green-400">open http://localhost:3000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 my-6">
        <p className="text-sm text-green-900 dark:text-green-100 flex items-start gap-2 m-0">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span><strong>Success!</strong> Pulsimo should now be running on http://localhost:3000. Default credentials will be created on first run.</span>
        </p>
      </div>

      {/* Environment Configuration */}
      <h2>Environment Configuration</h2>
      <p>Configure Pulsimo by editing the <code>.env</code> file. Here are the essential variables you need to set:</p>

      <div className="not-prose p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 my-6">
        <p className="text-sm text-cyan-900 dark:text-cyan-100 font-semibold mb-3 m-0">⚡ Quick Start - Minimum Configuration</p>
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4 mt-3">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`# Generate secure passwords
HOST_IP=192.168.1.100                        # Your server IP
POSTGRES_PASSWORD=$(openssl rand -base64 24) # Secure password
JWT_SECRET=$(openssl rand -base64 32)        # Secure secret

# Frontend configuration
NEXT_PUBLIC_API_URL=http://monitoring.company.com:8080
NEXT_PUBLIC_WS_URL=ws://monitoring.company.com:8080`}</pre>
        </div>
      </div>

      <h3>Essential Variables</h3>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Description</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Example</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">HOST_IP</td>
              <td className="py-3 px-4">Server IP or domain where Pulsimo is accessible</td>
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400">192.168.1.100</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">POSTGRES_PASSWORD</td>
              <td className="py-3 px-4">Database password (must be secure!)</td>
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400">K7mP9x2vL4nQ...</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">JWT_SECRET</td>
              <td className="py-3 px-4">Secret for signing authentication tokens</td>
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400">XkJ7vM2pL9...</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">NEXT_PUBLIC_API_URL</td>
              <td className="py-3 px-4">Backend API endpoint URL</td>
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400">http://monitoring.company.com:8080</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-white">NEXT_PUBLIC_WS_URL</td>
              <td className="py-3 px-4">WebSocket endpoint for real-time updates</td>
              <td className="py-3 px-4 font-mono text-xs text-cyan-600 dark:text-cyan-400">ws://monitoring.company.com:8080</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Optional: SMTP Configuration (Email Alerts)</h3>
      <p>Configure SMTP to enable email notifications for alerts and incidents:</p>
      
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Gmail</h4>
          <div className="bg-slate-900 dark:bg-black rounded-lg p-3">
            <pre className="text-cyan-400 text-xs font-mono m-0">{`SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your@gmail.com
SMTP_PASSWORD=app-password
FROM_EMAIL=your@gmail.com`}</pre>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">AWS SES</h4>
          <div className="bg-slate-900 dark:bg-black rounded-lg p-3">
            <pre className="text-cyan-400 text-xs font-mono m-0">{`SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USERNAME=<smtp-user>
SMTP_PASSWORD=<smtp-pass>
FROM_EMAIL=alerts@domain.com`}</pre>
          </div>
        </div>
      </div>

      <div className="not-prose p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 my-6">
        <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
          📚 For complete environment variable documentation including checker intervals, timeouts, and advanced settings, see the{' '}
          <a href="/docs/config/environment" className="font-bold text-purple-600 dark:text-purple-400 underline">
            Environment Variables Guide
          </a>
          .
        </p>
      </div>

      {/* Post Installation */}
      <h2>Post-Installation Steps</h2>
      
      <h3>1. First Login with Default Credentials</h3>
      <p>Pulsimo comes with a default system administrator account for on-premise deployments. Use these credentials to login at <code>http://localhost:3000</code>:</p>
      
      <div className="not-prose my-4 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Default Login Credentials</p>
            <div className="space-y-2 text-sm">
              <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded border border-amber-200 dark:border-amber-800">
                <div className="text-slate-600 dark:text-slate-400 mb-1">Email:</div>
                <div className="text-slate-900 dark:text-white font-semibold">superadmin@pulsimo.io</div>
              </div>
              <div className="font-mono bg-white dark:bg-slate-900 p-3 rounded border border-amber-200 dark:border-amber-800">
                <div className="text-slate-600 dark:text-slate-400 mb-1">Password:</div>
                <div className="text-slate-900 dark:text-white font-semibold">admin</div>
              </div>
            </div>
            <p className="text-amber-800 dark:text-amber-200 mt-3 font-medium">
              ⚠️ <strong>IMPORTANT:</strong> Change this password immediately after your first login for security reasons. 
              The superadmin account is immutable and cannot be deleted.
            </p>
          </div>
        </div>
      </div>

      <h3>2. Verify Services</h3>
      <p>Check that all containers are running:</p>
      <div className="not-prose my-4">
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">docker compose ps</pre>
        </div>
      </div>

      <h3>3. Access the Dashboard</h3>
      <ul>
        <li><strong>Frontend:</strong> http://localhost:3000</li>
        <li><strong>API:</strong> http://localhost:8080</li>
      </ul>

      <h3>4. Change Default Password (Critical)</h3>
      <p>For security, immediately change the default password after logging in:</p>
      <ol className="space-y-2">
        <li>Login with the default credentials shown above</li>
        <li>Navigate to <strong>Users</strong> page from the dashboard</li>
        <li>Find the <code>superadmin@pulsimo.io</code> user (marked with a "System" badge)</li>
        <li>Click the <strong>key icon</strong> (🔑) to change the password</li>
        <li>Set a strong password and save</li>
      </ol>
      
      <div className="not-prose my-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Security Note</p>
            <p className="text-sm text-red-800 dark:text-red-200 m-0">
              The superadmin account is <strong>immutable</strong> and cannot be deleted. 
              It's protected at the database level to ensure you always have administrative access. 
              While you can change the password, the email and role cannot be modified.
            </p>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <h2>Troubleshooting</h2>

      <h3>Port Conflicts</h3>
      <p>If you get port conflict errors, you can change ports in <code>docker-compose.yml</code>:</p>
      <div className="not-prose my-4">
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`# Change from 3000:3000 to 8000:3000
ports:
  - "8000:3000"`}</pre>
        </div>
      </div>

      <h3>Container Won't Start</h3>
      <p>View logs for specific services:</p>
      <div className="not-prose my-4">
        <div className="bg-slate-900 dark:bg-black rounded-lg p-4">
          <pre className="text-cyan-400 text-sm font-mono m-0">{`docker compose logs api
docker compose logs frontend
docker compose logs checker`}</pre>
        </div>
      </div>

      {/* Next Steps */}
      <h2>Next Steps</h2>
      <p>After successful installation:</p>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <a href="/docs/quick-start" className="block p-5 rounded-lg border-2 border-cyan-200 dark:border-cyan-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-lg transition-all bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Quick Start Guide</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Set up your first monitoring endpoints and alerts</p>
        </a>

        <a href="/docs/config/environment" className="block p-5 rounded-lg border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Environment Variables</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Configure advanced settings and integrations</p>
        </a>

        <a href="/docs/guides/production" className="block p-5 rounded-lg border-2 border-green-200 dark:border-green-800 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <div className="flex items-center gap-3 mb-2">
            <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Production Deployment</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Best practices for production infrastructure</p>
        </a>

        <a href="/docs/features/alerts" className="block p-5 rounded-lg border-2 border-orange-200 dark:border-orange-800 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-lg transition-all bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">Alert Notifications</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0">Set up Slack, Discord, Email, and webhook alerts</p>
        </a>
      </div>

      <div className="not-prose mt-8 p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h3 className="text-xl font-bold mb-2">Need Help?</h3>
        <p className="mb-4 opacity-90">
          If you encounter issues during installation, check our troubleshooting guide or visit our GitHub repository.
        </p>
        <a
          href="https://github.com/Cloud-Council/pulsimo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-cyan-600 font-semibold hover:bg-slate-50 transition-colors"
        >
          <Code2 className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </div>
  )
}
