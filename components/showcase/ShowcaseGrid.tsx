'use client'

import { useState, useEffect, useRef } from 'react'
import { projects, categoryLabels, type Project, type ProjectCategory } from './data'

// ── 12-col grid placements ─────────────────────────────────────────
const gridConfig: Record<string, { className: string; maxH?: string; isHero?: boolean }> = {
  synchub:            { className: 'col-span-12 md:col-span-7 md:row-span-2', maxH: '520px', isHero: true },
  'skyguard-hq':      { className: 'col-span-12 md:col-span-5' },
  'buildkit-crm':     { className: 'col-span-12 md:col-span-5' },
  'ticket-hub':       { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '300px' },
  'virasat-jewels':   { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '300px' },
  'trock-website':    { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '300px' },
  'skyguard-website': { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '260px' },
  fencetastic:        { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '260px' },
  'booth-plug':       { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '260px' },
  'buildkit-labs':    { className: 'col-span-12 md:col-span-12', maxH: '260px' },
}

// ── Accent glow colors ─────────────────────────────────────────────
const accentGlows: Record<string, string> = {
  synchub: '#10B981', 'skyguard-hq': '#38BDF8', 'buildkit-crm': '#EAB308',
  'ticket-hub': '#F97316', 'virasat-jewels': '#8B5CF6', 'trock-website': '#EF4444',
  'skyguard-website': '#06B6D4', fencetastic: '#9CA3AF', 'booth-plug': '#DAA520',
  'buildkit-labs': '#d97706',
}

const categoryDotColors: Record<ProjectCategory, string> = {
  platform: '#10B981', website: '#3B82F6', tool: '#F59E0B',
}

// ── NDA Badge ──────────────────────────────────────────────────────
function NdaBadge({ small }: { small?: boolean }) {
  return (
    <div className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 ${small ? 'px-2 py-0.5' : 'px-3 py-1.5'}`}>
      <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span className={`text-white/70 ${small ? 'text-[9px]' : 'text-xs'}`}>NDA</span>
    </div>
  )
}

// ── Bento Card ─────────────────────────────────────────────────────
function BentoCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const config = gridConfig[project.id] ?? { className: 'col-span-12 sm:col-span-6 md:col-span-4', maxH: '260px' }
  const isHero = (config as typeof gridConfig[string]).isHero
  const glow = accentGlows[project.id] ?? project.accent

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // ── Hero card: split layout (screenshot top, content bottom) ──
  if (isHero) {
    return (
      <div
        ref={ref}
        className={`group relative rounded-2xl cursor-pointer overflow-hidden flex flex-col
          transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
          ${config.className}
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
        style={{
          maxHeight: config.maxH,
          transitionDelay: `${index * 50}ms`,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
        aria-label={`View ${project.name} project details`}
      >
        {/* Accent glow */}
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-[400ms] pointer-events-none z-10"
          style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)` }}
        />

        {/* Screenshot — fixed height, clipped */}
        <div className="relative flex-shrink-0 h-[280px] overflow-hidden">
          <img
            src={project.screenshot}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(255,255,255,0.03)]" />
          {project.nda && <NdaBadge />}
        </div>

        {/* Content — clean dark surface below */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: glow }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: glow }} />
            </span>
            <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">{project.subtitle}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.name}</h3>
          <p className="text-sm text-white/40 mt-1.5 line-clamp-2 max-w-lg leading-relaxed">{project.description}</p>

          <div className="flex items-center gap-6 mt-3">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-lg font-bold text-white">{m.value}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider ml-1.5">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="bg-white/[0.07] text-white/60 text-[11px] px-2.5 py-1 rounded-md">{t}</span>
            ))}
            {project.tech.length > 5 && (
              <span className="bg-white/[0.07] text-white/30 text-[11px] px-2.5 py-1 rounded-md">+{project.tech.length - 5}</span>
            )}
          </div>
        </div>

        {/* Hover border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-white/10 transition-all duration-[400ms]" />
      </div>
    )
  }

  // ── Standard cards: screenshot top, content bottom ──
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl cursor-pointer overflow-hidden flex flex-col
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
        ${config.className}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{
        maxHeight: config.maxH,
        transitionDelay: `${index * 50}ms`,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* Accent glow */}
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-[400ms] pointer-events-none z-10"
        style={{ background: `radial-gradient(circle, ${(accentGlows[project.id] ?? project.accent)} 0%, transparent 70%)` }}
      />

      {/* Screenshot — fixed height */}
      <div className="relative flex-shrink-0 h-[140px] overflow-hidden">
        <img
          src={project.screenshot}
          alt=""
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[rgba(255,255,255,0.03)]" />
        {project.nda && <NdaBadge small />}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryDotColors[project.category] }} />
          <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">{project.subtitle}</span>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight">{project.name}</h3>

        <div className="flex items-center gap-4 mt-1.5 flex-wrap">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i}>
              <span className="text-sm font-bold text-white">{m.value}</span>
              <span className="text-[9px] text-white/40 uppercase tracking-wider ml-1">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="bg-white/[0.06] text-white/50 text-[10px] px-2 py-0.5 rounded-md">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="bg-white/[0.06] text-white/30 text-[10px] px-2 py-0.5 rounded-md">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-white/10 transition-all duration-[400ms]" />
    </div>
  )
}

// ── Detail Modal ───────────────────────────────────────────────────
function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease]" />
      <div
        className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden animate-[scaleIn_0.25s_ease-out]"
        style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.screenshot} alt={`${project.name} screenshot`} className="w-full max-h-[400px] object-cover" />
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryDotColors[project.category] }} />
            <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">{project.subtitle}</span>
            {project.nda && (
              <span className="ml-2 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-orange-400/80 border border-orange-400/20">NDA</span>
            )}
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">{project.name}</h2>
          <p className="text-base text-white/50 mt-3 leading-relaxed max-w-2xl">{project.description}</p>
          <div className="flex items-center gap-8 mt-6 flex-wrap">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-2xl font-bold text-white">{m.value}</span>
                <span className="text-xs text-white/40 uppercase tracking-wider ml-2">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <span key={t} className="bg-white/[0.06] text-white/60 text-sm px-3 py-1.5 rounded-lg">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-8">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm">
                Visit Live Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            <button onClick={onClose} className="px-6 py-3 text-sm text-white/40 hover:text-white transition-colors">&larr; Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Grid ──────────────────────────────────────────────────────
export default function ShowcaseGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  const categories: Array<ProjectCategory | 'all'> = ['all', 'platform', 'website', 'tool']

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#09090b',
        backgroundImage: `
          radial-gradient(ellipse at 70% 20%, rgba(59,130,246,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 30% 80%, rgba(168,85,247,0.06) 0%, transparent 50%),
          radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 24px 24px',
      }}
    >
      {/* ── Header ── */}
      <div className="pt-16 pb-10 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
          <span className="text-[11px] tracking-[0.3em] text-white/40 uppercase font-mono">Portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          <span className="text-white">What we&apos;ve</span><br />
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">built.</span>
        </h1>

        <p className="text-lg text-white/50 mt-4 max-w-xl leading-relaxed">
          Platforms, automations, and websites — from construction middleware to e-commerce storefronts.
        </p>

        <div className="flex gap-2 mt-8 flex-wrap">
          {categories.map((cat) => {
            const active = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${active ? 'bg-white text-black font-semibold' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'}
                `}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-12 gap-3">
          {filtered.map((project, i) => (
            <BentoCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 text-sm">No projects in this category.</div>
        )}
      </div>

      {selectedProject && <DetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
