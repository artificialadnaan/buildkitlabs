/**
 * Decorative site-plan blueprint — ink linework on transparent paper,
 * one hi-vis fill zone. Used as the hero's technical centerpiece.
 */
export default function BlueprintPlan({ className = '' }: { className?: string }) {
  const ink = '#1A1915'
  const mute = '#8B887C'
  const hi = '#E4551E'
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      className={className}
      role="img"
      aria-label="Stylized construction site plan drawing"
      style={{ fontFamily: 'var(--font-mono), monospace' }}
    >
      {/* plot boundary — dashed property line */}
      <rect x="24" y="24" width="372" height="316" stroke={ink} strokeWidth="1" strokeDasharray="6 5" opacity="0.55" />

      {/* inner grid ticks along top */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`t${i}`} x1={48 + i * 30} y1="24" x2={48 + i * 30} y2="31" stroke={mute} strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`l${i}`} x1="24" y1={54 + i * 28} x2="31" y2={54 + i * 28} stroke={mute} strokeWidth="1" />
      ))}

      {/* Building A — main footprint (hi-vis) */}
      <rect x="60" y="80" width="150" height="118" fill={hi} fillOpacity="0.10" stroke={hi} strokeWidth="1.75" />
      <line x1="60" y1="118" x2="210" y2="118" stroke={hi} strokeWidth="1" opacity="0.5" />
      <line x1="110" y1="80" x2="110" y2="198" stroke={hi} strokeWidth="1" opacity="0.5" />
      <text x="70" y="100" fill={hi} fontSize="11" fontWeight="600" letterSpacing="1">BLDG · A</text>
      <text x="70" y="190" fill={ink} fontSize="9" opacity="0.6">DISPATCH + CREW</text>

      {/* Building B — secondary footprint (hatched) */}
      <rect x="244" y="120" width="118" height="150" stroke={ink} strokeWidth="1.5" />
      <path d="M244 120 L362 270 M244 160 L322 270 M244 200 L282 270 M284 120 L362 210 M324 120 L362 158"
        stroke={ink} strokeWidth="0.75" opacity="0.35" />
      <text x="254" y="140" fill={ink} fontSize="11" fontWeight="600" letterSpacing="1">BLDG · B</text>

      {/* connecting run / access road */}
      <path d="M210 150 L244 150" stroke={ink} strokeWidth="1" strokeDasharray="3 3" />

      {/* dimension line — bottom (width) */}
      <g stroke={ink} strokeWidth="1">
        <line x1="60" y1="300" x2="210" y2="300" />
        <line x1="60" y1="295" x2="60" y2="305" />
        <line x1="210" y1="295" x2="210" y2="305" />
      </g>
      <rect x="118" y="292" width="34" height="16" fill="#EFEEE9" />
      <text x="135" y="304" fill={ink} fontSize="10" textAnchor="middle">48′-0″</text>

      {/* dimension line — left (height) */}
      <g stroke={ink} strokeWidth="1">
        <line x1="42" y1="80" x2="42" y2="198" />
        <line x1="37" y1="80" x2="47" y2="80" />
        <line x1="37" y1="198" x2="47" y2="198" />
      </g>
      <text x="42" y="145" fill={ink} fontSize="10" textAnchor="middle" transform="rotate(-90 42 145)">36′-0″</text>

      {/* North arrow */}
      <g transform="translate(360 62)">
        <circle r="20" stroke={ink} strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M0 -13 L5 6 L0 1 L-5 6 Z" fill={ink} />
        <text x="0" y="-24" fill={ink} fontSize="10" fontWeight="600" textAnchor="middle">N</text>
      </g>

      {/* figure tag */}
      <text x="24" y="360" fill={mute} fontSize="10" letterSpacing="1">FIG. A — SITE PLAN · NTS</text>
      <text x="396" y="360" fill={mute} fontSize="10" letterSpacing="1" textAnchor="end">SCALE 1:200</text>
    </svg>
  )
}
