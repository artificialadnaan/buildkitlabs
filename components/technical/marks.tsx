import { ReactNode } from 'react'

/**
 * Shared "engineering drawing" primitives.
 * Server components — safe to render anywhere.
 */

/* Brand mark — a drafting plan-view glyph: framed sheet, plan lines,
   a hi-vis fill block and registration ticks. */
export function Logo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="33" height="33" stroke="#1A1915" strokeWidth="1.5" />
      <path d="M3.5 14H36.5M14 3.5V36.5" stroke="#1A1915" strokeWidth="1" opacity="0.45" />
      <path d="M14 14L36.5 36.5" stroke="#1A1915" strokeWidth="1" opacity="0.35" />
      <rect x="14" y="14" width="10.5" height="10.5" fill="#E4551E" />
      <path d="M20 0.5V3M20 37V39.5M0.5 20H3M37 20H39.5" stroke="#1A1915" strokeWidth="1.5" />
    </svg>
  )
}

/* Full lockup used in header / footer */
export function Wordmark({ className = '', markClass = 'w-8 h-8' }: { className?: string; markClass?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Logo className={markClass} />
      <span className="font-display text-[17px] font-bold tracking-tight text-ink leading-none">
        Build<span className="text-primary-600">Kit</span>&nbsp;Labs
      </span>
    </span>
  )
}

/* Section kicker — a boxed part-number + mono label, the recurring
   "figure reference" that threads the drawing metaphor through the site. */
export function Kicker({
  index,
  children,
  rule = false,
  className = '',
}: {
  index: string
  children: ReactNode
  rule?: boolean
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-[11px] font-medium text-primary-600 border border-line-strong px-1.5 py-[3px] tabular tracking-widest leading-none">
        {index}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-500 leading-none">
        {children}
      </span>
      {rule && <span className="h-px flex-1 bg-line-strong ml-1" aria-hidden="true" />}
    </div>
  )
}

/* Small monospace coordinate / dimension label */
export function DimLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[10px] uppercase tracking-widest text-ink-400 tabular ${className}`}>
      {children}
    </span>
  )
}

/* Horizontal dimension line with end ticks + centered label */
export function DimLine({ label, className = '' }: { label?: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-ink-400 ${className}`} aria-hidden="true">
      <span className="w-px h-2.5 bg-current shrink-0" />
      <span className="h-px flex-1 bg-current" />
      {label && <span className="font-mono text-[10px] uppercase tracking-widest tabular whitespace-nowrap px-1">{label}</span>}
      <span className="h-px flex-1 bg-current" />
      <span className="w-px h-2.5 bg-current shrink-0" />
    </div>
  )
}
