import { ImageResponse } from 'next/og'

export const alt = 'BuildKit Labs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0e0b08',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* The Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#d97706', opacity: 0.3 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#d97706', opacity: 0.5 }} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f59e0b', opacity: 0.6 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f59e0b', opacity: 0.8 }} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#d97706', opacity: 0.5 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f59e0b', opacity: 0.8 }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#f97316', opacity: 1 }} />
          </div>
        </div>

        <div style={{ fontSize: 56, fontWeight: 800, color: '#f5f5f4', letterSpacing: '-0.02em' }}>
          BuildKit Labs
        </div>
        <div style={{ fontSize: 22, color: '#a8a29e', marginTop: 12, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
          Software + Web Development
        </div>
        <div
          style={{
            width: 80,
            height: 3,
            background: '#d97706',
            borderRadius: 2,
            marginTop: 32,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
