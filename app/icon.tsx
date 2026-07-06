import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#EFEEE9',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Miniature drafting mark: framed sheet, plan cross, hi-vis block */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* faint plan lines crossing at the block corner */}
          <path d="M4 12H28M12 4V28" stroke="#BEB9AB" strokeWidth="1" />
          {/* framed drafting sheet */}
          <rect x="4" y="4" width="24" height="24" stroke="#1A1915" strokeWidth="2.5" />
          {/* hi-vis fill block */}
          <rect x="12" y="12" width="8" height="8" fill="#E4551E" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
