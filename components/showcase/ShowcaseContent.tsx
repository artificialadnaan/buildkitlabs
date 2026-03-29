'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'

// ── Types ──

interface ProjectMetric { value: string; label: string }

interface Project {
  id: string
  name: string
  subtitle: string
  client: string
  color: string
  colorRgb: string
  darkBg: [string, string]
  height: number
  width: number
  antenna?: 'beacon' | 'spike'
  antennaColor?: string
  windowCols: number
  layer: 'foreground' | 'background'
  icon: string
  description: string
  problem: string
  solution: string
  features: string[]
  results: string
  metrics: ProjectMetric[]
  tech: string[]
  liveUrl?: string
  nda?: boolean
}

// ── Project Data ──

const PROJECTS: Project[] = [
  {
    id: 'fencetastic',
    name: 'Fencetastic',
    subtitle: 'Service Website',
    client: 'Fencetastic DFW',
    color: '#78716c',
    colorRgb: '120,113,108',
    darkBg: ['#1c1917', '#171412'],
    height: 32, width: 24, windowCols: 2, layer: 'background',
    icon: '🔧',
    description: 'Website for DFW fence, deck, and outdoor services with service showcase and contact integration.',
    problem: 'No web presence for a growing DFW fence and outdoor services company.',
    solution: 'Clean website with service showcase, area coverage, and contact integration for the DFW market.',
    features: ['Service showcase', 'Contact integration', 'DFW service area coverage'],
    results: 'Established an initial web presence for the business.',
    metrics: [{ value: '1', label: 'Launch Ready' }, { value: 'DFW', label: 'Service Area' }, { value: 'Fast', label: 'Load Time' }],
    tech: ['Express', 'HTML/CSS', 'Node.js'],
  },
  {
    id: 'booth-plug',
    name: 'The Booth Plug',
    subtitle: 'Booking Website',
    client: 'The Booth Plug',
    color: '#fb923c',
    colorRgb: '251,146,60',
    darkBg: ['#271a0c', '#1a1008'],
    height: 48, width: 30, windowCols: 2, layer: 'background',
    icon: '📸',
    liveUrl: 'https://theboothplug.com',
    description: 'Photo booth rental website with 57 SEO blog posts, automated booking, and service showcase for DFW events.',
    problem: 'No online presence. Bookings came only through word-of-mouth and Instagram DMs.',
    solution: 'Professional website with 57 SEO-optimized blog posts targeting DFW wedding and event keywords. EmailJS booking form with branded confirmations and click-to-call.',
    features: ['57 SEO-optimized blog posts', 'EmailJS booking with confirmations', 'Pricing packages', 'Click-to-call', 'Mobile-first design'],
    results: 'Professional web presence with strong SEO foundation for organic lead generation in the DFW events market.',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: '3', label: 'Packages' }, { value: '24/7', label: 'Booking' }],
    tech: ['Vite', 'React', 'Express', 'EmailJS'],
  },
  {
    id: 'virasat-jewels',
    name: 'Virasat Jewels',
    subtitle: 'E-Commerce Platform',
    client: 'Virasat Jewels',
    color: '#a78bfa',
    colorRgb: '167,139,250',
    darkBg: ['#1e1538', '#140e28'],
    height: 80, width: 42, windowCols: 3, layer: 'foreground',
    icon: '💎',
    liveUrl: 'https://virasatjewels.com',
    description: 'Full e-commerce platform migrating 930+ Etsy listings to a branded experience with Stripe, Cloudinary CDN, and security hardening.',
    problem: 'Virasat Jewels was locked into Etsy \u2014 high fees, no brand control, no customer data ownership. 930+ listings needed migration without losing their catalog.',
    solution: 'Next.js e-commerce with custom CSV import for 930+ Etsy listings. Cloudinary for images, Stripe for payments, comprehensive security hardening with rate limiting and OWASP protections.',
    features: ['Bulk CSV import for 930+ Etsy products', 'Stripe checkout', 'Cloudinary image CDN', 'Zustand cart management', 'NextAuth authentication', 'Upstash Redis rate limiting', 'OWASP security hardening'],
    results: 'Migrated entire Etsy storefront to independent platform. Zero marketplace fees, full brand control, customer data ownership.',
    metrics: [{ value: '930+', label: 'Products Migrated' }, { value: '0%', label: 'Marketplace Fees' }, { value: 'A+', label: 'Security Score' }],
    tech: ['Next.js 16', 'React 19', 'Prisma', 'Stripe', 'Cloudinary', 'NextAuth', 'Zustand'],
  },
  {
    id: 'skyguard',
    name: 'SkyGuard',
    subtitle: 'Roofing Ops Platform',
    client: 'SkyGuard Roofing Solutions',
    color: '#60a5fa',
    colorRgb: '96,165,250',
    darkBg: ['#172035', '#101828'],
    height: 105, width: 48, antenna: 'spike', antennaColor: '#60a5fa',
    windowCols: 3, layer: 'foreground',
    icon: '🏠',
    description: 'Comprehensive ops platform managing inspections, contracts, jobs, supplements, commissions, and e-signatures for a roofing company.',
    problem: 'Every aspect of the business lived in disconnected tools. Inspections in one app, contracts in another, supplements in spreadsheets. Commission calculations were manual and error-prone.',
    solution: 'Single platform for the entire roofing lifecycle: inspection \u2192 contract \u2192 production \u2192 supplement \u2192 closeout. DocuSeal e-signatures, Google Drive docs, Gmail comms, role-based OAuth.',
    features: ['Full job lifecycle management', 'E-signature workflow via DocuSeal', 'Commission calculations by role/training', 'Supplement line-item tracking', 'Google Drive integration', 'Gmail API communications', 'Domain-restricted Google OAuth'],
    results: 'Unified 26 operational workflows. Eliminated manual commission math. Real-time visibility into jobs and earnings for every team member.',
    metrics: [{ value: '26', label: 'Workflows Unified' }, { value: '1', label: 'Platform' }, { value: '100%', label: 'E-Sig Adoption' }],
    tech: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'DocuSeal', 'Gmail API'],
  },
  {
    id: 'trock-synchub',
    name: 'T-Rock SyncHub',
    subtitle: 'Automation Platform',
    client: 'T-Rock Construction',
    color: '#34d399',
    colorRgb: '52,211,153',
    darkBg: ['#0f2419', '#0a1a11'],
    height: 140, width: 56, antenna: 'beacon', antennaColor: '#ef4444',
    windowCols: 3, layer: 'foreground',
    icon: '🏗️',
    nda: true,
    description: 'Replaced 47 Zapier automations with a unified platform. Procore as system of record, bi-directional HubSpot sync, automated PDF reports.',
    problem: 'T-Rock was drowning in manual processes. 47 Zapier automations duct-taped HubSpot and Procore together. Bid tracking in spreadsheets. Manual emails for stage changes. Hand-assembled PDF reports. Broken automations went unnoticed until clients complained.',
    solution: 'Unified automation platform replacing every Zapier workflow. Three-phase Playwright pipeline automates the Bid Board lifecycle. HubSpot syncs bi-directionally. 11 branded PDF types generate automatically. A reconciliation engine resolved 815+ conflicts across three data generations.',
    features: ['Three-phase Playwright pipeline: Bid Board \u2192 Portfolio \u2192 Budget', 'Bi-directional HubSpot sync', '11 branded PDF report types', 'Data reconciliation across 3 generations', 'RFP approval workflows', 'CompanyCam photo integration', 'Real-time project dashboard'],
    results: 'Eliminated manual data entry across three systems. 47 automated workflows. Real-time visibility from initial bid through closeout.',
    metrics: [{ value: '47', label: 'Automations Replaced' }, { value: '3', label: 'Systems Integrated' }, { value: '11', label: 'PDF Report Types' }],
    tech: ['React', 'TypeScript', 'Express', 'Procore API', 'HubSpot API', 'Playwright', 'PostgreSQL', 'Drizzle ORM'],
  },
  {
    id: 'buildkit-crm',
    name: 'BuildKit CRM',
    subtitle: 'Lead Gen Platform',
    client: 'BuildKit Labs',
    color: '#f59e0b',
    colorRgb: '245,158,11',
    darkBg: ['#271e08', '#1a1505'],
    height: 95, width: 46, antenna: 'spike', antennaColor: '#f59e0b',
    windowCols: 3, layer: 'foreground',
    icon: '⚡',
    description: 'Full CRM with map-based business finder, lead scraping, AI enrichment pipelines, email sequences, invoicing, and analytics.',
    problem: 'Manual prospecting was slow \u2014 searching Google Maps one zip at a time, copying info into spreadsheets, hunting for contact emails. No systematic way to find, score, and reach prospects.',
    solution: 'CRM with integrated map-based business finder. Interactive Leaflet map with tag search and zip targeting. 8 BullMQ queues handle scraping, audits, enrichment, AI prospecting, and outreach. Leads flow through scoring, email sequences, and deal pipelines.',
    features: ['Map-based business finder with tag search', '8 background job queues', 'AI prospecting with website scoring', 'Email sequence automation', 'Kanban deal pipeline', 'Stripe invoicing', 'Twilio SMS integration'],
    results: 'Transformed lead gen from manual hours-long process to automated pipeline. One search finds, scores, and enriches dozens of prospects.',
    metrics: [{ value: '30+', label: 'Database Tables' }, { value: '8', label: 'Job Queues' }, { value: '\u221e', label: 'Leads on Demand' }],
    tech: ['React 19', 'TypeScript', 'Express 5', 'Drizzle ORM', 'BullMQ', 'Leaflet', 'Stripe', 'Twilio'],
  },
  {
    id: 'buildkit-website',
    name: 'BuildKit Labs',
    subtitle: 'Marketing Website',
    client: 'BuildKit Labs',
    color: '#78716c',
    colorRgb: '120,113,108',
    darkBg: ['#1c1917', '#171412'],
    height: 42, width: 28, windowCols: 2, layer: 'background',
    icon: '🌐',
    liveUrl: 'https://buildkitlabs.com',
    description: 'Next.js marketing site with portfolio, 57-post blog, pricing, and accessibility-hardened booking.',
    problem: 'Needed a professional web presence to attract construction and local business clients.',
    solution: 'Next.js site with case studies, blog system, booking form, and full accessibility hardening.',
    features: ['Portfolio with case studies', '57-post blog', 'EmailJS booking', 'WCAG accessible'],
    results: 'Professional credibility piece driving inbound leads from organic search and referrals.',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: 'A11y', label: 'Accessible' }, { value: '100', label: 'Lighthouse' }],
    tech: ['Next.js 14', 'Tailwind CSS', 'EmailJS', 'Vercel'],
  },
]

