import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Construction software development, professional web design, and technology consulting for Dallas-Fort Worth businesses. Custom operations platforms, CRM systems, and modern websites.',
  keywords: ['construction software development', 'web development Fort Worth', 'tech consulting Dallas', 'custom CRM construction', 'website design DFW', 'website redesign DFW', 'affordable web development Dallas', 'custom website no monthly fees', 'small business website Fort Worth'],
  alternates: {
    canonical: 'https://buildkitlabs.com/services',
  },
}

export default function Services() {
  return (
    <div className="pt-20">
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
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-45 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Software that fits.<br className="hidden md:block" /> Websites that convert.
          </h1>
          <p className="text-xl text-stone-400 max-w-xl leading-relaxed">
            Custom software for construction. Modern websites for any business. Strategic consulting to tie it together.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Service 1: Construction Software ─────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Construction Software Development</h2>
              <p className="text-stone-400 leading-relaxed mb-10">
                Built for construction from the ground up — not adapted from generic tools. Every feature maps to how your crews, dispatch teams, and office actually work.
              </p>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">What We Build</h3>
              <ul className="space-y-3 mb-10">
                {[
                  { label: 'Operations Platforms', desc: 'Dispatch, scheduling, and crew coordination in one dashboard' },
                  { label: 'CRM Systems', desc: 'Lead management, automated follow-ups, pipeline visibility' },
                  { label: 'Mobile Apps', desc: 'Field tools for photos, timesheets, and job updates' },
                  { label: 'Integration Solutions', desc: 'Connect your stack — QuickBooks, Procore, and more' },
                  { label: 'Custom Automation', desc: 'Eliminate manual data entry and repetitive workflows' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-0.5 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">Why Us</h3>
              <ul className="space-y-2.5">
                {[
                  'Deep knowledge of construction operations',
                  'Scalable — grows with your business',
                  'Proven efficiency gains and reduced overhead',
                  'Local DFW support, not a remote dev shop',
                ].map(item => (
                  <li key={item} className="text-stone-400 text-sm flex items-center gap-2">
                    <span className="text-primary-500 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Example cards */}
            <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
              <h3 className="text-base font-semibold text-stone-300 mb-6">What we've shipped</h3>
              <div className="space-y-4">
                {[
                  { title: 'Multi-Location Dispatch Platform', desc: 'Real-time crew dispatch, route optimization, and automated job assignment across multiple service areas.' },
                  { title: 'Lead & Pipeline Management', desc: 'Automated lead tracking, follow-up reminders, quote generation, and sales forecasting.' },
                  { title: 'Field Crew Management', desc: 'Mobile-first tools for timesheets, photo documentation, job notes, and real-time status updates.' },
                  { title: 'Custom Integrations', desc: 'Seamless connections to QuickBooks, ServiceTitan, Salesforce, or your existing tools.' },
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl bg-dark-900/60 border-l-2 border-primary-600">
                    <h4 className="font-semibold text-stone-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 2: Web Development ────────────────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Example cards */}
            <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8 order-2 lg:order-1">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-6">What we deliver</h3>
              <div className="space-y-3">
                {[
                  { title: 'Modern Business Websites', desc: 'Conversion-focused design that builds credibility and captures leads.' },
                  { title: 'E-Commerce Solutions', desc: 'Full-featured stores with payments, inventory, and customer accounts.' },
                  { title: 'Responsive Design', desc: 'Mobile-first — works flawlessly on every device.' },
                  { title: 'SEO & Performance', desc: 'Fast load times, structured data, and local search optimization.' },
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl bg-dark-900/60 border-l-2 border-primary-600">
                    <h4 className="font-semibold text-stone-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Web Design & Development</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Your website is your first impression. We build modern, fast, mobile-first sites for any local business — not templates, not page builders.
              </p>
              <p className="text-primary-500 font-semibold text-sm mb-10">
                Custom code. 2–4 week turnaround. No monthly fees. From $3,000.
              </p>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">What We Deliver</h3>
              <ul className="space-y-3 mb-10">
                {[
                  { label: 'Custom Code', desc: 'Modern frameworks, no WordPress bloat' },
                  { label: 'Quick Turnaround', desc: 'Most sites shipped in 2–4 weeks' },
                  { label: 'SEO & Performance', desc: 'Built-in analytics and search optimization' },
                  { label: 'Responsive Design', desc: 'Pixel-perfect on every screen size' },
                  { label: 'Full Ownership', desc: 'Source code yours. No lock-in, no surprises' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-0.5 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">Industries We Serve</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {[
                  'Restaurants & Hospitality',
                  'Law Firms & Legal',
                  'Medical & Healthcare',
                  'Contractors & Home Services',
                  'Retail & E-Commerce',
                  'Real Estate',
                  'Professional Services',
                ].map(item => (
                  <li key={item} className="text-stone-400 text-sm flex items-center gap-2">
                    <span className="text-primary-500 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 3: Tech Consulting ────────────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Technology Consulting</h2>
              <p className="text-stone-400 leading-relaxed mb-10">
                Not sure where to start? We help leaders make informed decisions about software, automation, and digital transformation — without the vendor spin.
              </p>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">Our Consulting Services</h3>
              <ul className="space-y-3 mb-10">
                {[
                  { label: 'Technology Assessments', desc: 'Audit your stack and find optimization opportunities' },
                  { label: 'Digital Strategy', desc: 'Modernization roadmaps with timelines and ROI projections' },
                  { label: 'Automation Planning', desc: 'Identify high-value workflows to automate' },
                  { label: 'Software Selection', desc: 'Choose the right tools for your budget and scale' },
                  { label: 'Implementation Support', desc: 'Hands-on guidance through deployments and training' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-0.5 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-5">Who Should Work With Us</h3>
              <ul className="space-y-2.5">
                {[
                  'Construction companies ready to modernize',
                  'Leaders who want efficiency gains without the guesswork',
                  'Teams evaluating custom vs. off-the-shelf solutions',
                  'Organizations dealing with fragmented, manual workflows',
                ].map(item => (
                  <li key={item} className="text-stone-400 text-sm flex items-center gap-2">
                    <span className="text-primary-500 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process steps */}
            <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
              <h3 className="text-base font-semibold text-stone-300 mb-8">Our Consulting Process</h3>
              <div className="space-y-7">
                {[
                  { n: '1', title: 'Discovery Call', desc: 'Understand your business, challenges, and goals' },
                  { n: '2', title: 'Assessment', desc: 'Deep dive into current systems, workflows, and pain points' },
                  { n: '3', title: 'Strategy', desc: 'Detailed recommendations with timelines and ROI projections' },
                  { n: '4', title: 'Implementation', desc: 'Optional hands-on support to bring the plan to life' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-dark-950 font-bold text-sm">
                      {step.n}
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-semibold text-stone-200 mb-1 text-sm">{step.title}</h4>
                      <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="w-12 h-px bg-primary-600 mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Let's have a conversation. We'll discuss your specific challenges and recommend the right solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
