'use client'

import { useEffect, useCallback } from 'react'
import type { Project } from './data'

interface DetailPanelProps {
  project: Project
  onClose: () => void
  mobile?: boolean
}

export default function DetailPanel({ project, onClose, mobile }: DetailPanelProps) {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  const accent = project.accent

  if (mobile) {
    return (
      <>
        <div className="fixed inset-0 bg-black/60 z-[100] animate-[fadeIn_0.2s_ease]" onClick={onClose} />
        <div className="fixed bottom-0 left-0 w-full max-h-[85vh] rounded-t-2xl overflow-y-auto z-[101] animate-[slideUp_0.4s_ease-out]"
          style={{ background: 'rgba(6,12,24,0.92)', backdropFilter: 'blur(24px)', borderTop: `1px solid ${accent}30` }}>
          <div className="w-12 h-1 rounded-full mx-auto mt-3 mb-2" style={{ background: `${accent}40` }} />
          <div className="p-5">
            <HudContent project={project} onClose={onClose} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[100] animate-[fadeIn_0.3s_ease]" onClick={onClose} />
      <div
        className="fixed right-4 top-4 bottom-4 w-[520px] max-w-[92vw] overflow-y-auto z-[101] animate-[slideInRight_0.5s_ease-out] rounded-xl"
        style={{
          background: 'rgba(6,12,24,0.88)',
          backdropFilter: 'blur(24px)',
          border: `1px solid ${accent}25`,
          boxShadow: `0 0 40px ${accent}10, inset 0 0 80px rgba(0,0,0,0.3)`,
          scrollbarWidth: 'thin',
          scrollbarColor: `${accent}20 transparent`,
        }}
      >
        {/* Scan lines overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
        }} />

        <div className="relative z-10 p-6">
          <HudContent project={project} onClose={onClose} />
        </div>
      </div>
    </>
  )
}

function HudContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = project.accent

  return (
    <div style={{ fontFamily: "'DM Sans', 'Courier New', monospace" }}>
      {/* ── HUD Header ── */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[3px] mb-1" style={{ color: `${accent}90` }}>
            System Status //
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: accent }}>
            {project.name.toUpperCase()}
          </h2>
          <div className="text-xs text-white/40 tracking-wider mt-0.5">
            {project.subtitle.toUpperCase()}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[9px] uppercase tracking-[2px] text-white/30">BuildKit Labs</div>
          <div className="text-[9px] uppercase tracking-[2px] mt-0.5" style={{ color: `${accent}70` }}>
            {project.nda ? 'CLASSIFIED' : 'ACTIVE'}
          </div>
        </div>
      </div>

      {/* ── Divider with glow ── */}
      <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, transparent, ${accent}40, transparent)` }} />

      {/* ── Metrics Grid (HUD gauges) ── */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {project.metrics.map((m, i) => (
          <div
            key={i}
            className="relative rounded-lg p-3 text-center overflow-hidden"
            style={{
              background: `${accent}08`,
              border: `1px solid ${accent}18`,
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2" style={{ borderTop: `1px solid ${accent}50`, borderLeft: `1px solid ${accent}50` }} />
            <div className="absolute top-0 right-0 w-2 h-2" style={{ borderTop: `1px solid ${accent}50`, borderRight: `1px solid ${accent}50` }} />
            <div className="absolute bottom-0 left-0 w-2 h-2" style={{ borderBottom: `1px solid ${accent}50`, borderLeft: `1px solid ${accent}50` }} />
            <div className="absolute bottom-0 right-0 w-2 h-2" style={{ borderBottom: `1px solid ${accent}50`, borderRight: `1px solid ${accent}50` }} />

            <div className="text-xl font-extrabold" style={{ color: accent }}>{m.value}</div>
            <div className="text-[8px] text-white/40 uppercase tracking-[1.5px] mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* ── Description Section ── */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
          <span className="text-[10px] uppercase tracking-[2px] text-white/40">Intel Brief</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed pl-4" style={{ borderLeft: `1px solid ${accent}20` }}>
          {project.description}
        </p>
      </div>

      {/* ── Screenshot Section ── */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
          <span className="text-[10px] uppercase tracking-[2px] text-white/40">Visual Feed</span>
        </div>
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: `1px solid ${accent}20` }}
        >
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              const el = e.target as HTMLImageElement
              el.parentElement!.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* ── Tech Stack (System Components) ── */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
          <span className="text-[10px] uppercase tracking-[2px] text-white/40">System Components</span>
        </div>
        <div className="flex flex-wrap gap-2 pl-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded text-[11px] font-medium"
              style={{
                background: `${accent}10`,
                border: `1px solid ${accent}20`,
                color: `${accent}cc`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── NDA Badge ── */}
      {project.nda && (
        <div className="mb-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/8 border border-red-500/15">
          <svg className="w-3.5 h-3.5 text-red-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[10px] uppercase tracking-[2px] text-red-400/80">Classified — Under NDA</span>
        </div>
      )}

      {/* ── Divider ── */}
      <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, transparent, ${accent}25, transparent)` }} />

      {/* ── Action Buttons ── */}
      <div className="flex items-center gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${accent}dd, ${accent}99)`,
              color: '#0a1628',
              boxShadow: `0 0 20px ${accent}30`,
            }}
          >
            Access Platform
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        <button
          onClick={onClose}
          className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ color: `${accent}80`, border: `1px solid ${accent}18` }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}40`)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = `${accent}18`)}
        >
          &larr; Return
        </button>
      </div>

      {/* ── Bottom status bar ── */}
      <div className="mt-6 pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${accent}12` }}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] text-white/25 uppercase tracking-[2px]">System Online</span>
        </div>
        <span className="text-[9px] uppercase tracking-[2px]" style={{ color: `${accent}40` }}>
          BK-{project.id.toUpperCase().slice(0, 6)}
        </span>
      </div>
    </div>
  )
}
