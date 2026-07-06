import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight, Stack, Browser, Compass, Check,
} from '@phosphor-icons/react/dist/ssr'
import JsonLd from '@/components/JsonLd'
import { Kicker, DimLabel } from '@/components/technical/marks'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Construction software development, professional web design, and technology consulting for Dallas-Fort Worth businesses. Custom operations platforms, CRM systems, and modern websites.',
  keywords: ['construction software development', 'web development Fort Worth', 'tech consulting Dallas', 'custom CRM construction', 'website design DFW', 'website redesign DFW', 'affordable web development Dallas', 'custom website no monthly fees', 'small business website Fort Worth'],
  alternates: {
    canonical: 'https://buildkitlabs.com/services',
  },
}

/* ── Service 1 — Construction software ───────────────────────────── */
const CONSTRUCTION_BUILD = [
  ['Operations Platforms', 'Dispatch, scheduling, and crew coordination in one dashboard'],
  ['CRM Systems', 'Lead management, automated follow-ups, pipeline visibility'],
  ['Mobile Apps', 'Field tools for photos, timesheets, and job updates'],
  ['Integration Solutions', 'Connect your stack — QuickBooks, Procore, and more'],
  ['Custom Automation', 'Eliminate manual data entry and repetitive workflows'],
]

const CONSTRUCTION_WHY = [
  'Deep knowledge of construction operations',
  'Scalable — grows with your business',
  'Proven efficiency gains and reduced overhead',
  'Local DFW support, not a remote dev shop',
]

const CONSTRUCTION_SHIPPED = [
  ['Multi-Location Dispatch Platform', 'Real-time crew dispatch, route optimization, and automated job assignment across multiple service areas.'],
  ['Lead & Pipeline Management', 'Automated lead tracking, follow-up reminders, quote generation, and sales forecasting.'],
  ['Field Crew Management', 'Mobile-first tools for timesheets, photo documentation, job notes, and real-time status updates.'],
  ['Custom Integrations', 'Seamless connections to QuickBooks, ServiceTitan, Salesforce, or your existing tools.'],
]

/* ── Service 2 — Web design & development ────────────────────────── */
const WEB_DELIVER = [
  ['Custom Code', 'Modern frameworks, no WordPress bloat'],
  ['Quick Turnaround', 'Most sites shipped in 2–4 weeks'],
  ['SEO & Performance', 'Built-in analytics and search optimization'],
  ['Responsive Design', 'Pixel-perfect on every screen size'],
  ['Full Ownership', 'Source code yours. No lock-in, no surprises'],
]

const WEB_INDUSTRIES = [
  'Restaurants & Hospitality',
  'Law Firms & Legal',
  'Medical & Healthcare',
  'Contractors & Home Services',
  'Retail & E-Commerce',
  'Real Estate',
  'Professional Services',
]

const WEB_CARDS = [
  ['Modern Business Websites', 'Conversion-focused design that builds credibility and captures leads.'],
  ['E-Commerce Solutions', 'Full-featured stores with payments, inventory, and customer accounts.'],
  ['Responsive Design', 'Mobile-first — works flawlessly on every device.'],
  ['SEO & Performance', 'Fast load times, structured data, and local search optimization.'],
]

/* ── Service 3 — Technology consulting ───────────────────────────── */
const CONSULTING_SERVICES = [
  ['Technology Assessments', 'Audit your stack and find optimization opportunities'],
  ['Digital Strategy', 'Modernization roadmaps with timelines and ROI projections'],
  ['Automation Planning', 'Identify high-value workflows to automate'],
  ['Software Selection', 'Choose the right tools for your budget and scale'],
  ['Implementation Support', 'Hands-on guidance through deployments and training'],
]

const CONSULTING_WHO = [
  'Construction companies ready to modernize',
  'Leaders who want efficiency gains without the guesswork',
  'Teams evaluating custom vs. off-the-shelf solutions',
  'Organizations dealing with fragmented, manual workflows',
]

