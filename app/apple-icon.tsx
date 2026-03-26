import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ background: '#0e0b08', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#d97706', opacity: 0.3 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#d97706', opacity: 0.5 }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#f59e0b', opacity: 0.6 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#f59e0b', opacity: 0.8 }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#d97706', opacity: 0.5 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#f59e0b', opacity: 0.8 }} />
            <div style={{ width: 38, height: 38, borderRadius: 8, background: '#f97316', opacity: 1 }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
