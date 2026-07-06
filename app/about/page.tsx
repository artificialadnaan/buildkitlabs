import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight, User, Users, Wrench, ChartLineUp,
  Lightning, PuzzlePiece, CurrencyDollar, MapPin,
} from '@phosphor-icons/react/dist/ssr'
import JsonLd from '@/components/JsonLd'
import { Kicker, DimLabel } from '@/components/technical/marks'

export const metadata: Metadata = {
  title: 'About',
  description: 'BuildKit Labs is a construction technology consulting firm based in Dallas-Fort Worth. We build custom software and modern websites for construction and service companies.',
  keywords: ['BuildKit Labs', 'construction technology consulting DFW', 'about BuildKit Labs', 'Dallas software development team'],
  alternates: {
    canonical: 'https://buildkitlabs.com/about',
  },
}

const STATS = [
  ['50+', 'Projects delivered across construction, services, and business sectors', 'A-01'],
  ['15+', 'Years of combined experience in software development and construction tech', 'A-02'],
  ['100%', 'Client satisfaction rate — every engagement built on referrals and long-term relationships', 'A-03'],
]

const VALUES = [
  ['Industry expertise', 'We build software for construction and understand your industry inside and out.'],
  ['Real results', 'Every project is measured by impact — efficiency gains, revenue growth, and operational improvements.'],
  ['Partnership mindset', "We're invested in your success. We listen, we iterate, and we build solutions that work for your business."],
]

const SKILLS = ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Procore API', 'Playwright']

const REASONS = [
  { Icon: Wrench, ref: 'R-01', title: 'Industry deep knowledge', body: "We've spent years in the construction space. We understand dispatch, crew management, safety protocols, billing challenges, and what actually works operationally." },
  { Icon: ChartLineUp, ref: 'R-02', title: 'Proven track record', body: '50+ projects delivered with measurable results. Multi-location platforms. CRM systems that doubled conversion rates. Websites generating 3x the leads.' },
  { Icon: Lightning, ref: 'R-03', title: 'Modern technology', body: 'We build with current frameworks and best practices. Fast, secure, scalable, and built to last. No legacy code or outdated tech.' },
  { Icon: PuzzlePiece, ref: 'R-04', title: 'Custom & flexible', body: "We don't force you into rigid templates. We build what your business needs — custom features, integrations, and unconventional workflows." },
  { Icon: CurrencyDollar, ref: 'R-05', title: 'Transparent pricing', body: 'No surprise fees. Clear scopes, realistic timelines, and honest communication about what your project will cost and deliver.' },
  { Icon: MapPin, ref: 'R-06', title: 'Local support', body: "We're based in North Texas and understand the local construction market. We work with you in person and are accessible when you need help." },
]

