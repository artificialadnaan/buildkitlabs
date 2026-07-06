import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight, ArrowUpRight, Stack, Browser, Compass, Check,
} from '@phosphor-icons/react/dist/ssr'
import JsonLd from '@/components/JsonLd'
import { Kicker, DimLabel } from '@/components/technical/marks'
import BlueprintPlan from '@/components/technical/BlueprintPlan'
import DashboardMockup from '@/components/mockups/DashboardMockup'
import PipelineMockup from '@/components/mockups/PipelineMockup'
import BeforeAfterMockup from '@/components/mockups/BeforeAfterMockup'

export const metadata: Metadata = {
  title: 'BuildKit Labs | Custom Software & Web Development Dallas-Fort Worth',
  description: 'Custom software development for construction companies and professional web development for North Texas businesses. Operations platforms, CRM systems, and digital transformation in DFW.',
  keywords: ['custom software development Dallas', 'construction software DFW', 'web development Fort Worth', 'construction operations platform', 'construction CRM Texas', 'website redesign DFW', 'affordable web development Dallas', 'custom website no monthly fees', 'small business website Fort Worth'],
  alternates: { canonical: 'https://buildkitlabs.com' },
}

const SPEC_FIELDS = [
  ['Project', 'Operations software'],
  ['Client', 'Construction & trades'],
  ['Location', 'Dallas–Fort Worth, TX'],
  ['Scope', 'Software · Web · Advisory'],
]

const NUMBERS = [
  ['50+', 'Projects delivered', 'A-01'],
  ['15+', 'Years combined build experience', 'A-02'],
  ['40%', 'Avg. operations time saved', 'A-03'],
  ['DFW', 'Local — North Texas', 'A-04'],
]

const NOTES = [
  ['01', 'Custom built', 'Hand-coded sites, not WordPress templates. Built from scratch on modern frameworks — yours to keep.'],
  ['02', 'Quick turnaround', 'Most sites ship in 2–4 weeks. We move fast because we skip the bloated page builders.'],
  ['03', 'No management fees', 'You own the code and the hosting. No monthly retainers, no lock-in, no surprise invoices.'],
]

