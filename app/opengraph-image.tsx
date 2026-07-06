import { ImageResponse } from 'next/og'

export const alt = 'BuildKit Labs — we build software that works'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  // Faint engineering grid drawn as a single layered path.
  const lines: string[] = []
  for (let x = 40; x < 1200; x += 40) lines.push(`M${x} 0V630`)
  for (let y = 40; y < 630; y += 40) lines.push(`M0 ${y}H1200`)
  const grid = lines.join(' ')

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#EFEEE9',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* engineering grid */}
        <svg width="1200" height="630" style={{ position: 'absolute', top: 0, left: 0 }}>
          <path d={grid} stroke="#D5D2C8" strokeWidth="1" fill="none" />
        </svg>

        {/* drawing border frame */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: '1px solid #BEB9AB',
            display: 'flex',
          }}
        />

        {/* content */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '70px 84px',
          }}
        >
          {/* top row: mark + wordmark / drawing number */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
                <rect x="3.5" y="3.5" width="33" height="33" stroke="#1A1915" strokeWidth="1.5" />
                <path d="M3.5 14H36.5M14 3.5V36.5" stroke="#8B887C" strokeWidth="1" />
                <path d="M14 14L36.5 36.5" stroke="#BEB9AB" strokeWidth="1" />
                <rect x="14" y="14" width="10.5" height="10.5" fill="#E4551E" />
                <path d="M20 0.5V3M20 37V39.5M0.5 20H3M37 20H39.5" stroke="#1A1915" strokeWidth="1.5" />
              </svg>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  marginLeft: 18,
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                <span style={{ color: '#1A1915' }}>Build</span>
                <span style={{ color: '#E4551E' }}>Kit</span>
                <span style={{ color: '#1A1915' }}>&nbsp;Labs</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', fontSize: 13, letterSpacing: '0.2em', color: '#67655C' }}>
                DWG. BKL-000
              </div>
              <div style={{ display: 'flex', marginTop: 6, fontSize: 13, letterSpacing: '0.2em', color: '#8B887C' }}>
                REV. 01 · SHEET 01/01
              </div>
            </div>
          </div>

          {/* middle: kicker + headline + hi-vis rule */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  color: '#E4551E',
                  border: '1px solid #BEB9AB',
                  padding: '3px 7px',
                }}
              >
                01
              </div>
              <div style={{ display: 'flex', marginLeft: 12, fontSize: 13, letterSpacing: '0.22em', color: '#67655C' }}>
                DALLAS–FORT WORTH · SOFTWARE STUDIO
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 26,
                maxWidth: 820,
                fontSize: 80,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.04,
                color: '#1A1915',
              }}
            >
              We build software that works.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
              <div style={{ width: 14, height: 2, background: '#1A1915' }} />
              <div style={{ width: 104, height: 5, background: '#E4551E', marginLeft: 2 }} />
            </div>
          </div>

          {/* bottom title block */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #1A1915',
                paddingTop: 20,
              }}
            >
              <div style={{ display: 'flex', fontSize: 13, letterSpacing: '0.18em', color: '#514D43' }}>
                CUSTOM SOFTWARE · WEB · ADVISORY
              </div>
              <div style={{ display: 'flex', fontSize: 13, letterSpacing: '0.18em', color: '#514D43' }}>
                BUILDKITLABS.COM
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
