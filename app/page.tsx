import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import DashboardMockup from '@/components/mockups/DashboardMockup'
import PipelineMockup from '@/components/mockups/PipelineMockup'
import BeforeAfterMockup from '@/components/mockups/BeforeAfterMockup'

export const metadata: Metadata = {
  title: 'BuildKit Labs | Custom Software & Web Development Dallas-Fort Worth',
  description: 'Custom software development for construction companies and professional web development for North Texas businesses. Operations platforms, CRM systems, and digital transformation in DFW.',
  keywords: ['custom software development Dallas', 'construction software DFW', 'web development Fort Worth', 'construction operations platform', 'construction CRM Texas', 'website redesign DFW', 'affordable web development Dallas', 'custom website no monthly fees', 'small business website Fort Worth'],
  alternates: {
    canonical: 'https://buildkitlabs.com',
  },
}

export default function Home() {
  return (
    <div className="pt-20">
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

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] bg-dark-950 flex items-center justify-center overflow-hidden">
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-bg opacity-100 pointer-events-none" />
        {/* Warm radial wash */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-400 text-xs font-medium mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block"></span>
            Dallas-Fort Worth, Texas
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-100 leading-[1.05] tracking-tight mb-8 animate-fade-in-delay-1">
            We Build Software<br />
            <span className="text-primary-500">That Works.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-delay-2">
            Purpose-built platforms for construction companies. When your operations outgrow spreadsheets and generic tools, we build the software that gets you back in control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="text-stone-400 hover:text-stone-100 font-medium text-base transition-colors duration-200 underline underline-offset-4 decoration-stone-700 hover:decoration-stone-400"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Services — asymmetric layout ─────────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="pt-20 pb-16 border-b border-stone-800/60">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Deliver</p>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-100 leading-tight">Built for how<br className="hidden md:block" /> construction works.</h2>
              </div>
              <p className="text-stone-400 max-w-sm text-base leading-relaxed md:text-right">
                Not generic software. Not off-the-shelf templates. Everything we build is designed around your specific operations.
              </p>
            </div>
          </div>

          {/* Services — large feature card + two smaller */}
          <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Large card: Custom Software */}
            <div className="lg:col-span-3 group p-10 rounded-2xl bg-dark-800 border border-stone-800 card-hover flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-7">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-100 mb-4">Custom Software</h3>
                <p className="text-stone-400 leading-relaxed mb-6">
                  Operations platforms, CRM systems, dispatch tools, mobile crew apps. Built specifically for construction workflows — not adapted from something else.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Dispatch', 'Crew Mgmt', 'Job Tracking', 'CRM', 'Mobile Apps'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-500 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <Link href="/services" className="mt-8 inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold text-sm transition-colors group/link">
                Learn more <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Two stacked smaller cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Web Development */}
              <div className="group p-8 rounded-2xl bg-dark-800 border border-stone-800 card-hover flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-primary-600/15 rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-100 mb-3">Web Development</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Modern websites for any business. Custom-coded, mobile-first, and delivered fast — no templates, no monthly fees.
                  </p>
                </div>
                <Link href="/services" className="mt-5 inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold text-sm transition-colors group/link">
                  Learn more <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Tech Consulting */}
              <div className="group p-8 rounded-2xl bg-dark-800 border border-stone-800 card-hover flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-primary-600/15 rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-100 mb-3">Tech Consulting</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Strategic guidance on automation, digital transformation, and making smart tech decisions.
                  </p>
                </div>
                <Link href="/services" className="mt-5 inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold text-sm transition-colors group/link">
                  Learn more <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers — horizontal rule style ─────────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800/60">
            <div className="px-8 py-6 first:pl-0 last:pr-0">
              <div className="text-4xl font-bold text-primary-500 mb-1">50+</div>
              <p className="text-stone-500 text-sm">Projects delivered</p>
            </div>
            <div className="px-8 py-6">
              <div className="text-4xl font-bold text-primary-500 mb-1">15+</div>
              <p className="text-stone-500 text-sm">Years combined experience</p>
            </div>
            <div className="px-8 py-6">
              <div className="text-4xl font-bold text-primary-500 mb-1">40%</div>
              <p className="text-stone-500 text-sm">Avg. efficiency gain</p>
            </div>
            <div className="px-8 py-6">
              <div className="text-4xl font-bold text-primary-500 mb-1">DFW</div>
              <p className="text-stone-500 text-sm">Local — North Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview — elevated prominence ───────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">Recent Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-100 leading-tight">Software we've shipped.</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-stone-400 hover:text-stone-100 font-medium text-sm transition-colors underline underline-offset-4 decoration-stone-700 hover:decoration-stone-400 self-start md:self-auto"
            >
              See all projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group rounded-2xl overflow-hidden bg-dark-800 border border-stone-800 card-hover flex flex-col">
              <div className="p-5 border-b border-stone-800/60">
                <DashboardMockup />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-4 self-start">
                  Custom Software
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Operations Command Center</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
                  Centralized dispatch and crew management for a multi-location construction services company across the DFW area.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-800/60">
                  <span className="text-primary-500 font-bold text-sm">+40% efficiency</span>
                  <Link href="/portfolio" className="text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors">
                    Case study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl overflow-hidden bg-dark-800 border border-stone-800 card-hover flex flex-col">
              <div className="p-5 border-b border-stone-800/60">
                <PipelineMockup />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-4 self-start">
                  Custom CRM
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Automated Sales Engine</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
                  CRM platform for a commercial roofing company. Lead scoring, automated follow-ups, and sales pipeline visibility.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-800/60">
                  <span className="text-primary-500 font-bold text-sm">+60% conversion</span>
                  <Link href="/portfolio" className="text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors">
                    Case study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl overflow-hidden bg-dark-800 border border-stone-800 card-hover flex flex-col">
              <div className="p-5 border-b border-stone-800/60">
                <BeforeAfterMockup />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-4 self-start">
                  Web Development
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Digital Presence Overhaul</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
                  Website rebuilds for construction and home services companies. Mobile-first, SEO-optimized, conversion-focused.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-800/60">
                  <span className="text-primary-500 font-bold text-sm">+120% inquiries</span>
                  <Link href="/portfolio" className="text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors">
                    Case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Business Web Dev ────────────────────────────────── */}
      <section className="bg-stone-900 border-b border-stone-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">Web Development for Local Businesses</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-100 leading-tight mb-4">Need a New Website?</h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
              Fast turnaround. Custom code. No monthly fees.
            </p>
          </div>

          {/* Three value prop cards — horizontal, numbered, top border accent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { num: '01', title: 'Custom Built', desc: 'Hand-coded websites, not WordPress templates. Your site is built from scratch with modern frameworks.' },
              { num: '02', title: 'Quick Turnaround', desc: 'Most sites delivered in 2-4 weeks. We move fast because we don\'t use bloated page builders.' },
              { num: '03', title: 'No Management Fees', desc: 'You own your website. No monthly retainers, no hosting lock-in, no surprise charges.' },
            ].map(card => (
              <div key={card.num} className="relative p-7 rounded-xl bg-dark-950/70 border border-stone-800 border-t-2 border-t-primary-600">
                <span className="text-primary-600/40 text-4xl font-bold absolute top-4 right-5 select-none">{card.num}</span>
                <h3 className="text-lg font-bold text-stone-100 mb-3 mt-1">{card.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing signal + CTA */}
          <div className="text-center">
            <p className="text-2xl font-bold text-stone-100 mb-2">Projects from $3,000 - $8,000</p>
            <p className="text-stone-500 text-sm mb-8">
              For DFW businesses in any industry — restaurants, law firms, contractors, retail, and more.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
            >
              Get a Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-950 overflow-hidden">
        {/* Blueprint grid subtle overlay */}
        <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          {/* Amber rule */}
          <div className="w-12 h-px bg-primary-600 mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Ready to build<br />something that lasts?
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Let's talk through your operations. One call — no pitch deck, no runaround.
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
  )
}
