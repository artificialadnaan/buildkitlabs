'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { projects, categoryLabels, type Project, type ProjectCategory } from './data'

// ── Grid config ────────────────────────────────────────────────────
// Row 1: hero (7) + 2 text-only stacked (5)
// Row 2: ticket-hub (5) + virasat (4) + trock-website (3)
// Row 3: skyguard-website (3) + fencetastic (5) + booth-plug (4)
// Row 4: buildkit-labs (4) — sits left-aligned
const gridConfig: Record<string, {
  className: string
  imgH: string
  isHero?: boolean
  wide?: boolean
  textOnly?: boolean
}> = {
  synchub:            { className: 'col-span-12 md:col-span-7 md:row-span-2', imgH: '280px', isHero: true },
  'skyguard-hq':      { className: 'col-span-12 sm:col-span-6 md:col-span-5', imgH: '0', textOnly: true },
  'buildkit-crm':     { className: 'col-span-12 sm:col-span-6 md:col-span-5', imgH: '0', textOnly: true },
  'ticket-hub':       { className: 'col-span-12 sm:col-span-6 md:col-span-5', imgH: '160px', wide: true },
  'virasat-jewels':   { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '170px' },
  'trock-website':    { className: 'col-span-12 sm:col-span-6 md:col-span-3', imgH: '140px' },
  'skyguard-website': { className: 'col-span-12 sm:col-span-6 md:col-span-3', imgH: '150px' },
  fencetastic:        { className: 'col-span-12 sm:col-span-6 md:col-span-5', imgH: '170px', wide: true },
  'booth-plug':       { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
  'buildkit-labs':    { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '150px' },
}

// ── NDA Badge ──────────────────────────────────────────────────────
function NdaBadge({ small }: { small?: boolean }) {
  return (
    <div className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-stone-900/80 backdrop-blur-sm rounded-lg border border-stone-700/50 ${small ? 'px-2 py-0.5' : 'px-3 py-1.5'}`}>
      <svg className="w-3 h-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span className={`text-stone-400 ${small ? 'text-[9px]' : 'text-xs'}`}>NDA</span>
    </div>
  )
}

// ── hex to rgb helper ──────────────────────────────────────────────
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

// ── Text-Only Card (for login-page projects) ───────────────────────
function TextOnlyCard({ project, index, visible, onClick }: {
  project: Project; index: number; visible: boolean; onClick: () => void
}) {
  const config = gridConfig[project.id]!
  return (
    <div
      className={`group relative rounded-xl cursor-pointer overflow-hidden flex flex-col justify-between
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5
        ${config.className}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{
        transitionDelay: `${index * 50}ms`,
        background: `linear-gradient(135deg, rgba(${hexToRgb(project.accent)},0.08) 0%, rgba(${hexToRgb(project.accent)},0.02) 100%)`,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* Accent bar — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl" style={{ backgroundColor: project.accent }} />

      <div className="p-5 pl-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
          <span className="text-[10px] tracking-wider text-stone-500 uppercase">{project.subtitle}</span>
          {project.nda && (
            <span className="ml-auto px-2 py-0.5 rounded text-[9px] text-stone-500 border border-stone-700/50 uppercase tracking-wider">NDA</span>
          )}
        </div>

        <h3 className="text-lg font-bold text-stone-100 tracking-tight">{project.name}</h3>
        <p className="text-[12px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">{project.description}</p>

        {/* Lead with the big metric */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-stone-100">{project.metrics[0].value}</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-wider ml-1.5">{project.metrics[0].label}</span>
        </div>

        <div className="flex items-center gap-4 mt-1.5">
          {project.metrics.slice(1).map((m, i) => (
            <div key={i}>
              <span className="text-sm font-bold text-stone-300">{m.value}</span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider ml-1">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="bg-stone-800/60 text-stone-500 text-[10px] px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-stone-700/50 transition-all duration-[400ms]" />
    </div>
  )
}

// ── Bento Card ─────────────────────────────────────────────────────
function BentoCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const config = gridConfig[project.id] ?? { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '140px' }

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

  if (config.textOnly) {
    return <div ref={ref}><TextOnlyCard project={project} index={index} visible={visible} onClick={onClick} /></div>
  }

  if (config.isHero) {
    return (
      <div
        ref={ref}
        className={`group relative rounded-xl cursor-pointer overflow-hidden flex flex-col
          transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-0.5
          ${config.className}
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
        style={{
          maxHeight: '520px',
          transitionDelay: `${index * 50}ms`,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
        aria-label={`View ${project.name} project details`}
      >
        <div className="relative flex-shrink-0 h-[280px] overflow-hidden">
          <img src={project.screenshot} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[#0e0b08]" />
          {project.nda && <NdaBadge />}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-[10px] tracking-wider text-stone-500 uppercase">{project.subtitle}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">{project.name}</h3>
          <p className="text-sm text-stone-500 mt-1.5 line-clamp-2 max-w-lg leading-relaxed">{project.description}</p>
          <div className="flex items-center gap-6 mt-3">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-lg font-bold text-stone-100">{m.value}</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider ml-1.5">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="bg-stone-800/60 text-stone-500 text-[11px] px-2.5 py-1 rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-stone-700/50 transition-all duration-[400ms]" />
      </div>
    )
  }

  // ── Standard cards ──
  const isWide = config.wide
  const imgHeight = config.imgH ?? '140px'

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl cursor-pointer overflow-hidden flex flex-col
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5
        ${config.className}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{
        transitionDelay: `${index * 50}ms`,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: imgHeight }}>
        <img src={project.screenshot} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#0e0b08]/80" />
        {project.nda && <NdaBadge small />}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
          <span className="text-[10px] tracking-wider text-stone-500 uppercase">{project.subtitle}</span>
        </div>
        <h3 className="text-lg font-bold text-stone-100 tracking-tight">{project.name}</h3>
        <p className="text-[12px] text-stone-600 mt-1 line-clamp-1 leading-relaxed">{project.description}</p>
        <div className="flex items-center gap-4 mt-2 flex-wrap">
          {project.metrics.slice(0, isWide ? 3 : 2).map((m, i) => (
            <div key={i}>
              <span className="text-sm font-bold text-stone-200">{m.value}</span>
              <span className="text-[9px] text-stone-500 uppercase tracking-wider ml-1">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.slice(0, isWide ? 4 : 3).map((t) => (
            <span key={t} className="bg-stone-800/60 text-stone-500 text-[10px] px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-stone-700/50 transition-all duration-[400ms]" />
    </div>
  )
}

// ── Detail Modal ───────────────────────────────────────────────────
function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleEsc) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease]" />
      <div
        className="relative z-10 max-w-4xl w-full rounded-xl overflow-hidden animate-[scaleIn_0.25s_ease-out]"
        style={{ background: '#1a1410', border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.screenshot} alt={`${project.name} screenshot`} className="w-full max-h-[400px] object-cover" />
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-[10px] tracking-wider text-stone-500 uppercase">{project.subtitle}</span>
            {project.nda && (
              <span className="ml-2 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-primary-500/80 border border-primary-600/20">NDA</span>
            )}
          </div>
          <h2 className="text-4xl font-bold text-stone-100 tracking-tight">{project.name}</h2>
          <p className="text-base text-stone-400 mt-3 leading-relaxed max-w-2xl">{project.description}</p>
          <div className="flex items-center gap-8 mt-6 flex-wrap">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-2xl font-bold text-stone-100">{m.value}</span>
                <span className="text-xs text-stone-500 uppercase tracking-wider ml-2">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <span key={t} className="bg-stone-800/60 text-stone-400 text-sm px-3 py-1.5 rounded-lg">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-8">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-dark-950 font-semibold px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors text-sm">
                Visit Live Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            <button onClick={onClose} className="px-6 py-3 text-sm text-stone-500 hover:text-stone-200 transition-colors">&larr; Back</button>
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
  const [filterKey, setFilterKey] = useState(0)

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  const categories: Array<ProjectCategory | 'all'> = ['all', 'platform', 'website', 'tool']

  const handleFilter = (cat: ProjectCategory | 'all') => {
    setFilter(cat)
    setFilterKey(k => k + 1)
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Warm amber wash */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse at 70% 20%, rgba(217,119,6,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 30% 80%, rgba(217,119,6,0.03) 0%, transparent 50%)
        `,
      }} />
      {/* Blueprint grid */}
      <div className="fixed inset-0 blueprint-bg opacity-40 pointer-events-none" />

      <div className="relative z-10">
        {/* ── Header ── */}
        <div className="pt-24 pb-10 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-stone-100">What we&apos;ve</span><br />
            <span className="text-primary-500">built.</span>
          </h1>

          <p className="text-lg text-stone-400 mt-4 max-w-xl leading-relaxed">
            Platforms, automations, and websites — from construction middleware to e-commerce storefronts.
          </p>

          <div className="flex gap-2 mt-8 flex-wrap">
            {categories.map((cat) => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${active
                      ? 'bg-primary-600 text-dark-950 font-semibold'
                      : 'bg-stone-800/50 text-stone-500 hover:bg-stone-800 hover:text-stone-300 border border-stone-800'
                    }
                  `}
                >
                  {cat === 'all' ? 'All' : categoryLabels[cat]}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div key={filterKey} className="grid grid-cols-12 gap-3 animate-[fadeIn_0.25s_ease-out]">
            {filtered.map((project, i) => (
              <BentoCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-600 text-sm">No projects in this category.</div>
          )}
        </div>

        {/* ── CTA Section ── */}
        <section className="relative overflow-hidden border-t border-stone-800/60 mt-12">
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20 md:py-28">
            <div className="w-12 h-px bg-primary-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-stone-100 tracking-tight leading-tight mb-4">
              Ready to build<br />something that lasts?
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-md mx-auto leading-relaxed">
              One call — no pitch deck, no runaround. Let&apos;s talk through your operations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
        </section>
      </div>

      {selectedProject && <DetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
