import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight, Check, Gauge, ChartLineUp, Browser,
} from '@phosphor-icons/react/dist/ssr'
import JsonLd from '@/components/JsonLd'
import { Kicker, DimLabel } from '@/components/technical/marks'
import DashboardMockup from '@/components/mockups/DashboardMockup'
import PipelineMockup from '@/components/mockups/PipelineMockup'
import BeforeAfterMockup from '@/components/mockups/BeforeAfterMockup'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Case studies of custom software and web development projects for construction companies. Operations platforms, CRM systems, and website rebuilds with measurable results.',
  keywords: ['construction software case studies', 'custom software portfolio', 'construction CRM results', 'web development portfolio DFW'],
  alternates: {
    canonical: 'https://buildkitlabs.com/portfolio',
  },
}

const CASE_STUDIES = [
  {
    category: 'Custom software',
    shortTitle: 'Operations command center',
    bigTitle: 'Multi-location construction operations platform',
    subtitle: 'Centralized command center for dispatch, crew management, and job tracking across multiple service areas.',
    Icon: Gauge,
    Mock: DashboardMockup,
    metrics: [
      ['40%', 'Faster dispatching'],
      ['20hrs', 'Weekly admin saved'],
      ['35%', 'Efficiency gain'],
    ],
    challenge: 'A multi-location construction services company was juggling spreadsheets, phone calls, and manual scheduling for 40+ crews across DFW. Office managers were working 60+ hour weeks just to coordinate operations.',
    solution: 'Centralized operations platform with real-time dispatch, crew management, and automated notifications. Jobs assigned in seconds. Managers see everything on a live dashboard.',
    detailFeatures: [
      { title: 'Dispatch dashboard', body: 'Real-time map view showing job locations, crew assignments, and status' },
      { title: 'Mobile crew app', body: 'Crews receive job details, navigate to locations, complete work with photos and signatures' },
      { title: 'Automated notifications', body: 'Crews notified immediately when jobs are assigned with all necessary details' },
      { title: 'Reporting & analytics', body: 'Performance metrics, crew productivity, and operational insights' },
      { title: 'Billing integration', body: 'Auto-sync data with QuickBooks for invoicing and financial tracking' },
    ],
    featuresHeading: 'Key features',
    features: [
      'Real-time job dispatch with route optimization',
      'GPS tracking and crew location mapping',
      'Mobile app for job details, photos, signatures',
      'Automated scheduling and availability management',
      'QuickBooks integration for billing',
    ],
  },
  {
    category: 'Custom CRM',
    shortTitle: 'Automated sales engine',
    bigTitle: 'Sales-focused CRM platform',
    subtitle: 'Custom CRM built to accelerate sales, automate follow-ups, and improve team accountability.',
    Icon: ChartLineUp,
    Mock: PipelineMockup,
    metrics: [
      ['60%', 'Conversion increase'],
      ['8hrs', 'Weekly admin saved'],
      ['3x', 'Deal velocity'],
    ],
    challenge: 'A commercial roofing company was losing deals because follow-ups fell through the cracks. The sales team spent more time hunting for information than closing. Conversion was inconsistent at best.',
    solution: 'Custom CRM with automated follow-up workflows, lead scoring, and pipeline visibility. Leads are routed instantly. Follow-ups are scheduled automatically. Nothing falls through the cracks.',
    detailFeatures: [
      { title: 'Lead pipeline tracking', body: 'Visual pipeline showing where every opportunity stands in the sales process' },
      { title: 'Automated workflows', body: 'Triggers and automations ensure no lead falls through the cracks' },
      { title: 'Proposal & quote management', body: 'Generate professional quotes with one click, track acceptance status' },
      { title: 'Sales analytics', body: 'Real-time dashboards showing conversion rates, deal value, and team performance' },
      { title: 'Mobile access', body: 'Check pipeline, update deals, and send quotes from the field or office' },
    ],
    featuresHeading: 'Key features',
    features: [
      'Lead capture from multiple sources',
      'Automated follow-up workflows and reminders',
      'Lead scoring and prioritization',
      'Quote generation and proposal tracking',
      'Sales pipeline visualization and forecasting',
    ],
  },
  {
    category: 'Web development',
    shortTitle: 'Digital presence overhaul',
    bigTitle: 'Modern websites for construction companies',
    subtitle: 'Website rebuilds that improve rankings, generate leads, and establish professional credibility.',
    Icon: Browser,
    Mock: BeforeAfterMockup,
    metrics: [
      ['120%', 'Inquiry increase'],
      ['1st', 'Page ranking (local)'],
      ['2.5x', 'Traffic growth'],
    ],
    challenge: "Multiple construction and home services companies had outdated sites that weren't generating leads — hard to navigate, unprofessional on mobile, and invisible in local search.",
    solution: "Complete rebuilds with modern design, mobile-first development, and conversion-focused layouts. Each site tells the company's story and makes it easy for prospects to reach out.",
    detailFeatures: [
      { title: 'Mobile-first design', body: 'Half of your customers browse on phones. Sites that work great on mobile.' },
      { title: 'SEO built-in', body: 'Optimized for search engines so prospects find you when they search for your services' },
      { title: 'Lightning fast', body: 'Optimized performance improves user experience and search rankings' },
      { title: 'Lead capture', body: 'Contact forms and CTAs designed to convert visitors into leads' },
      { title: 'Easy to maintain', body: 'Simple content management so you can update your own site' },
    ],
    featuresHeading: 'What we built',
    features: [
      'Professional design tailored to each company',
      'Mobile-first responsive across all devices',
      'Local SEO optimization',
      'Portfolio/gallery showcasing past work',
      'Contact forms and lead capture',
    ],
  },
] as const

