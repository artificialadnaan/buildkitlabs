'use client'

import { useState, useEffect, useRef } from 'react'
import { projects, categoryLabels, type Project, type ProjectCategory } from './data'

// ── Grid placement config ──────────────────────────────────────────
const gridPlacements: Record<string, string> = {
  synchub:         'md:col-span-2 md:row-span-2',
  'buildkit-labs': 'md:col-span-2',
}

// ── Category dot colors ────────────────────────────────────────────
const categoryDotColors: Record<ProjectCategory, string> = {
  platform: '#10B981',
  website:  '#3B82F6',
  tool:     '#F59E0B',
}

// ── Blueprint card styles (shared) ─────────────────────────────────
const blueprintBg = {
  backgroundColor: '#2a5080',
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '20px 20px',
}

// ── Blueprint Card ─────────────────────────────────────────────────
function BlueprintCard({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isHero = project.id === 'synchub'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative rounded cursor-pointer overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/40
        ${gridPlacements[project.id] ?? ''}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{
        ...blueprintBg,
        transitionDelay: `${index * 70}ms`,
        border: '1px solid rgba(255,255,255,0.08)',
        minHeight: isHero ? '420px' : '300px',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* ── Screenshot with blueprint tint ── */}
      <div className="relative overflow-hidden" style={{ height: isHero ? '55%' : '50%' }}>
        <img
          src={project.screenshot}
          alt=""
          className="w-full h-full object-cover object-top opacity-70 transition-opacity duration-300 group-hover:opacity-80"
          style={{ mixBlendMode: 'luminosity' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2a5080]/40 group-hover:bg-[#2a5080]/30 transition-colors duration-300" />
        <div className="absolute inset-2 border border-white/10 rounded-sm pointer-events-none" />

        {/* NDA badge */}
        {project.nda && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/30 backdrop-blur-sm border border-white/10">
            <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[9px] uppercase tracking-[1.5px] text-white/60 font-medium font-mono">NDA</span>
          </div>
        )}
      </div>

      {/* ── Card content ── */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryDotColors[project.category] }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-mono">{project.subtitle}</span>
        </div>

        <h3 className={`font-bold text-white font-mono mb-3 ${isHero ? 'text-2xl' : 'text-xl'}`}>
          {project.name}
        </h3>

        {isHero && (
          <p className="text-sm text-white/50 leading-relaxed mb-3 font-mono line-clamp-2">{project.description}</p>
        )}

        <div className="flex items-center gap-4 mb-3 flex-wrap">
          {project.metrics.slice(0, isHero ? 3 : 2).map((m, i) => (
            <div key={i} className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-white font-mono">{m.value}</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider font-mono">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, isHero ? 5 : 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/70 border border-white/20">
              {t}
            </span>
          ))}
          {project.tech.length > (isHero ? 5 : 3) && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-white/30">
              +{project.tech.length - (isHero ? 5 : 3)}
            </span>
          )}
        </div>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded pointer-events-none transition-all duration-300 border border-transparent group-hover:border-white/20" />
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
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8" onClick={onClose}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

      {/* Modal card */}
      <div
        className="relative z-10 max-w-3xl w-full mx-4 rounded-lg overflow-hidden animate-[scaleIn_0.2s_ease-out]"
        style={{ ...blueprintBg, border: '1px solid rgba(255,255,255,0.12)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Screenshot */}
        <div className="relative">
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="w-full h-auto opacity-80"
            style={{ mixBlendMode: 'luminosity' }}
          />
          <div className="absolute inset-0 bg-[#2a5080]/30" />
          <div className="absolute inset-3 border border-white/10 rounded-sm pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryDotColors[project.category] }} />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-mono">{project.subtitle}</span>
            {project.nda && (
              <span className="ml-2 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider text-red-400/80 border border-red-400/20 font-mono">NDA</span>
            )}
          </div>

          <h2 className="text-3xl font-bold text-white font-mono mb-4">{project.name}</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6 font-mono">{project.description}</p>

          <div className="flex items-center gap-6 mb-6 flex-wrap">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-lg font-bold text-white font-mono">{m.value}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-mono ml-1.5">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded text-xs font-mono text-white/70 border border-white/20">{t}</span>
            ))}
          </div>

          <div className="h-px bg-white/10 mb-6" />

          <div className="flex items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                Visit Live Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <button onClick={onClose} className="px-4 py-3 text-sm font-mono text-white/50 hover:text-white transition-colors">
              &larr; Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Showcase Grid ─────────────────────────────────────────────
export default function ShowcaseGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  const categories: Array<ProjectCategory | 'all'> = ['all', 'platform', 'website', 'tool']

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#1a1008',
        backgroundImage: `
          linear-gradient(175deg,
            #1a1008 0%, #1e1209 8%, #1a1008 15%,
            #22140b 25%, #1c110a 35%, #1a1008 45%,
            #1e1209 55%, #22140b 65%, #1a1008 75%,
            #1c110a 85%, #1a1008 92%, #1e1209 100%
          ),
          radial-gradient(ellipse at 20% 50%, rgba(30,18,9,0.5) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 50%, rgba(34,20,11,0.5) 0%, transparent 70%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* ── Rolled blueprint banner ── */}
        <div
          className="relative mb-12 px-6 sm:px-8 py-8 sm:py-10 overflow-hidden"
          style={{
            ...blueprintBg,
            backgroundSize: '24px 24px',
            borderRadius: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {/* Rolled edge shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none rounded-l-[40px]" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none rounded-r-[40px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* Logo badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 border border-white/10 mb-4">
                <div className="grid grid-cols-3 gap-0.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-sm bg-amber-500/80" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white/80 font-mono tracking-wider">BUILDKIT LABS</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white font-mono leading-tight tracking-tight">
                What we&apos;ve built.
              </h1>
              <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl font-mono leading-relaxed">
                Platforms, automations, and websites — from construction middleware to e-commerce storefronts.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => {
                const active = filter === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 border
                      ${active
                        ? 'bg-white text-[#2a5080] border-white'
                        : 'bg-transparent border-white/30 text-white/70 hover:border-white/60 hover:text-white'
                      }
                    `}
                  >
                    {cat === 'all' ? 'All Projects' : categoryLabels[cat]}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Grid area with decorative elements ── */}
        <div className="relative">

          {/* Golden ruler — left edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-2 rounded-full hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, #d4a84b, #b8912e)',
              backgroundImage: `
                linear-gradient(to bottom, #d4a84b, #b8912e),
                repeating-linear-gradient(
                  to bottom,
                  transparent,
                  transparent 58px,
                  rgba(0,0,0,0.3) 58px,
                  rgba(0,0,0,0.3) 60px
                )
              `,
              backgroundBlendMode: 'normal, overlay',
              boxShadow: '2px 0 8px rgba(0,0,0,0.3)',
            }}
          />

          {/* Compass decoration — top right */}
          <div className="absolute -top-2 right-8 text-[#c4993d] opacity-30 text-4xl hidden lg:block select-none pointer-events-none font-mono">
            &#8853;
          </div>

          {/* Pencil line decoration */}
          <div
            className="absolute top-24 -right-4 w-px h-40 opacity-20 hidden lg:block pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, #c4993d, transparent)',
              transform: 'rotate(-15deg)',
            }}
          />

          {/* ── Bento grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:pl-6">
            {filtered.map((project, i) => (
              <BlueprintCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30 font-mono">
              No projects in this category yet.
            </div>
          )}
        </div>
      </div>

      {/* ── Detail modal ── */}
      {selectedProject && (
        <DetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
