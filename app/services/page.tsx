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
        <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Complete solutions for construction<br className="hidden md:block" /> companies — and modern websites<br className="hidden md:block" /> for any business.
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl leading-relaxed">
            Custom software for construction operations. Fast, affordable websites for local businesses everywhere. Strategic tech consulting to tie it all together.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Service 1: Construction Software ─────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-7">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Construction Software Development</h2>
              <p className="text-stone-400 leading-relaxed mb-7">
                We don't just build software — we build software that understands construction. From dispatching and crew management to job tracking and invoicing, every feature is designed with your industry's unique workflows in mind.
              </p>

              <h3 className="text-lg font-bold text-stone-200 mb-4">What We Build</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: 'Operations Platforms', desc: 'Centralized dashboards for dispatch, scheduling, and team coordination' },
                  { label: 'CRM Systems', desc: 'Lead management, automated follow-ups, and sales pipeline tracking' },
                  { label: 'Mobile Apps', desc: 'Field tools for crews — photos, timesheets, job status updates' },
                  { label: 'Integration Solutions', desc: 'Connect your software ecosystem — accounting, project management, customer data' },
                  { label: 'Custom Automation', desc: 'Workflows that eliminate manual data entry and reduce human error' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-1 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-stone-200 mb-4">Why Construction Companies Choose Us</h3>
              <ul className="space-y-2">
                {[
                  'Deep understanding of construction operations and workflows',
                  'Scalable solutions that grow with your business',
                  'Proven ROI through efficiency gains and reduced overhead',
                  'Local support — we understand DFW\'s construction market',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Example cards */}
            <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8 order-2 lg:order-1">
              <h3 className="text-base font-semibold text-stone-300 mb-6">What we deliver</h3>
              <div className="space-y-4">
                {[
                  { title: 'Modern Business Websites', desc: 'Professional sites built for conversion — showcasing your services, building credibility, and capturing leads.' },
                  { title: 'E-Commerce Solutions', desc: 'Full-featured online stores with inventory management, payment processing, and customer accounts.' },
                  { title: 'Responsive Design', desc: 'Mobile-first development that works flawlessly across all devices and screen sizes.' },
                  { title: 'SEO & Performance', desc: 'Built for search engines and speed — fast loading times, structured data, and ranking optimization.' },
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl bg-dark-900/60 border-l-2 border-primary-600">
                    <h4 className="font-semibold text-stone-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-7">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Web Design & Development</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Your website is often the first impression clients have of your business. We create modern, fast, mobile-first websites that build trust, communicate value, and drive conversions — for any local business, not just construction.
              </p>
              <p className="text-primary-500 font-semibold text-sm mb-7">
                Custom code. 2-4 week turnaround. No monthly fees. Projects from $3,000 - $8,000.
              </p>

              <h3 className="text-lg font-bold text-stone-200 mb-4">What We Deliver</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: 'Custom Code', desc: 'Hand-coded with modern frameworks — no WordPress templates or bloated page builders' },
                  { label: 'Quick Turnaround', desc: 'Most sites delivered in 2-4 weeks because we build lean and move fast' },
                  { label: 'SEO & Performance', desc: 'Structured for search engines, built-in analytics, and conversion tracking' },
                  { label: 'Responsive Design', desc: 'Mobile-first development that works flawlessly across all devices and screen sizes' },
                  { label: 'Full Ownership', desc: 'You get the source code, hosting guidance, and complete control. No lock-in, no surprise charges' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-1 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-stone-200 mb-4">Industries We Serve</h3>
              <ul className="space-y-2">
                {[
                  'Restaurants & Hospitality',
                  'Law Firms & Legal Services',
                  'Medical Practices & Healthcare',
                  'Contractors & Home Services',
                  'Retail & E-Commerce',
                  'Real Estate & Property Management',
                  'Professional Services & Consulting',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="w-12 h-12 bg-primary-600/15 rounded-xl flex items-center justify-center mb-7">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">Technology Consulting</h2>
              <p className="text-stone-400 leading-relaxed mb-7">
                Not sure where to start with technology? We help business leaders and operations managers make informed decisions about software, automation, and digital transformation.
              </p>

              <h3 className="text-lg font-bold text-stone-200 mb-4">Our Consulting Services</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: 'Technology Assessments', desc: 'Evaluate your current tech stack and identify optimization opportunities' },
                  { label: 'Digital Strategy', desc: 'Roadmaps for modernizing operations, improving efficiency, and scaling growth' },
                  { label: 'Automation Planning', desc: 'Identify workflows ripe for automation and calculate ROI' },
                  { label: 'Software Selection', desc: 'Help you choose the right tools for your needs, budget, and scale' },
                  { label: 'Implementation Support', desc: 'Guidance through deployments and team training' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-1 flex-shrink-0 text-sm">✓</span>
                    <span className="text-stone-400 text-sm"><strong className="text-stone-300">{item.label}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-stone-200 mb-4">Who Should Work With Us</h3>
              <ul className="space-y-2">
                {[
                  'Construction companies ready to modernize operations',
                  'Business leaders wanting to improve efficiency and reduce costs',
                  'Organizations evaluating custom software vs. off-the-shelf solutions',
                  'Teams struggling with fragmented systems and manual workflows',
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