const CONSULTING_PROCESS = [
  ['Discovery Call', 'Understand your business, challenges, and goals'],
  ['Assessment', 'Deep dive into current systems, workflows, and pain points'],
  ['Strategy', 'Detailed recommendations with timelines and ROI projections'],
  ['Implementation', 'Optional hands-on support to bring the plan to life'],
]

/* Small reusable checklist item — hi-vis check + label/desc */
function CheckItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check size={16} weight="bold" className="text-primary-500 mt-0.5 shrink-0" />
      <span className="text-ink-500 text-sm leading-relaxed">
        <strong className="text-ink font-semibold">{label}:</strong> {desc}
      </span>
    </li>
  )
}

/* Arrow bullet — used for qualifying / audience lists */
function ArrowItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-ink-500 text-sm leading-relaxed">
      <ArrowRight size={15} weight="bold" className="text-primary-600 mt-0.5 shrink-0" />
      {children}
    </li>
  )
}

/* Subsection label — drafting hairline heading */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 mb-5 pb-2.5 border-b border-line font-mono text-[11px] uppercase tracking-widest text-ink-400">
      {children}
      <span className="h-px flex-1 bg-line" />
    </h3>
  )
}

/* Reference sheet — a bordered "sheet" listing example work / deliverables */
function ReferenceSheet({
  fig, title, count, items,
}: { fig: string; title: string; count: string; items: string[][] }) {
  return (
    <aside className="bg-paper-50 border border-line">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line">
        <DimLabel>{fig}</DimLabel>
        <DimLabel>{count} items</DimLabel>
      </div>
      <div className="px-5 pt-5">
        <h3 className="text-base font-bold text-ink">{title}</h3>
      </div>
      <ul className="mt-4 divide-y divide-line border-t border-line">
        {items.map(([t, d], i) => (
          <li key={t} className="px-5 py-4 hover:bg-paper-100 transition-colors">
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <h4 className="font-semibold text-ink text-sm">{t}</h4>
              <DimLabel className="shrink-0">{String(i + 1).padStart(2, '0')}</DimLabel>
            </div>
            <p className="text-ink-500 text-xs leading-relaxed">{d}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default function Services() {
  return (
    <div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Services | BuildKit Labs',
        description: 'Construction software development, web design, and technology consulting for DFW businesses.',
        url: 'https://buildkitlabs.com/services',
        provider: {
          '@type': 'LocalBusiness',
          name: 'BuildKit Labs',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'BuildKit Labs Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Software Development', description: 'Custom operations platforms, CRM systems, and mobile apps for construction companies.' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development', description: 'Modern, SEO-optimized websites for North Texas businesses.' }},
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technology Consulting', description: 'Digital strategy, automation planning, and technology assessments.' }},
          ],
        },
      }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-70 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-20">
          <Kicker index="01" className="mb-8 animate-fade-in">Our services</Kicker>
          <h1 className="text-[3.25rem] leading-[0.98] sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink text-balance max-w-4xl animate-fade-in-delay-1">
            Software that fits.<br className="hidden md:block" /> Websites that convert.
          </h1>
          <p className="mt-10 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed text-pretty animate-fade-in-delay-2">
            Custom software for construction. Modern websites for any business. Strategic
            consulting to tie it together.
          </p>
        </div>
      </section>

      {/* ── Service 1 · Construction software ────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 border border-ink text-ink">
                  <Stack size={24} weight="regular" />
                </span>
                <DimLabel>Fig. 01 / Service</DimLabel>
              </div>

              <Kicker index="02" className="mb-5">Construction software</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance mb-6">
                Construction software development
              </h2>
              <p className="text-ink-500 leading-relaxed mb-12 max-w-xl">
                Built for construction from the ground up — not adapted from generic tools.
                Every feature maps to how your crews, dispatch teams, and office actually work.
              </p>

              <FieldLabel>What we build</FieldLabel>
              <ul className="space-y-3.5 mb-12">
                {CONSTRUCTION_BUILD.map(([label, desc]) => (
                  <CheckItem key={label} label={label} desc={desc} />
                ))}
              </ul>

              <FieldLabel>Why us</FieldLabel>
              <ul className="space-y-2.5">
                {CONSTRUCTION_WHY.map(item => (
                  <ArrowItem key={item}>{item}</ArrowItem>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ReferenceSheet
                fig="Fig. 01a / Reference"
                title="What we&#39;ve shipped"
                count="04"
                items={CONSTRUCTION_SHIPPED}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 2 · Web design & development ─────────────────────── */}
      <section className="border-b border-line bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-7 lg:order-2">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 border border-ink text-ink">
                  <Browser size={24} weight="regular" />
                </span>
                <DimLabel>Fig. 02 / Service</DimLabel>
              </div>

              <Kicker index="03" className="mb-5">Web development</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance mb-6">
                Web design &amp; development
              </h2>
              <p className="text-ink-500 leading-relaxed mb-6 max-w-xl">
                Your website is your first impression. We build modern, fast, mobile-first
                sites for any local business — not templates, not page builders.
              </p>
              <p className="flex items-start gap-3 mb-12 max-w-md text-ink font-semibold">
                <span className="mt-2.5 h-[2px] w-8 shrink-0 bg-primary-500" aria-hidden="true" />
                <span>Custom code. 2–4 week turnaround. No monthly fees. From $1,000.</span>
              </p>

              <FieldLabel>What we deliver</FieldLabel>
              <ul className="space-y-3.5 mb-12">
                {WEB_DELIVER.map(([label, desc]) => (
                  <CheckItem key={label} label={label} desc={desc} />
                ))}
              </ul>

              <FieldLabel>Industries we serve</FieldLabel>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {WEB_INDUSTRIES.map(item => (
                  <ArrowItem key={item}>{item}</ArrowItem>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:order-1 lg:sticky lg:top-28">
              <ReferenceSheet
                fig="Fig. 02a / Deliverables"
                title="What we deliver"
                count="04"
                items={WEB_CARDS}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 3 · Technology consulting ────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 border border-ink text-ink">
                  <Compass size={24} weight="regular" />
                </span>
                <DimLabel>Fig. 03 / Service</DimLabel>
              </div>

              <Kicker index="04" className="mb-5">Tech consulting</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance mb-6">
                Technology consulting
              </h2>
              <p className="text-ink-500 leading-relaxed mb-12 max-w-xl">
                Not sure where to start? We help leaders make informed decisions about
                software, automation, and digital transformation — without the vendor spin.
              </p>

              <FieldLabel>Our consulting services</FieldLabel>
              <ul className="space-y-3.5 mb-12">
                {CONSULTING_SERVICES.map(([label, desc]) => (
                  <CheckItem key={label} label={label} desc={desc} />
                ))}
              </ul>

              <FieldLabel>Who should work with us</FieldLabel>
              <ul className="space-y-2.5">
                {CONSULTING_WHO.map(item => (
                  <ArrowItem key={item}>{item}</ArrowItem>
                ))}
              </ul>
            </div>

            {/* Process → drafting "general notes" ruled list */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <aside className="bg-paper-50 border border-line">
                <div className="flex items-center justify-between px-5 py-3 border-b border-ink">
                  <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-400">
                    Our consulting process
                  </h3>
                  <DimLabel>General notes</DimLabel>
                </div>
                <ol className="divide-y divide-line">
                  {CONSULTING_PROCESS.map(([title, desc], i) => (
                    <li key={title} className="grid grid-cols-[auto_1fr] gap-5 px-5 py-6 hover:bg-paper-100 transition-colors">
                      <span className="font-mono text-xl text-primary-600 tabular pt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-ink mb-1">{title}</h4>
                        <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sign-off CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 text-balance">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-ink-500 mb-11 max-w-xl mx-auto leading-relaxed">
            Let&apos;s have a conversation. We&apos;ll discuss your specific challenges and
            recommend the right solution for your business.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
          >
            Schedule a free consultation
            <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
