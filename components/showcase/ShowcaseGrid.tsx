'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, ArrowRight, ArrowUpRight, ArrowLeft, Lock } from '@phosphor-icons/react'
import { Kicker, DimLabel } from '@/components/technical/marks'
import { projects, categoryLabels, type Project, type ProjectCategory } from './data'

// ── Grid config ────────────────────────────────────────────────────
// Row 1: hero (12) + 2 text-only stacked
// Following rows: standard image cards on a 12-col drafting grid.
const gridConfig: Record<string, {
  className: string
  imgH: string
  isHero?: boolean
  wide?: boolean
  textOnly?: boolean
}> = {
  synchub:            { className: 'col-span-12', imgH: '320px', isHero: true },
  'skyguard-hq':      { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '0', textOnly: true },
  'buildkit-crm':     { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '0', textOnly: true },
  'ticket-hub':       { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
  'virasat-jewels':   { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '170px' },
  'trock-website':    { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
  'skyguard-website': { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
  fencetastic:        { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '170px', wide: true },
  'booth-plug':       { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
  'buildkit-labs':    { className: 'col-span-12 sm:col-span-6 md:col-span-4', imgH: '160px' },
}

const plateLabel = (index: number) => `Plate ${String(index + 1).padStart(2, '0')}`

// ── Reused chrome ──────────────────────────────────────────────────
const CHIP = 'font-mono text-[9px] uppercase tracking-wide text-primary-600 border border-primary-200 px-1.5 py-0.5 bg-primary-50'
const TECH = 'font-mono text-[10px] uppercase tracking-wide text-ink-600 border border-line px-2 py-0.5'

// ── NDA Badge (drafting stamp) ─────────────────────────────────────
function NdaBadge({ small }: { small?: boolean }) {
  return (
    <div className={`absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-paper-50/95 border border-line ${small ? 'px-1.5 py-0.5' : 'px-2.5 py-1'}`}>
      <Lock size={small ? 10 : 12} weight="bold" className="text-ink-500" />
      <span className={`font-mono uppercase tracking-widest text-ink-500 ${small ? 'text-[9px]' : 'text-[10px]'}`}>NDA</span>
    </div>
  )
}

// ── Text-Only Card (for login-page projects) ───────────────────────
function TextOnlyCard({ project, index, visible, onClick }: {
  project: Project; index: number; visible: boolean; onClick: () => void
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden flex flex-col justify-between bg-paper-50 border border-line
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5 hover:border-ink hover:shadow-sheet
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* Hi-vis edge marker */}
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-500" aria-hidden="true" />

      {/* Title block */}
      <div className="flex items-center justify-between pl-6 pr-3 py-2 border-b border-line">
        <DimLabel>{plateLabel(index)}</DimLabel>
        <span className={CHIP}>{categoryLabels[project.category]}</span>
      </div>

      <div className="p-5 pl-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 truncate">{project.subtitle}</span>
          {project.nda && (
            <span className="ml-auto flex-shrink-0 font-mono text-[8px] uppercase tracking-widest text-ink-400 border border-line px-1.5 py-0.5">NDA</span>
          )}
        </div>

        <h3 className="text-base font-bold text-ink tracking-tight">{project.name}</h3>
        <p className="text-[11px] text-ink-500 mt-1 line-clamp-2 leading-relaxed">{project.description}</p>

        {/* Lead metric */}
        <div className="mt-2">
          <span className="text-xl font-bold text-ink tabular">{project.metrics[0].value}</span>
          <span className="font-mono text-[9px] text-ink-400 uppercase tracking-wide ml-1">{project.metrics[0].label}</span>
        </div>

        <div className="flex items-center gap-3 mt-1">
          {project.metrics.slice(1).map((m, i) => (
            <div key={i}>
              <span className="text-sm font-bold text-ink tabular">{m.value}</span>
              <span className="font-mono text-[8px] text-ink-400 uppercase tracking-wide ml-0.5">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className={TECH}>{t}</span>
          ))}
        </div>
      </div>
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
    return <div ref={ref} className={config.className}><TextOnlyCard project={project} index={index} visible={visible} onClick={onClick} /></div>
  }

  if (config.isHero) {
    return (
      <div
        ref={ref}
        className={`group relative cursor-pointer overflow-hidden flex flex-col bg-paper-50 border border-line
          transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-0.5 hover:border-ink hover:shadow-sheet
          ${config.className}
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
        style={{ transitionDelay: `${index * 50}ms` }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
        aria-label={`View ${project.name} project details`}
      >
        {/* Title block */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-line">
          <DimLabel>{plateLabel(index)} · Featured</DimLabel>
          <span className={CHIP}>{categoryLabels[project.category]}</span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Screenshot viewport — left on desktop, top on mobile */}
          <div className="relative flex-shrink-0 md:w-[55%] h-[240px] md:h-auto md:min-h-[300px] overflow-hidden border-b md:border-b-0 md:border-r border-line bg-paper-100">
            <img src={project.screenshot} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            {project.nda && <NdaBadge />}
          </div>

          {/* Content — right on desktop, bottom on mobile */}
          <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{project.subtitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">{project.name}</h3>
            <p className="text-sm text-ink-500 mt-2 leading-relaxed">{project.description}</p>
            <div className="flex items-center gap-6 mt-4 flex-wrap">
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <span className="text-xl font-bold text-ink tabular">{m.value}</span>
                  <span className="font-mono text-[10px] text-ink-400 uppercase tracking-wide ml-1.5">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className={TECH}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Standard cards ──
  const isWide = config.wide
  const imgHeight = config.imgH ?? '140px'

  return (
    <div
      ref={ref}
      className={`group relative cursor-pointer overflow-hidden flex flex-col bg-paper-50 border border-line
        transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5 hover:border-ink hover:shadow-sheet
        ${config.className}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      aria-label={`View ${project.name} project details`}
    >
      {/* Title block */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-line">
        <DimLabel>{plateLabel(index)}</DimLabel>
        <span className={CHIP}>{categoryLabels[project.category]}</span>
      </div>

      {/* Screenshot viewport */}
      <div className="relative flex-shrink-0 overflow-hidden border-b border-line bg-paper-100" style={{ height: imgHeight }}>
        <img src={project.screenshot} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
        {project.nda && <NdaBadge small />}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 truncate">{project.subtitle}</span>
        </div>
        <h3 className="text-lg font-bold text-ink tracking-tight">{project.name}</h3>
        <p className="text-[12px] text-ink-500 mt-1 line-clamp-1 leading-relaxed">{project.description}</p>
        <div className="flex items-center gap-4 mt-2 flex-wrap">
          {project.metrics.slice(0, isWide ? 3 : 2).map((m, i) => (
            <div key={i}>
              <span className="text-sm font-bold text-ink tabular">{m.value}</span>
              <span className="font-mono text-[9px] text-ink-400 uppercase tracking-wide ml-1">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {project.tech.slice(0, isWide ? 4 : 3).map((t) => (
            <span key={t} className={TECH}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Detail Modal (project sheet) ───────────────────────────────────
function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleEsc) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4" onClick={onClose}>
      <div className="fixed inset-0 bg-ink/30 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />
      <div
        className="relative z-10 max-w-4xl w-full bg-paper-50 border border-ink shadow-sheet animate-[scaleIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title block */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink">
          <div className="flex items-center gap-3">
            <DimLabel>Project sheet</DimLabel>
            <span className={CHIP}>{categoryLabels[project.category]}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center justify-center w-8 h-8 border border-line text-ink-500 hover:text-ink hover:border-ink transition-colors"
          >
            <X size={16} weight="bold" />
          </button>
        </div>

        {/* Screenshot viewport */}
        <div className="border-b border-line bg-paper-100">
          <div className="flex items-center justify-between px-5 py-2 border-b border-line">
            <DimLabel>Fig. 01 · Visual</DimLabel>
            <DimLabel>{project.nda ? 'Classified · NDA' : 'Live'}</DimLabel>
          </div>
          <img src={project.screenshot} alt={`${project.name} screenshot`} className="w-full max-h-[380px] object-cover object-top" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{project.subtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">{project.name}</h2>
          <p className="text-base text-ink-500 mt-3 leading-relaxed max-w-2xl">{project.description}</p>

          {/* Spec rows */}
          <dl className="mt-6 border-y border-line divide-y divide-line">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex items-center justify-between py-2.5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{m.label}</dt>
                <dd className="text-lg font-bold text-ink tabular">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5">
            <DimLabel>Stack</DimLabel>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] uppercase tracking-wide text-ink-600 border border-line px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press text-sm"
              >
                Visit live site
                <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <button onClick={onClose} className="inline-flex items-center gap-2 px-5 py-3 text-sm text-ink-500 hover:text-ink font-medium transition-colors">
              <ArrowLeft size={15} weight="bold" /> Back
            </button>
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
    <div className="min-h-[100dvh] bg-paper-200">
      {/* ── Header ── */}
      <div className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-14">
          <Kicker index="01" className="mb-6">Portfolio · Selected work</Kicker>

          <h1 className="text-[3rem] leading-[0.98] sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink text-balance">
            What we&apos;ve{' '}
            <span className="relative inline-block whitespace-nowrap">
              built.
              <span className="absolute -bottom-2 left-0 right-1 flex items-center text-primary-500" aria-hidden="true">
                <span className="w-px h-2.5 bg-current" />
                <span className="h-[2px] flex-1 bg-current" />
                <span className="w-px h-2.5 bg-current" />
              </span>
            </span>
          </h1>

          <p className="text-lg text-ink-500 mt-8 max-w-xl leading-relaxed">
            Platforms, automations, and websites — from construction middleware to e-commerce storefronts.
          </p>

          <div className="flex items-center gap-2 mt-9 flex-wrap">
            {categories.map((cat) => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`font-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors press
                    ${active
                      ? 'bg-primary-500 hover:bg-primary-600 text-ink border-primary-500'
                      : 'bg-paper-50 text-ink-500 border-line hover:border-ink hover:text-ink'
                    }
                  `}
                >
                  {cat === 'all' ? 'All' : categoryLabels[cat]}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div key={filterKey} className="grid grid-cols-12 gap-4 md:gap-5 animate-[fadeIn_0.25s_ease-out]">
          {filtered.map((project, i) => (
            <BentoCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 font-mono text-[11px] uppercase tracking-widest text-ink-400">
            No projects in this category.
          </div>
        )}
      </div>

      {/* ── Sign-off CTA ── */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500 origin-center animate-draw-x" />
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight leading-tight mb-5 text-balance">
            Ready to build<br />something that lasts?
          </h2>
          <p className="text-lg text-ink-500 mb-10 max-w-md mx-auto leading-relaxed">
            One call — no pitch deck, no runaround. Let&apos;s talk through your operations.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
          >
            Schedule a free discovery call
            <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {selectedProject && <DetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
