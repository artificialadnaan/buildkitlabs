import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#EFEEE9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Full drafting mark: framed sheet, plan lines, hi-vis block, registration ticks */}
        <svg width="104" height="104" viewBox="0 0 40 40" fill="none">
          <rect x="3.5" y="3.5" width="33" height="33" stroke="#1A1915" strokeWidth="1.75" />
          <path d="M3.5 14H36.5M14 3.5V36.5" stroke="#8B887C" strokeWidth="1" />
          <path d="M14 14L36.5 36.5" stroke="#BEB9AB" strokeWidth="1" />
          <rect x="14" y="14" width="10.5" height="10.5" fill="#E4551E" />
          <path d="M20 0.5V3M20 37V39.5M0.5 20H3M37 20H39.5" stroke="#1A1915" strokeWidth="1.75" />
        </svg>

        {/* Mono monogram */}
        <div
          style={{
            display: 'flex',
            marginTop: 16,
            paddingLeft: '0.28em',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.28em',
            color: '#1A1915',
          }}
        >
          BKL
        </div>
      </div>
    ),
    { ...size }
  )
}
