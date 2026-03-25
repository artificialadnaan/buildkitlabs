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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: '#d97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0e0b08',
              fontSize: 32,
              fontWeight: 700,
              marginRight: 20,
            }}
          >
            BK
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: '#f5f5f4' }}>
            BuildKit Labs
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#a8a29e', maxWidth: 700, textAlign: 'center' }}>
          Custom Software &amp; Web Development
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