// ── Seeded random for consistent windows ──
function seededRandom(seed: number) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

// ── Building ──
function Building({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 300)
    return () => clearTimeout(t)
  }, [index])

  const rand = seededRandom(project.id.length * 137 + index * 31)
  const windowCount = Math.min(Math.floor((project.height - 16) / 5) * project.windowCols, 24)
  const windows = Array.from({ length: windowCount }, () => 0.1 + rand() * 0.6)

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer transition-all duration-300"
      style={{
        opacity: visible ? (project.layer === 'background' ? 0.4 : 1) : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-6px)'
        el.style.filter = 'brightness(1.15)'
        if (project.layer === 'background') el.style.opacity = '0.7'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = visible ? 'translateY(0)' : 'translateY(40px)'
        el.style.filter = 'brightness(1)'
        if (project.layer === 'background') el.style.opacity = '0.4'
      }}
    >
      {/* Antenna */}
      {project.antenna === 'beacon' && (
        <div
          className="rounded-sm mb-[-2px] animate-pulse"
          style={{ width: 6, height: 14, background: project.antennaColor, boxShadow: `0 0 10px ${project.antennaColor}` }}
        />
      )}
      {project.antenna === 'spike' && (
        <div className="mb-[-1px]" style={{ width: 2, height: 10, background: project.antennaColor, borderRadius: 1 }} />
      )}

      {/* Body */}
      <div
        className="rounded-t-[3px] relative border border-b-0 transition-shadow duration-300 overflow-hidden"
        style={{
          width: project.width, height: project.height,
          background: `linear-gradient(180deg, ${project.darkBg[0]}, ${project.darkBg[1]})`,
          borderColor: 'rgba(255,255,255,0.04)',
        }}
      >
        <div className="absolute top-2 left-[5px] right-[5px] grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${project.windowCols}, 1fr)` }}>
          {windows.map((b, i) => (
            <div key={i} className="h-[3px] rounded-[1px]" style={{ background: `rgba(${project.colorRgb},${b.toFixed(2)})` }} />
          ))}
        </div>
      </div>

      {/* Label */}
      <div className="mt-2 text-[8px] font-semibold whitespace-nowrap tracking-wide" style={{ color: project.color }}>
        {project.name}
      </div>
      {project.layer === 'foreground' && (
        <div className="text-[7px] text-stone-600 whitespace-nowrap">{project.subtitle}</div>
      )}
    </div>
  )
}