export default function Portfolio() {
  return (
    <div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Portfolio | BuildKit Labs',
        description: 'Case studies of custom software and web development projects for construction companies.',
        url: 'https://buildkitlabs.com/portfolio',
      }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/0 via-paper-200/0 to-paper-200 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-20">
          <Kicker index="01" className="mb-8 animate-fade-in">Selected work · Case studies</Kicker>

          <h1 className="text-[3rem] leading-[1.02] sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink text-balance max-w-4xl animate-fade-in-delay-1">
            Real software.{' '}
            <span className="relative inline-block whitespace-nowrap">
              Real results.
              <span className="absolute -bottom-2 left-0 right-1 flex items-center text-primary-500" aria-hidden="true">
                <span className="w-px h-2.5 bg-current" />
                <span className="h-[2px] flex-1 bg-current" />
                <span className="w-px h-2.5 bg-current" />
              </span>
            </span>
          </h1>

          <p className="mt-9 md:mt-11 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed text-pretty animate-fade-in-delay-2">
            Every project here started with a specific operational problem. Here&apos;s how we solved them.
          </p>

          <div className="mt-12 flex items-center gap-4 animate-fade-in-delay-3">
            <DimLabel>03 plates</DimLabel>
            <span className="h-px w-16 bg-line-strong" />
            <DimLabel>Dallas–Fort Worth</DimLabel>
          </div>
        </div>
      </section>

      {/* ── Case study plates ────────────────────────────────────────── */}
      {CASE_STUDIES.map((cs, i) => {
        const { Icon, Mock } = cs
        const plate = `Plate 0${i + 1}`
        const mockRight = i % 2 === 0
        return (
          <section key={cs.shortTitle} className={`border-b border-line ${i % 2 === 1 ? 'bg-paper-100' : ''}`}>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
              <article className="bg-paper-50 border border-line card-hover overflow-hidden">

                {/* Title bar */}
                <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-line">
                  <div className="flex items-center gap-3">
                    <DimLabel>{plate}</DimLabel>
                    <span className="h-3.5 w-px bg-line-strong" />
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-ink-500">
                      <Icon size={15} weight="regular" className="text-ink-400" />
                      {cs.shortTitle}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-primary-600 border border-primary-200 px-2 py-0.5 bg-primary-50">
                    {cs.category}
                  </span>
                </div>

                {/* Overview: heading + drawing */}
                <div className="grid lg:grid-cols-2">
                  <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${mockRight ? '' : 'lg:order-2 lg:border-l border-line'}`}>
                    <DimLabel className="mb-4 block">Overview</DimLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-4 text-balance">
                      {cs.bigTitle}
                    </h2>
                    <p className="text-ink-500 leading-relaxed max-w-md">{cs.subtitle}</p>
                  </div>
                  <div className={`p-6 md:p-8 lg:p-10 bg-paper-100 border-t lg:border-t-0 border-line flex items-center ${mockRight ? 'lg:border-l' : 'lg:order-1'}`}>
                    <div className="w-full border border-line bg-paper-50 p-3 shadow-sheet">
                      <Mock />
                    </div>
                  </div>
                </div>

                {/* Results band */}
                <div className="border-t border-line bg-paper-100 px-6 md:px-8 lg:px-10 py-8 md:py-10">
                  <div className="flex items-center gap-3 mb-7">
                    <DimLabel>Results</DimLabel>
                    <span className="h-px flex-1 bg-line" />
                    <DimLabel>Measured on delivery</DimLabel>
                  </div>
                  <div className="grid grid-cols-3 gap-4 md:gap-10">
                    {cs.metrics.map(([val, label], mi) => (
                      <div key={label}>
                        <div className={`text-2xl sm:text-3xl md:text-5xl font-bold tabular tracking-tight ${mi === 0 ? 'text-primary-600' : 'text-ink'}`}>
                          {val}
                        </div>
                        <div className="flex items-center gap-1 my-2.5 text-ink-400" aria-hidden="true">
                          <span className="w-px h-2 bg-current" />
                          <span className="h-px w-6 md:w-10 bg-current" />
                          <span className="w-px h-2 bg-current" />
                        </div>
                        <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-ink-400 leading-snug">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge / Solution */}
                <div className="border-t border-line grid md:grid-cols-2">
                  {[
                    ['01', 'The challenge', cs.challenge],
                    ['02', 'The solution', cs.solution],
                  ].map(([n, label, body], ci) => (
                    <div key={label} className={`p-6 md:p-8 lg:p-10 ${ci === 0 ? 'border-b md:border-b-0 md:border-r border-line' : ''}`}>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="font-mono text-[11px] font-medium text-primary-600 border border-line-strong px-1.5 py-[3px] tabular tracking-widest leading-none">
                          {n}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-500 leading-none">
                          {label}
                        </span>
                      </div>
                      <p className="text-ink-500 leading-relaxed max-w-lg">{body}</p>
                    </div>
                  ))}
                </div>

                {/* Build detail + key features */}
                <div className="border-t border-line grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <DimLabel>Build detail</DimLabel>
                      <span className="h-px flex-1 bg-line" />
                    </div>
                    <ul className="divide-y divide-line">
                      {cs.detailFeatures.map(({ title, body }) => (
                        <li key={title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                          <Check size={16} weight="bold" className="text-primary-500 mt-0.5 shrink-0" />
                          <p className="text-sm leading-relaxed">
                            <span className="font-semibold text-ink">{title}</span>
                            <span className="text-ink-500"> — {body}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-line bg-paper-100">
                    <div className="flex items-center gap-3 mb-6">
                      <DimLabel>{cs.featuresHeading}</DimLabel>
                      <span className="h-px flex-1 bg-line" />
                    </div>
                    <ul className="space-y-3">
                      {cs.features.map(f => (
                        <li key={f} className="flex gap-2.5 text-sm text-ink-600">
                          <Check size={15} weight="bold" className="text-primary-500 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )
      })}

      {/* ── Sign-off CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500 origin-center animate-draw-x" />
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 text-balance">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-ink-500 mb-11 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about your project and how we can deliver similar results for your company.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
          >
            Get in touch
            <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
