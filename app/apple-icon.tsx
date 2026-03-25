import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ fontSize: 80, background: '#0e0b08', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', fontWeight: 700, borderRadius: 32 }}>
        BK
      </div>
    ),
    { ...size }
  )
}
