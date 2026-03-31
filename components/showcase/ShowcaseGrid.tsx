'use client'

import { useState, useEffect, useRef } from 'react'
import { projects, categoryLabels, type Project, type ProjectCategory } from './data'
import DetailPanel from './DetailPanel'

// ── Grid placement config ──────────────────────────────────────────
// Each entry defines how the card sits in the CSS grid on desktop
const gridPlacements: Record<string, string> = {
  synchub:            'md:col-span-2 md:row-span-2',  // hero — big tile
  'buildkit-labs':    'md:col-span-2 md:row-span-1',  // wide footer tile
}

// ── Card component ─────────────────────────────────────────────────
function ProjectCard({
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

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isHero = project.id === 'synchub'
  const placement = gridPlacements[project.id] ?? ''

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl overflow-hidden cursor-pointer
        transition-all duration-500 ease-out
        ${placement}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
        minHeight: isHero ? '420px' : '260px',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* ── Background screenshot ── */}
      <div className="absolute inset-0">
        <img
          src={project.screenshot}
          alt=""
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay — stronger at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-500" />
      </div>

      {/* ── Accent top bar ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      {/* ── Glow effect on hover ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{ boxShadow: `inset 0 0 60px ${project.accent}12, 0 0 30px ${project.accent}08` }}
      />

      {/* ── Border ── */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
        style={{
          border: `1px solid ${project.accent}20`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">

        {/* NDA badge */}
        {project.nda && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-red-500/20">
            <svg className="w-3 h-3 text-red-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[9px] uppercase tracking-[1.5px] text-red-400/80 font-medium">NDA</span>
          </div>
        )}

        {/* Category + status indicator */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }} />
          <span className="text-[10px] uppercase tracking-[2px] text-white/40">
            {project.subtitle}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-bold text-white tracking-tight mb-2 ${isHero ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
          {project.name}
        </h3>

        {/* Description — only on hero card */}
        {isHero && (
          <p className="text-sm text-white/50 leading-relaxed mb-4 max-w-lg line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Metrics row */}
        <div className="flex items-center gap-4 mb-3">
          {project.metrics.slice(0, isHero ? 3 : 2).map((m, i) => (
            <div key={i} className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold" style={{ color: project.accent }}>{m.value}</span>
              <span className="text-[10px] text-white/35 uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, isHero ? 5 : 3).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-medium text-white/50 bg-white/5 border border-white/8"
            >
              {t}
            </span>
          ))}
          {project.tech.length > (isHero ? 5 : 3) && (
            <span className="px-2 py-0.5 rounded text-[10px] font-medium text-white/30">
              +{project.tech.length - (isHero ? 5 : 3)}
            </span>
          )}
        </div>

        {/* Hover CTA */}
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-xs font-semibold" style={{ color: project.accent }}>View Details</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" style={{ color: project.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// ── Main grid ──────────────────────────────────────────────────────
export default function ShowcaseGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  const categories: Array<ProjectCategory | 'all'> = ['all', 'platform', 'website', 'tool']

  return (
    <div className="min-h-screen bg-dark-950">
      {/* ── Hero header ── */}
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[3px] text-primary-500/80 font-medium">Project Showcase</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 leading-tight tracking-tight">
              What we&apos;ve built.
            </h1>
            <p className="text-stone-400 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
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
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border
                    ${active
                      ? 'bg-primary-600/15 border-primary-600/40 text-primary-400'
                      : 'bg-transparent border-stone-800 text-stone-500 hover:border-stone-600 hover:text-stone-300'
                    }
                  `}
                >
                  {cat === 'all' ? 'All Projects' : categoryLabels[cat]}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent mb-10" />

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* ── Detail panel ── */}
      {selectedProject && (
        <DetailPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          mobile={isMobile}
        />
      )}
    </div>
  )
}