// ── Detail Panel ──
function DetailPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onEsc) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] flex items-stretch justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease]" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-[560px] max-w-full bg-dark-950 border-l border-stone-800/60 overflow-y-auto animate-[slideInRight_0.4s_ease_forwards] z-10" style={{ scrollbarWidth: 'thin' }}>
        {/* Close */}
        <button onClick={onClose} className="sticky top-4 float-right m-4 w-9 h-9 border border-stone-800 rounded-lg bg-dark-950 text-stone-500 hover:text-stone-100 hover:border-stone-600 flex items-center justify-center text-lg transition-colors z-10">
          &times;
        </button>

        {/* Header */}
        <div className="pt-10 px-8 pb-6 border-b border-stone-800/60">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
              {project.icon}
            </div>
            <div>
              <div className="text-xl font-bold text-stone-100 tracking-tight">{project.name}</div>
              <div className="text-xs text-stone-500">{project.subtitle} &middot; {project.client}</div>
            </div>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">{project.description}</p>

          {/* Link / NDA badge */}
          <div className="mt-4 flex gap-2 flex-wrap">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors" style={{ background: `${project.color}12`, border: `1px solid ${project.color}28`, color: project.color }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Visit Live Site
              </a>
            )}
            {project.nda && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/8 border border-red-500/20 text-red-400 text-xs font-semibold">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Under NDA
              </span>
            )}
            {!project.liveUrl && !project.nda && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/40 border border-stone-700/40 text-stone-500 text-xs font-semibold">
                Internal Platform
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2.5 p-5 px-8 border-b border-stone-800/60">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center py-3 px-2 bg-stone-900/50 border border-stone-800/40 rounded-xl">
              <div className="text-xl font-extrabold leading-none" style={{ color: project.color }}>{m.value}</div>
              <div className="text-[9px] text-stone-500 uppercase tracking-wider mt-1.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 px-8 py-5 border-b border-stone-800/60">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-stone-900/50 border border-stone-800/40 rounded-full text-[11px] text-stone-400">{t}</span>
          ))}
        </div>

        {/* Expand */}
        <div className="px-8 py-5 border-b border-stone-800/60">
          <button onClick={() => setExpanded(v => !v)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600/10 border border-primary-600/20 rounded-lg text-primary-400 text-sm font-semibold transition-colors hover:bg-primary-600/20 hover:border-primary-600/30">
            {expanded ? 'Show less' : 'Go deeper'}
            <span className="transition-transform duration-300 inline-block" style={{ transform: expanded ? 'rotate(90deg)' : 'none' }}>&rarr;</span>
          </button>
        </div>

        {/* Case Study */}
        <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: expanded ? 2000 : 0 }}>
          <div className="px-8 py-5 border-b border-stone-800/60">
            <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-red-400 mb-2.5">The Problem</div>
            <p className="text-sm text-stone-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="px-8 py-5 border-b border-stone-800/60">
            <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-emerald-400 mb-2.5">The Solution</div>
            <p className="text-sm text-stone-400 leading-relaxed">{project.solution}</p>
          </div>
          <div className="px-8 py-5 border-b border-stone-800/60">
            <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-blue-400 mb-2.5">Key Features</div>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-[7px] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8 py-5 border-b border-stone-800/60">
            <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-amber-400 mb-2.5">Results</div>
            <p className="text-sm text-stone-400 leading-relaxed">{project.results}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Scroll Panel ──
