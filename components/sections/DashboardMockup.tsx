import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Bell,
  Box,
  Calendar,
  ChevronDown,
  Cpu,
  FileText,
  Globe,
  HardDrive,
  LayoutGrid,
  LineChart,
  MemoryStick,
  Home,
  Network,
  Search,
  Server,
  Settings,
  ShipWheel,
} from 'lucide-react'
import { LogoMark } from '@/components/Logo'
import { cn } from '@/lib/utils'

// A static, illustrative Pulsimo dashboard drawn in HTML/SVG so it stays crisp and follows the theme.

const sidebar = [
  { icon: Home, label: 'Overview', active: true },
  { icon: Globe, label: 'Endpoints' },
  { icon: Server, label: 'Infrastructure' },
  { icon: ShipWheel, label: 'Kubernetes' },
  { icon: LineChart, label: 'Metrics' },
  { icon: FileText, label: 'Logs' },
  { icon: Bell, label: 'Alerts' },
]

const stats = [
  { icon: Activity, label: 'Endpoints', value: '12/12' },
  { icon: Server, label: 'Infrastructure', value: '8/8' },
  { icon: ShipWheel, label: 'Kubernetes', value: '6/6' },
  { icon: LayoutGrid, label: 'Services', value: '4/4' },
]

const logs = [
  { level: 'INFO', time: '15:18:42', msg: '[api] request completed 200 GET /health', src: 'frontend', tone: 'bg-sky-600' },
  { level: 'WARN', time: '15:17:33', msg: '[worker] high memory usage (78%)', src: 'worker-1', tone: 'bg-amber-600' },
  { level: 'ERROR', time: '15:16:21', msg: '[k8s] pod restarted: frontend-6f7d9f', src: 'kubernetes', tone: 'bg-rose-600' },
  { level: 'INFO', time: '15:15:03', msg: '[db] connection pool healthy', src: 'postgres', tone: 'bg-sky-600' },
]

const infra = [
  { icon: Cpu, label: 'CPU Usage', value: '33%', seed: 1 },
  { icon: MemoryStick, label: 'Memory Usage', value: '58%', seed: 2 },
  { icon: HardDrive, label: 'Disk Usage', value: '41%', seed: 3 },
  { icon: Network, label: 'Network I/O', value: '12.4 MB/s', seed: 4 },
]

const nodes = [
  { name: 'control-plane', pods: '3 pods' },
  { name: 'worker-1', pods: '5 pods' },
  { name: 'worker-2', pods: '5 pods' },
]

// Deterministic wavy series so server and client render the same path
function series(points: number, base: number, amp: number, seed: number, spikeAt?: number) {
  return Array.from({ length: points }, (_, i) => {
    const t = i / (points - 1)
    let v = base + Math.sin(i * 0.55 + seed) * amp + Math.sin(i * 1.7 + seed * 2) * amp * 0.35
    if (spikeAt !== undefined) v += Math.exp(-((t - spikeAt) ** 2) / 0.0025) * amp * 3.2
    return v
  })
}

function toPath(values: number[], width: number, height: number, max: number) {
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width
      const y = height - (v / max) * height
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

const W = 400
const H = 110
const p99 = series(40, 62, 10, 1, 0.8)
const p90 = series(40, 40, 7, 3)
const p50 = series(40, 22, 4, 5)

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white p-3 sm:p-4 dark:border-white/[0.07] dark:bg-white/[0.025]',
        className
      )}
    >
      {children}
    </div>
  )
}

