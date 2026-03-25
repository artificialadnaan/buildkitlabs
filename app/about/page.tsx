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
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">About BuildKit Labs</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A team of experienced developers and strategists dedicated to building software that transforms construction companies and North Texas businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-100 mb-8">Our Story</h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-12">
            <p>
              BuildKit Labs was founded on a simple observation: construction companies were drowning in manual processes while tech companies built software with no understanding of the industry. That gap frustrated us.
            </p>

            <p>
              Our team spent years building software for construction companies, learning the intricacies of dispatch, crew management, client relationships, and project delivery. We realized that the best construction software isn't built by outsiders guessing at problems—it's built by people who understand the pain points.
            </p>

            <p>
              Today, we combine deep construction industry knowledge with cutting-edge technology to build software that actually solves real problems. We've helped multi-location operations streamline dispatch, roofing companies accelerate sales, and service businesses modernize their operations.
            </p>

            <p>
              Beyond construction, we're passionate about helping all North Texas businesses leverage technology to grow. We've rebuilt websites, designed web applications, and consulted with dozens of companies on their digital transformation journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-slate-400">Projects delivered across construction, services, and business sectors</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-slate-400">Years of combined experience in software development and construction tech</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-slate-400">Client satisfaction rate with long-term relationships and referrals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To empower construction companies and North Texas businesses by building custom software that streamlines operations, accelerates growth, and drives real results. We believe that great software shouldn't be complicated—it should be intuitive, reliable, and purpose-built for your industry.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-primary-400 mb-2">Industry Expertise</h3>
                  <p className="text-slate-400">We don't just build software. We build software for construction, and we understand your industry inside and out.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-400 mb-2">Real Results</h3>
                  <p className="text-slate-400">Every project is measured by impact—efficiency gains, revenue growth, and operational improvements that matter to your bottom line.</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-400 mb-2">Partnership Mindset</h3>
                  <p className="text-slate-400">We're invested in your success. We listen, we iterate, and we build solutions that work for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-100 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Founder */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-1">Adnaan Iqbal</h3>
                <p className="text-primary-400 font-semibold mb-3">Founder & Lead Developer</p>
                <p className="text-slate-400 text-sm">
                  Full-stack developer specializing in custom software for construction and service companies. Builds operations platforms, CRM systems, and integration middleware across the DFW area.
                </p>
              </div>
            </div>

            {/* Card 2: PM 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-1">Product Strategist</h3>
                <p className="text-primary-400 font-semibold mb-3">Product Strategy</p>
                <p className="text-slate-400 text-sm">
                  Translates business requirements into technical roadmaps. Ensures every feature delivers measurable value and aligns with operational goals.
                </p>
              </div>
            </div>

            {/* Card 3: PM 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-1">Product Manager</h3>
                <p className="text-primary-400 font-semibold mb-3">Product Strategy</p>
                <p className="text-slate-400 text-sm">
                  Manages project timelines, stakeholder communication, and delivery workflows. Keeps builds on track and clients informed at every milestone.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Building With You</h3>
            <p className="text-slate-400 text-lg">
              Our team works directly with you throughout every project. You'll know who's building your software and have direct access to decision-makers. No account managers, no layers—just straightforward communication with the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Construction Companies Choose Us */}
      <section className="section-padding bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-100 mb-12 text-center">Why Construction Companies Choose BuildKit Labs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Industry Deep Knowledge</h3>
                <p className="text-slate-400">
                  We've spent years in the construction space. We understand dispatch, crew management, safety protocols, billing challenges, and what actually works operationally.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Proven Track Record</h3>
                <p className="text-slate-400">
                  We've delivered 50+ projects with measurable results. Multi-location operations platforms. CRM systems that doubled conversion rates. Websites generating 3x the leads.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0h-2m2 0v2m0-2v-2m2 0v2m0-2v-2m2 0h-2m0 0h-2m2 0v2m0-2v-2m-4-6h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Modern Technology</h3>
                <p className="text-slate-400">
                  We build with modern frameworks and best practices. Your software will be fast, secure, scalable, and built to last. No legacy code or outdated tech.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Custom & Flexible</h3>
                <p className="text-slate-400">
                  We don't force you into rigid templates. We build what your business needs—whether that's custom features, integrations, or unconventional workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Transparent Pricing</h3>
                <p className="text-slate-400">
                  No surprise fees. Clear project scopes, realistic timelines, and honest communication about what your project will cost and deliver.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Local Support</h3>
                <p className="text-slate-400">
                  We're based in North Texas and understand the local construction market. We work with you in person and are accessible when you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Ready to talk about your project? Let's schedule a time to discuss your goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
