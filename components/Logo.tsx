import { cn } from '@/lib/utils'

// Heartbeat mark used in the nav, footer and dashboard mockup
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="none" aria-hidden="true" className={cn('h-6 w-8', className)}>
      <defs>
        <linearGradient id="pulsimo-mark" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M1 13h6l3-7 4 15 4-18 3.5 10H31"
        stroke="url(#pulsimo-mark)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({ className, beta = true }: { className?: string; beta?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <LogoMark />
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Pulsimo</span>
      {beta && (
        <span className="rounded-md bg-violet-600 px-1.5 py-0.5 text-[10px] font-bold leading-none tracking-wide text-white">
          BETA
        </span>
      )}
    </span>
  )
}
