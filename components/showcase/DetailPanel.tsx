'use client'

import { useEffect, useCallback } from 'react'
import { X, ArrowUpRight, ArrowLeft, Lock } from '@phosphor-icons/react'
import { DimLabel } from '@/components/technical/marks'
import { categoryLabels, type Project } from './data'

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

  if (mobile) {
    return (
      <>
        <div className="fixed inset-0 bg-ink/40 z-[100] animate-[fadeIn_0.2s_ease]" onClick={onClose} />
        <div className="fixed bottom-0 left-0 w-full max-h-[85vh] overflow-y-auto z-[101] animate-[slideUp_0.4s_ease-out] bg-paper-50 border-t border-ink">
          <div className="w-12 h-1 rounded-full mx-auto mt-3 mb-1 bg-line-strong" />
          <PanelContent project={project} onClose={onClose} />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-[100] animate-[fadeIn_0.3s_ease]" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[520px] max-w-[92vw] overflow-y-auto z-[101] animate-[slideInRight_0.5s_ease-out] bg-paper-50 border-l border-ink shadow-sheet">
        <PanelContent project={project} onClose={onClose} />
      </div>
    </>
  )
}

function PanelContent({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div>
      {/* ── Title block ── */}
      <div className="sticky top-0 z-10 bg-paper-50 border-b border-ink px-5 py-3 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <DimLabel>Project · {project.nda ? 'Classified' : 'Active'}</DimLabel>
          <h2 className="text-xl font-bold text-ink tracking-tight mt-1 truncate">{project.name}</h2>
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-400 mt-0.5 truncate">{project.subtitle}</div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close panel"
          className="inline-flex items-center justify-center w-8 h-8 border border-line text-ink-500 hover:text-ink hover:border-ink transition-colors shrink-0"
        >
          <X size={16} weight="bold" />
        </button>
      </div>

      <div className="p-5">
        {/* ── Category chip ── */}
        <div className="mb-5">
          <span className="font-mono text-[10px] uppercase tracking-wide text-primary-600 border border-primary-200 px-2 py-0.5 bg-primary-50">
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* ── Metrics ── */}
        <div className="grid grid-cols-3 border border-line divide-x divide-line mb-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-3 text-center">
              <div className="text-lg font-bold text-ink tabular">{m.value}</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* ── Overview ── */}
        <div className="mb-6">
          <DimLabel>Overview</DimLabel>
          <p className="text-sm text-ink-500 leading-relaxed mt-2 pl-3 border-l border-line">{project.description}</p>
        </div>

        {/* ── Screenshot viewport ── */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-3 py-2 border border-line border-b-0 bg-paper-100">
            <DimLabel>Fig. 01 · Visual</DimLabel>
            <DimLabel>Screenshot</DimLabel>
          </div>
          <div className="border border-line bg-paper-100 overflow-hidden">
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

        {/* ── Stack ── */}
        <div className="mb-6">
          <DimLabel>Stack</DimLabel>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[11px] uppercase tracking-wide text-ink-600 border border-line px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── NDA notice ── */}
        {project.nda && (
          <div className="mb-6 flex items-center gap-2 border border-line bg-paper-100 px-3 py-2">
            <Lock size={14} weight="bold" className="text-ink-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">Classified — under NDA</span>
          </div>
        )}

        {/* ── Actions ── */}
        <div className="flex items-center gap-3 pt-5 border-t border-line">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press text-sm"
            >
              Visit live site
              <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-ink-500 hover:text-ink font-medium transition-colors"
          >
            <ArrowLeft size={15} weight="bold" /> Return
          </button>
        </div>

        {/* ── Footer status ── */}
        <div className="mt-6 pt-3 border-t border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">Sheet ready</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">
            BK-{project.id.toUpperCase().slice(0, 6)}
          </span>
        </div>
      </div>
    </div>
  )
}