function Sparkline({ seed }: { seed: number }) {
  const values = series(16, 20, 6, seed)
  return (
    <svg viewBox="0 0 90 32" className="h-7 w-20 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden="true">
      <path d={toPath(values, 90, 32, 40)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export default function DashboardMockup() {
  return (
    <div
      role="img"
      aria-label="Pulsimo overview dashboard showing healthy endpoints, request latency, uptime, a Kubernetes cluster, recent logs and infrastructure usage"
      className="relative rounded-[22px] border border-slate-200 bg-white/90 p-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 sm:rounded-[28px] sm:p-2"
      style={{
        boxShadow:
          '0 0 0 1px color-mix(in srgb, var(--glow) 35%, transparent), 0 -10px 60px -20px var(--glow), 0 30px 80px -30px color-mix(in srgb, var(--glow) 60%, transparent)',
      }}
    >
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 text-left dark:border-white/[0.06] dark:bg-[#05050a] sm:rounded-[22px]">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-slate-200 p-4 dark:border-white/[0.06] lg:flex">
          <div className="flex items-center gap-2 px-2 pb-6 pt-1">
            <LogoMark className="h-5 w-7" />
            <span className="text-lg font-bold text-slate-900 dark:text-white">Pulsimo</span>
          </div>
          <ul className="space-y-1">
            {sidebar.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-[13px]',
                  active
                    ? 'bg-violet-600/10 font-semibold text-violet-700 ring-1 ring-inset ring-violet-500/20 dark:bg-violet-500/15 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-auto rounded-xl border border-slate-200 bg-white p-3 dark:border-white/[0.07] dark:bg-white/[0.03]">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="animate-blink h-2 w-2 rounded-full bg-emerald-500" />
              All systems operational
            </div>
            <p className="mt-1 pl-4 text-[11px] text-slate-500">Last updated 2m ago</p>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 space-y-3 p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-500">
              <Search className="h-3.5 w-3.5" /> Search anything...
            </div>
            <div className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-300 sm:flex">
              <Calendar className="h-3.5 w-3.5" /> Last 1 hour <ChevronDown className="h-3.5 w-3.5" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 dark:border-white/[0.07] dark:bg-white/[0.03] dark:text-slate-400">
              <Settings className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <Card key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/15 to-cyan-500/15 text-cyan-600 ring-1 ring-inset ring-cyan-500/20 dark:text-cyan-300 sm:h-10 sm:w-10">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">{value}</p>
                  <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">Healthy</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.5fr_0.7fr_1fr]">
            {/* Latency chart */}
            <Card>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-white">
                  <Activity className="h-3.5 w-3.5 text-violet-500" /> Request Latency
                </p>
                <div className="flex gap-3 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-violet-400" />p50</span>
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" />p90</span>
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />p99</span>
                </div>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-32 w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="mock-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#a855f7" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75].map((f) => (
                  <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} className="stroke-slate-200 dark:stroke-white/[0.06]" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                ))}
                <path d={`${toPath(p99, W, H, 120)} L${W},${H} L0,${H} Z`} fill="url(#mock-area)" />
                <path d={toPath(p99, W, H, 120)} fill="none" stroke="#d946ef" strokeWidth="2" vectorEffect="non-scaling-stroke" className="animate-draw" style={{ '--len': 1400 } as React.CSSProperties} />
                <path d={toPath(p90, W, H, 120)} fill="none" stroke="#22d3ee" strokeWidth="2" vectorEffect="non-scaling-stroke" className="animate-draw" style={{ '--len': 1400 } as React.CSSProperties} />
                <path d={toPath(p50, W, H, 120)} fill="none" stroke="#a78bfa" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="animate-draw" style={{ '--len': 1400 } as React.CSSProperties} />
              </svg>
              <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-400 dark:text-slate-500">
                {['14:20', '14:30', '14:40', '14:50', '15:00', '15:10', '15:20'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Card>

            {/* Uptime + latency */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              <Card>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Uptime</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">99.98%</p>
                  <span className="flex items-center text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <ArrowUp className="h-3 w-3" />0.02%
                  </span>
                </div>
              </Card>
              <Card>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Avg Latency</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">128ms</p>
                  <span className="flex items-center text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <ArrowDown className="h-3 w-3" />32%
                  </span>
                </div>
              </Card>
            </div>

            {/* Kubernetes */}
            <Card className="hidden md:col-span-2 md:block xl:col-span-1">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-white">
                  <ShipWheel className="h-3.5 w-3.5 text-fuchsia-500" /> Kubernetes Cluster
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Healthy</span>
                </p>
                <span className="flex items-center gap-1 text-[10px] text-slate-500">View all <ArrowRight className="h-3 w-3" /></span>
              </div>
              <div className="relative mt-3 flex items-center gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_0_30px_-2px] shadow-blue-500/60">
                  <ShipWheel className="h-6 w-6" />
                </div>
                <svg viewBox="0 0 40 120" className="h-[132px] w-10 shrink-0" preserveAspectRatio="none" aria-hidden="true">
                  {[18, 60, 102].map((y) => (
                    <path key={y} d={`M0,60 C20,60 20,${y} 40,${y}`} fill="none" stroke="#d946ef" strokeOpacity="0.7" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  ))}
                </svg>
                <ul className="flex-1 space-y-2">
                  {nodes.map((n) => (
                    <li key={n.name} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 dark:border-white/[0.07] dark:bg-white/[0.03]">
                      <Box className="h-4 w-4 shrink-0 text-cyan-500" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11px] font-medium text-slate-800 dark:text-white">{n.name}</span>
                        <span className="block text-[10px] text-slate-500">{n.pods}</span>
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.2fr_1fr]">
            {/* Logs */}
            <Card>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-white">
                  <FileText className="h-3.5 w-3.5 text-cyan-500" /> Recent Logs
                </p>
                <span className="flex items-center gap-1 text-[10px] text-slate-500">View all <ArrowRight className="h-3 w-3" /></span>
              </div>
              <ul className="mt-3 divide-y divide-slate-100 dark:divide-white/[0.05]">
                {logs.map((l) => (
                  <li key={l.time} className="flex items-center gap-3 py-1.5 text-[11px]">
                    <span className={cn('w-12 shrink-0 rounded px-1.5 py-0.5 text-center text-[9px] font-bold text-white', l.tone)}>{l.level}</span>
                    <span className="hidden shrink-0 font-mono text-slate-500 sm:inline">{l.time}</span>
                    <span className="min-w-0 flex-1 truncate font-mono text-slate-700 dark:text-slate-300">{l.msg}</span>
                    <span className="hidden shrink-0 text-slate-500 md:inline">{l.src}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Infrastructure */}
            <Card>
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-white">
                <Server className="h-3.5 w-3.5 text-violet-500" /> Infrastructure
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {infra.map(({ icon: Icon, label, value, seed }) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-white/[0.07] dark:bg-white/[0.03]">
                    <Icon className="h-4 w-4 shrink-0 text-violet-500 dark:text-violet-400" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[10px] text-slate-500">{label}</span>
                      <span className="block text-xs font-semibold text-slate-900 dark:text-white">{value}</span>
                    </span>
                    <span className="hidden sm:block">
                      <Sparkline seed={seed} />
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