export default function Home() {
  return (
    <div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'BuildKit Labs',
        description: 'Custom software development for construction companies and web development for North Texas businesses.',
        url: 'https://buildkitlabs.com',
        email: 'hello@buildkitlabs.com',
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: 32.7767, longitude: -96.7970 },
          geoRadius: '100 mi',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dallas-Fort Worth',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        sameAs: [],
      }} />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/0 via-paper-200/0 to-paper-200 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Copy */}
            <div className="lg:col-span-7">
              <Kicker index="01" className="mb-8 animate-fade-in">Dallas–Fort Worth · Software studio</Kicker>

              <h1 className="text-[3.25rem] leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-ink text-balance animate-fade-in-delay-1">
                We build software that{' '}
                <span className="relative inline-block whitespace-nowrap">
                  works.
                  <span className="absolute -bottom-2 left-0 right-1 flex items-center text-primary-500" aria-hidden="true">
                    <span className="w-px h-2.5 bg-current" />
                    <span className="h-[2px] flex-1 bg-current" />
                    <span className="w-px h-2.5 bg-current" />
                  </span>
                </span>
              </h1>

              <p className="mt-10 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed text-pretty animate-fade-in-delay-2">
                Purpose-built platforms for construction companies. When your operations
                outgrow spreadsheets and off-the-shelf tools, we build the system that
                puts you back in control.
              </p>

              <div className="mt-11 flex flex-col sm:flex-row sm:items-center gap-5 animate-fade-in-delay-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
                >
                  Book a discovery call
                  <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-ink font-medium link-draw self-start sm:self-auto">
                  View our work
                  <ArrowRight size={16} weight="bold" className="text-primary-600" />
                </Link>
              </div>
            </div>

            {/* Drawing / spec sheet */}
            <div className="lg:col-span-5 animate-fade-in-delay-3">
              <div className="tick-frame bg-paper-50 border border-ink shadow-sheet">
                <div className="border-b border-line px-5 py-3 flex items-center justify-between">
                  <DimLabel>Sheet · 01</DimLabel>
                  <DimLabel>BuildKit Labs</DimLabel>
                </div>
                <div className="px-4 pt-4">
                  <BlueprintPlan className="w-full h-auto" />
                </div>
                <dl className="grid grid-cols-2 border-t border-line">
                  {SPEC_FIELDS.map(([k, v], i) => (
                    <div key={k} className={`px-5 py-3.5 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-line`}>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-400 mb-1">{k}</dt>
                      <dd className="text-sm font-medium text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-line px-5 py-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-600">Accepting new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Title-block meta strip ─────────────────────────────────── */}
      <section className="border-b border-line bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line font-mono">
            {[
              ['Est.', 'North Texas'],
              ['Discipline', 'Software / Web'],
              ['Clients', 'Construction & trades'],
              ['Engagement', 'Fixed-scope builds'],
            ].map(([k, v], i) => (
              <div key={k} className={`px-5 py-4 ${i >= 2 ? 'border-t md:border-t-0 border-line' : ''}`}>
                <div className="text-[10px] uppercase tracking-widest text-ink-400 mb-1">{k}</div>
                <div className="text-[13px] text-ink font-sans font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <Kicker index="02" className="mb-5">What we deliver</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance">
                Built for how construction works.
              </h2>
            </div>
            <p className="text-ink-500 max-w-sm leading-relaxed md:text-right">
              Not generic software. Not off-the-shelf templates. Everything is drawn
              around your specific operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

            {/* Large: Custom Software */}
            <article className="tick-frame lg:col-span-3 group bg-paper-50 border border-line card-hover p-8 md:p-10 flex flex-col min-h-[340px]">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 border border-ink text-ink">
                  <Stack size={24} weight="regular" />
                </span>
                <DimLabel>Fig. 01 / Service</DimLabel>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Custom software</h3>
              <p className="text-ink-500 leading-relaxed mb-7 max-w-md">
                Operations platforms, CRM systems, dispatch tools, mobile crew apps.
                Built specifically for construction workflows — not adapted from
                something else.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Dispatch', 'Crew mgmt', 'Job tracking', 'CRM', 'Mobile apps'].map(t => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-wide text-ink-600 border border-line px-2.5 py-1">{t}</span>
                ))}
              </div>
              <Link href="/services" className="mt-auto inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group/l">
                Learn more
                <ArrowRight size={15} weight="bold" className="transition-transform group-hover/l:translate-x-1" />
              </Link>
            </article>

            {/* Two stacked */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { Icon: Browser, n: 'Fig. 02', title: 'Web development', body: 'Modern websites for any business. Custom-coded, mobile-first, delivered fast — no templates, no monthly fees.' },
                { Icon: Compass, n: 'Fig. 03', title: 'Tech consulting', body: 'Strategic guidance on automation, digital transformation, and making smart technology decisions.' },
              ].map(({ Icon, n, title, body }) => (
                <article key={title} className="group bg-paper-50 border border-line card-hover p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 border border-ink text-ink">
                      <Icon size={20} weight="regular" />
                    </span>
                    <DimLabel>{n}</DimLabel>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-5">{body}</p>
                  <Link href="/services" className="mt-auto inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group/l">
                    Learn more
                    <ArrowRight size={14} weight="bold" className="transition-transform group-hover/l:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers (dimensioned spec) ─────────────────────────────── */}
      <section className="border-b border-line bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-line">
            {NUMBERS.map(([val, label, ref], i) => (
              <div key={ref} className={`px-4 md:px-8 py-8 ${i < 2 ? 'border-b md:border-b-0 border-line' : ''} ${i % 2 === 1 ? 'border-l md:border-l' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-ink tabular tracking-tight">{val}</span>
                  <span className="font-mono text-[10px] text-ink-400 mt-2">{ref}</span>
                </div>
                <p className="text-ink-500 text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio plates ───────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Kicker index="03" className="mb-5">Recent work</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">Software we&apos;ve shipped.</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-ink font-medium link-draw self-start md:self-auto">
              See all projects
              <ArrowRight size={16} weight="bold" className="text-primary-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { plate: 'Plate 01', cat: 'Custom software', title: 'Operations command center', body: 'Centralized dispatch and crew management for a multi-location construction services company across DFW.', stat: '+40% efficiency', Mock: DashboardMockup },
              { plate: 'Plate 02', cat: 'Custom CRM', title: 'Automated sales engine', body: 'CRM platform for a commercial roofing company — lead scoring, automated follow-ups, and pipeline visibility.', stat: '+60% conversion', Mock: PipelineMockup },
              { plate: 'Plate 03', cat: 'Web development', title: 'Digital presence overhaul', body: 'Website rebuilds for construction and home-services companies. Mobile-first, SEO-optimized, conversion-focused.', stat: '+120% inquiries', Mock: BeforeAfterMockup },
            ].map(({ plate, cat, title, body, stat, Mock }) => (
              <article key={title} className="group bg-paper-50 border border-line card-hover flex flex-col">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-line">
                  <DimLabel>{plate}</DimLabel>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-primary-600 border border-primary-200 px-2 py-0.5 bg-primary-50">{cat}</span>
                </div>
                <div className="p-5 border-b border-line bg-paper-100">
                  <Mock />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-1">{body}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <span className="text-primary-600 font-bold text-sm tabular">{stat}</span>
                    <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-ink-500 hover:text-ink text-sm font-medium transition-colors">
                      Case study <ArrowUpRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Web dev — general notes ────────────────────────────────── */}
      <section className="border-b border-line bg-paper-100 relative overflow-hidden">
        <div className="absolute inset-0 draft-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: pitch + pricing */}
            <div className="lg:col-span-5">
              <Kicker index="04" className="mb-5">Web development for local business</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 text-balance">
                Need a new website?
              </h2>
              <p className="text-lg text-ink-500 leading-relaxed mb-10 max-w-md">
                Fast turnaround. Custom code. No monthly fees. For DFW businesses in any
                trade — restaurants, law firms, contractors, retail, and more.
              </p>

              <div className="border border-ink bg-paper-50 p-6 mb-8 max-w-sm">
                <DimLabel>Estimate range</DimLabel>
                <div className="text-3xl font-bold text-ink tabular mt-2 mb-1">$1,000 – $8,000</div>
                <p className="text-ink-500 text-sm">Fixed scope, quoted per project.</p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
              >
                Get a free website audit
                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: general notes list */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-ink">
                <DimLabel>General notes</DimLabel>
                <span className="h-px flex-1 bg-line" />
                <DimLabel>03 items</DimLabel>
              </div>
              <ol className="divide-y divide-line border-b border-line">
                {NOTES.map(([n, title, body]) => (
                  <li key={n} className="grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-7 group">
                    <span className="font-mono text-xl text-primary-600 tabular pt-0.5">{n}</span>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-1.5 flex items-center gap-2">
                        {title}
                        <Check size={16} weight="bold" className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-ink-500 leading-relaxed max-w-lg">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sign-off CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />

        {/* Approval stamp */}
        <div className="pointer-events-none absolute top-10 right-6 md:right-16 rotate-[-9deg] hidden sm:block">
          <div className="border-2 border-primary-500/50 text-primary-500/60 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-center leading-tight">
            Approved<br />for construction
            <div className="mt-1 pt-1 border-t border-primary-500/40">BKL · {new Date().getFullYear()}</div>
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500 origin-center animate-draw-x" />
          <h2 className="text-4xl md:text-6xl font-bold text-ink tracking-tight mb-6 text-balance">
            Ready to build<br />something that lasts?
          </h2>
          <p className="text-lg text-ink-500 mb-11 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk through your operations. One call — no pitch deck, no runaround.
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
    </div>
  )
}