export default function About() {
  return (
    <div>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BuildKit Labs',
        description: 'Construction technology consulting firm based in Dallas-Fort Worth.',
        url: 'https://buildkitlabs.com',
        email: 'hello@buildkitlabs.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dallas-Fort Worth',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 3 },
      }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/0 via-paper-200/0 to-paper-200 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-20">
          <Kicker index="01" className="mb-8 animate-fade-in">About BuildKit Labs</Kicker>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight text-balance max-w-3xl animate-fade-in-delay-1">
            Built by people who<br className="hidden md:block" /> understand construction.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed text-pretty animate-fade-in-delay-2">
            We spent years watching construction companies drown in manual processes
            while tech firms built software with no feel for the industry. That gap is
            what we fix.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <div>
              <Kicker index="02" className="mb-5">Company background</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance mb-8">
                Our story.
              </h2>
              <div className="space-y-5 text-ink-500 leading-relaxed max-w-xl">
                <p>
                  BuildKit Labs was founded on a simple observation: construction companies were drowning in manual processes while tech companies built software with no understanding of the industry. That gap frustrated us.
                </p>
                <p>
                  Our team spent years building software for construction companies, learning the intricacies of dispatch, crew management, client relationships, and project delivery. The best construction software isn&apos;t built by outsiders guessing at problems — it&apos;s built by people who understand the pain points.
                </p>
                <p>
                  Today, we combine deep construction industry knowledge with modern technology to build software that solves real problems. Multi-location operations platforms. CRM systems that doubled conversion rates. Websites that generate 3x the leads.
                </p>
              </div>
            </div>

            {/* Stat cards — dimensioned spec, offset stack */}
            <div className="space-y-4 lg:pt-14">
              {STATS.map(([val, label, ref], i) => (
                <div
                  key={ref}
                  className={`bg-paper-50 border border-line p-6 ${i === 1 ? 'lg:ml-8' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-ink tabular tracking-tight">{val}</span>
                    <DimLabel className="mt-2">{ref}</DimLabel>
                  </div>
                  <p className="text-ink-500 text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ─────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <Kicker index="03" className="mb-14">Mission and values</Kicker>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">Our mission.</h2>
              <p className="text-ink-500 leading-relaxed text-lg max-w-xl">
                To empower construction companies and North Texas businesses by building custom software that streamlines operations, accelerates growth, and drives real results. Great software shouldn&apos;t be complicated — it should be intuitive, reliable, and purpose-built for your industry.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-ink">
                <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Our values.</h2>
                <span className="h-px flex-1 bg-line ml-2" aria-hidden="true" />
                <DimLabel>03 principles</DimLabel>
              </div>
              <div className="space-y-6">
                {VALUES.map(([title, body]) => (
                  <div key={title} className="border-l-2 border-primary-500 pl-4">
                    <h3 className="font-bold text-ink mb-1">{title}</h3>
                    <p className="text-ink-500 text-sm leading-relaxed max-w-md">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <Kicker index="04" className="mb-5">Who you work with</Kicker>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-14">The team.</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Founder sheet */}
            <article className="tick-frame lg:col-span-2 bg-paper-50 border border-ink p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 border border-ink text-ink flex-shrink-0">
                    <User size={28} weight="regular" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">Adnaan Iqbal</h3>
                    <p className="text-primary-600 font-semibold text-sm">Founder &amp; Lead Developer</p>
                  </div>
                </div>
                <DimLabel>Fig. 01 / Founder</DimLabel>
              </div>
              <p className="text-ink-500 leading-relaxed mb-7 max-w-2xl">
                Full-stack developer specializing in custom software for construction and service companies. Adnaan builds operations platforms, CRM systems, and integration middleware for companies across the DFW area — and works directly with every client from discovery through delivery.
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="font-mono text-[11px] uppercase tracking-wide text-ink-600 border border-line px-2.5 py-1">{skill}</span>
                ))}
              </div>
            </article>

            {/* Team blurb */}
            <article className="bg-paper-50 border border-line p-8 flex flex-col justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 border border-ink text-ink mb-5">
                <Users size={24} weight="regular" />
              </span>
              <h3 className="text-lg font-bold text-ink mb-3">Lean by design.</h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                We work with a focused team of product strategists and project managers who keep builds on track. No bloated agencies, no layers of account managers — just the people doing the work.
              </p>
            </article>
          </div>

          {/* Direct-access callout */}
          <div className="border border-primary-200 bg-primary-50 p-7">
            <p className="text-ink-500 text-sm leading-relaxed">
              <span className="font-semibold text-ink">You work directly with us.</span> Every project means direct access to the developer building your software. No account managers, no ticket queues — straightforward communication at every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Construction Companies Choose Us ─────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <Kicker index="05" className="mb-5">Why choose us</Kicker>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance mb-14 max-w-3xl">
            Why construction companies choose BuildKit Labs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {REASONS.map(({ Icon, ref, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-ink text-ink flex-shrink-0">
                  <Icon size={20} weight="regular" />
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-ink">{title}</h3>
                    <DimLabel>{ref}</DimLabel>
                  </div>
                  <p className="text-ink-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sign-off CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500 origin-center animate-draw-x" />
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 text-balance">
            Let&apos;s build something great together.
          </h2>
          <p className="text-lg text-ink-500 mb-11 max-w-xl mx-auto leading-relaxed">
            Ready to talk about your project? Let&apos;s schedule a time to discuss your goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
          >
            Schedule a discovery call
            <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
