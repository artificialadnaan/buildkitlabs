import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About',
  description: 'BuildKit Labs is a construction technology consulting firm based in Dallas-Fort Worth. We build custom software and modern websites for construction and service companies.',
  keywords: ['BuildKit Labs', 'construction technology consulting DFW', 'about BuildKit Labs', 'Dallas software development team'],
  alternates: {
    canonical: 'https://buildkitlabs.com/about',
  },
}

export default function About() {
  return (
    <div className="pt-20">
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
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">About BuildKit Labs</p>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Built by people who<br className="hidden md:block" /> understand construction.
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl leading-relaxed">
            We spent years watching construction companies drown in manual processes while tech firms built software with no feel for the industry. That gap is what we fix.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-stone-100 mb-8">Our Story</h2>
              <div className="space-y-5 text-stone-400 leading-relaxed">
                <p>
                  BuildKit Labs was founded on a simple observation: construction companies were drowning in manual processes while tech companies built software with no understanding of the industry. That gap frustrated us.
                </p>
                <p>
                  Our team spent years building software for construction companies, learning the intricacies of dispatch, crew management, client relationships, and project delivery. The best construction software isn't built by outsiders guessing at problems — it's built by people who understand the pain points.
                </p>
                <p>
                  Today, we combine deep construction industry knowledge with modern technology to build software that solves real problems. Multi-location operations platforms. CRM systems that doubled conversion rates. Websites that generate 3x the leads.
                </p>
              </div>
            </div>

            {/* Stat cards — vertical stack, not identical grid */}
            <div className="space-y-4 lg:pt-14">
              <div className="p-6 rounded-xl bg-dark-800 border border-stone-800">
                <div className="text-4xl font-bold text-primary-500 mb-1">50+</div>
                <p className="text-stone-500 text-sm">Projects delivered across construction, services, and business sectors</p>
              </div>
              <div className="p-6 rounded-xl bg-dark-800 border border-stone-800 ml-0 lg:ml-8">
                <div className="text-4xl font-bold text-primary-500 mb-1">15+</div>
                <p className="text-stone-500 text-sm">Years of combined experience in software development and construction tech</p>
              </div>
              <div className="p-6 rounded-xl bg-dark-800 border border-stone-800">
                <div className="text-4xl font-bold text-primary-500 mb-1">100%</div>
                <p className="text-stone-500 text-sm">Client satisfaction rate — every engagement built on referrals and long-term relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ─────────────────────────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-stone-100 mb-6">Our Mission</h2>
              <p className="text-stone-400 leading-relaxed text-lg">
                To empower construction companies and North Texas businesses by building custom software that streamlines operations, accelerates growth, and drives real results. Great software shouldn't be complicated — it should be intuitive, reliable, and purpose-built for your industry.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-stone-100 mb-6">Our Values</h2>
              <div className="space-y-5">
                <div className="pl-4 border-l-2 border-primary-600">
                  <h3 className="font-bold text-stone-200 mb-1">Industry Expertise</h3>
                  <p className="text-stone-500 text-sm">We build software for construction and understand your industry inside and out.</p>
                </div>
                <div className="pl-4 border-l-2 border-primary-600">
                  <h3 className="font-bold text-stone-200 mb-1">Real Results</h3>
                  <p className="text-stone-500 text-sm">Every project is measured by impact — efficiency gains, revenue growth, and operational improvements.</p>
                </div>
                <div className="pl-4 border-l-2 border-primary-600">
                  <h3 className="font-bold text-stone-200 mb-1">Partnership Mindset</h3>
                  <p className="text-stone-500 text-sm">We're invested in your success. We listen, we iterate, and we build solutions that work for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-stone-100 mb-14">The Team</h2>

          {/* Prominent founder card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 p-8 rounded-2xl bg-dark-800 border border-stone-700 relative overflow-hidden">
              {/* Amber corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-600/20 border border-primary-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-100">Adnaan Iqbal</h3>
                    <p className="text-primary-500 font-semibold text-sm">Founder & Lead Developer</p>
                  </div>
                </div>
                <p className="text-stone-400 leading-relaxed mb-6">
                  Full-stack developer specializing in custom software for construction and service companies. Adnaan builds operations platforms, CRM systems, and integration middleware for companies across the DFW area — and works directly with every client from discovery through delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Procore API', 'Playwright'].map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-500 text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Lean team blurb — no ghost cards */}
            <div className="p-8 rounded-2xl bg-dark-800/50 border border-stone-800 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-200 mb-3">Lean by design.</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                We work with a focused team of product strategists and project managers who keep builds on track. No bloated agencies, no layers of account managers — just the people doing the work.
              </p>
            </div>
          </div>

          {/* Direct access callout */}
          <div className="p-7 rounded-xl bg-primary-600/8 border border-primary-600/20">
            <p className="text-stone-300 text-sm leading-relaxed">
              <span className="font-semibold text-stone-100">You work directly with us.</span> Every project means direct access to the developer building your software. No account managers, no ticket queues — straightforward communication at every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Construction Companies Choose Us ─────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-stone-100 mb-14">Why Construction Companies Choose BuildKit Labs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Industry Deep Knowledge',
                body: "We've spent years in the construction space. We understand dispatch, crew management, safety protocols, billing challenges, and what actually works operationally.",
              },
              {
                icon: 'M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Proven Track Record',
                body: "50+ projects delivered with measurable results. Multi-location platforms. CRM systems that doubled conversion rates. Websites generating 3x the leads.",
              },
              {
                icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                title: 'Modern Technology',
                body: 'We build with current frameworks and best practices. Fast, secure, scalable, and built to last. No legacy code or outdated tech.',
              },
              {
                icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
                title: 'Custom & Flexible',
                body: "We don't force you into rigid templates. We build what your business needs — custom features, integrations, and unconventional workflows.",
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Transparent Pricing',
                body: 'No surprise fees. Clear scopes, realistic timelines, and honest communication about what your project will cost and deliver.',
              },
              {
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                title: 'Local Support',
                body: "We're based in North Texas and understand the local construction market. We work with you in person and are accessible when you need help.",
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary-600/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-stone-200 mb-1.5">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="w-12 h-px bg-primary-600 mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to talk about your project? Let's schedule a time to discuss your goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
