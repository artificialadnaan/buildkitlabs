import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ background: '#0e0b08', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 3, borderRadius: 4 }}>
        {/* 3x3 Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#d97706', opacity: 0.3 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#d97706', opacity: 0.5 }} />
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#d97706', opacity: 0.35 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#f59e0b', opacity: 0.6 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#f59e0b', opacity: 0.8 }} />
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#d97706', opacity: 0.5 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#f59e0b', opacity: 0.8 }} />
            <div style={{ width: 7, height: 7, borderRadius: 1.5, background: '#f97316', opacity: 1 }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