function ScrollPanel({ children, bgContent, index }: { children: React.ReactNode; bgContent?: React.ReactNode; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {bgContent && <div className={`absolute inset-0 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>{bgContent}</div>}
      <div className="relative z-10 text-center max-w-3xl px-8">
        <h2 className={`text-4xl md:text-5xl lg:text-[52px] font-extrabold text-stone-100 leading-tight tracking-tight transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {children}
        </h2>
        {index === 3 && (
          <div className={`mt-10 transition-opacity duration-700 delay-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block text-2xl text-stone-600 animate-bounce">&darr;</span>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Main ──
export default function ShowcaseContent() {
  const [selected, setSelected] = useState<Project | null>(null)
  const skyRef = useRef<HTMLElement>(null)
  const [skyVisible, setSkyVisible] = useState(false)

  useEffect(() => {
    const el = skyRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSkyVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const close = useCallback(() => setSelected(null), [])

  return (
    <div className="bg-dark-950 pt-20">
      {/* ── Narrative Panels ── */}
      <ScrollPanel index={0} bgContent={
        <div className="absolute inset-0 blueprint-bg opacity-0 transition-opacity duration-1000" style={{ opacity: 'inherit' }} />
      }>
        Every great city starts<br />with a blueprint.
      </ScrollPanel>

      <ScrollPanel index={1} bgContent={
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-end gap-3 opacity-inherit">
          {[{ w: 28, h: 40 }, { w: 36, h: 65 }, { w: 50, h: 100 }, { w: 42, h: 78 }, { w: 30, h: 50 }].map((b, i) => (
            <div key={i} className="border border-primary-600/15 border-b-0 rounded-t-sm" style={{ width: b.w, height: b.h }} />
          ))}
        </div>
      }>
        We don&apos;t just design them.<br />We build them.
      </ScrollPanel>

      <ScrollPanel index={2} bgContent={
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-end gap-3 opacity-inherit">
          {[
            { w: 28, h: 40, bg: '#271a0c', shadow: 'rgba(251,146,60,0.12)' },
            { w: 36, h: 65, bg: '#1e1538', shadow: 'rgba(167,139,250,0.12)' },
            { w: 50, h: 100, bg: '#0f2419', shadow: 'rgba(52,211,153,0.15)' },
            { w: 42, h: 78, bg: '#172035', shadow: 'rgba(96,165,250,0.12)' },
            { w: 30, h: 50, bg: '#271e08', shadow: 'rgba(245,158,11,0.12)' },
          ].map((b, i) => (
            <div key={i} className="rounded-t-[3px]" style={{ width: b.w, height: b.h, background: b.bg, boxShadow: `0 0 14px ${b.shadow}` }} />
          ))}
        </div>
      }>
        Platforms. Automations.<br />Systems that run while you sleep.
      </ScrollPanel>

      <ScrollPanel index={3}>
        Here&apos;s what we&apos;ve built.
      </ScrollPanel>

      {/* ── Skyline ── */}
      <section ref={skyRef} className="relative min-h-[80vh] flex flex-col justify-end pb-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e0b08 0%, #131110 50%, #1a1714 85%, #1c1917 100%)' }}>
        {/* Stars */}
        <div className="absolute top-0 left-0 right-0 h-52 pointer-events-none" style={{
          backgroundImage: [
            'radial-gradient(1px 1px at 5% 15%, white 50%, transparent 100%)',
            'radial-gradient(1px 1px at 12% 35%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            'radial-gradient(1px 1px at 22% 8%, white 50%, transparent 100%)',
            'radial-gradient(1px 1px at 38% 18%, rgba(255,255,255,0.6) 50%, transparent 100%)',
            'radial-gradient(1px 1px at 48% 5%, white 50%, transparent 100%)',
            'radial-gradient(1px 1px at 65% 12%, rgba(255,255,255,0.7) 50%, transparent 100%)',
            'radial-gradient(1px 1px at 80% 8%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            'radial-gradient(1px 1px at 95% 25%, white 50%, transparent 100%)',
          ].join(','),
        }} />

        {/* Buildings */}
        <div className="flex items-end justify-center gap-2 sm:gap-3 px-6 sm:px-10 relative z-10 flex-wrap">
          {skyVisible && PROJECTS.map((p, i) => (
            <Building key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* Ground */}
        <div className="h-[3px] mx-10 relative z-10 mt-0" style={{ background: 'linear-gradient(90deg, transparent 5%, #292524 25%, #292524 75%, transparent 95%)' }} />
        <p className="text-center mt-4 text-[10px] text-stone-700 uppercase tracking-[3px] relative z-10">Click any building to explore</p>
      </section>

      {/* ── Detail ── */}
      {selected && <DetailPanel project={selected} onClose={close} />}

      {/* ── CTA ── */}
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="w-12 h-px bg-primary-600 mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Ready to add a building<br />to the skyline?
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about what we can build for your business.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
