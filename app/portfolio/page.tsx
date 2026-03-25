import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
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

export default function Portfolio() {
  return (
    <div className="pt-20">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Portfolio | BuildKit Labs',
        description: 'Case studies of custom software and web development projects for construction companies.',
        url: 'https://buildkitlabs.com/portfolio',
      }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">Our Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight tracking-tight">
            Real software.<br className="hidden md:block" /> Real results.
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl leading-relaxed">
            Every project here started with a specific operational problem. Here's how we solved them.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Project 1: Operations Command Center ─────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Case study card */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-5">
                  CUSTOM SOFTWARE
                </div>
                <h3 className="text-2xl font-bold text-stone-100 mb-7">Operations Command Center</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Challenge</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      A multi-location construction services company was juggling spreadsheets, phone calls, and manual scheduling for 40+ crews across the DFW area. Job assignments were slow, crews didn't know where to go, and office managers were working 60+ hours per week just to coordinate operations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Solution</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Centralized operations platform with real-time job dispatch, crew management, and automated notifications. Dispatch teams assign jobs in seconds. Crews receive updates instantly. Managers see everything on a live dashboard.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-1.5">
                      {[
                        'Real-time job dispatch with route optimization',
                        'GPS tracking and crew location mapping',
                        'Mobile app for job details, photos, signatures',
                        'Automated crew scheduling and availability management',
                        'Integration with QuickBooks for billing',
                      ].map(f => (
                        <li key={f} className="flex items-start text-sm text-stone-400">
                          <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-800">
                  <h4 className="font-semibold text-stone-200 mb-5 text-sm uppercase tracking-wide">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary-500">40%</div>
                      <p className="text-stone-500 text-xs mt-1">Faster dispatching</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">20hrs</div>
                      <p className="text-stone-500 text-xs mt-1">Weekly admin saved</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">35%</div>
                      <p className="text-stone-500 text-xs mt-1">Efficiency gain</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail panel */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">
                Multi-Location Construction Operations Platform
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                Centralized command center for dispatch, crew management, and job tracking across multiple service areas.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: 'Dispatch Dashboard', body: 'Real-time map view showing job locations, crew assignments, and status' },
                  { title: 'Mobile Crew App', body: 'Crews receive job details, navigate to locations, complete work with photos and signatures' },
                  { title: 'Automated Notifications', body: 'Crews notified immediately when jobs are assigned with all necessary details' },
                  { title: 'Reporting & Analytics', body: 'Performance metrics, crew productivity, and operational insights' },
                  { title: 'Billing Integration', body: 'Auto-sync data with QuickBooks for invoicing and financial tracking' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-200 text-sm">{item.title} — </span>
                      <span className="text-stone-500 text-sm">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>

              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project 2: Automated Sales Engine ────────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Case study card */}
            <div>
              <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-5">
                  CUSTOM CRM
                </div>
                <h3 className="text-2xl font-bold text-stone-100 mb-7">Automated Sales Engine</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Challenge</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      A commercial roofing and exterior services company was losing deals because follow-ups fell through the cracks. Sales team spent more time hunting for information than closing deals. Lead conversion was inconsistent at best.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Solution</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Custom CRM with automated follow-up workflows, lead scoring, and deal pipeline visibility. When a lead comes in, the system automatically schedules follow-ups, sends reminders, and routes leads to the right salespeople.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-1.5">
                      {[
                        'Lead capture from multiple sources',
                        'Automated follow-up workflows and reminders',
                        'Lead scoring and prioritization',
                        'Quote generation and proposal tracking',
                        'Sales pipeline visualization and forecasting',
                      ].map(f => (
                        <li key={f} className="flex items-start text-sm text-stone-400">
                          <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-800">
                  <h4 className="font-semibold text-stone-200 mb-5 text-sm uppercase tracking-wide">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary-500">60%</div>
                      <p className="text-stone-500 text-xs mt-1">Conversion increase</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">8hrs</div>
                      <p className="text-stone-500 text-xs mt-1">Weekly admin saved</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">3x</div>
                      <p className="text-stone-500 text-xs mt-1">Deal velocity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail panel */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">
                Sales-Focused CRM Platform
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                Custom CRM built to accelerate sales, automate follow-ups, and improve team accountability.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: 'Lead Pipeline Tracking', body: 'Visual pipeline showing where every opportunity stands in the sales process' },
                  { title: 'Automated Workflows', body: 'Triggers and automations ensure no lead falls through the cracks' },
                  { title: 'Proposal & Quote Management', body: 'Generate professional quotes with one click, track acceptance status' },
                  { title: 'Sales Analytics', body: 'Real-time dashboards showing conversion rates, deal value, and team performance' },
                  { title: 'Mobile Access', body: 'Check pipeline, update deals, and send quotes from the field or office' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-200 text-sm">{item.title} — </span>
                      <span className="text-stone-500 text-sm">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>

              <PipelineMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Project 3: Digital Presence Overhaul ─────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Case study card */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
                <div className="inline-block px-2.5 py-1 rounded-md bg-primary-600/15 text-primary-400 text-xs font-semibold mb-5">
                  WEB DEVELOPMENT
                </div>
                <h3 className="text-2xl font-bold text-stone-100 mb-7">Digital Presence Overhaul</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Challenge</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Multiple construction and home services companies had outdated websites that weren't generating leads. Sites were hard to navigate, looked unprofessional, didn't work on mobile, and ranked poorly in search results.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">The Solution</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Complete website rebuilds with modern design, mobile-first development, SEO optimization, and conversion-focused layouts. Each site tells the company's story and makes it easy for prospects to get in touch.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-300 mb-2 text-sm uppercase tracking-wide">What We Built</h4>
                    <ul className="space-y-1.5">
                      {[
                        'Professional, modern design specific to each company',
                        'Mobile-first responsive design across all devices',
                        'SEO optimization for local search',
                        'Portfolio/gallery showcasing past work',
                        'Contact forms and lead capture',
                      ].map(f => (
                        <li key={f} className="flex items-start text-sm text-stone-400">
                          <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-800">
                  <h4 className="font-semibold text-stone-200 mb-5 text-sm uppercase tracking-wide">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary-500">120%</div>
                      <p className="text-stone-500 text-xs mt-1">Inquiry increase</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">1st</div>
                      <p className="text-stone-500 text-xs mt-1">Page ranking (local)</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-500">2.5x</div>
                      <p className="text-stone-500 text-xs mt-1">Traffic growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail panel */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-5 leading-tight">
                Modern Websites for Construction Companies
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                Website rebuilds that improve rankings, generate leads, and establish professional credibility.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: 'Mobile-First Design', body: 'Half of your customers browse on phones. Sites that work great on mobile.' },
                  { title: 'SEO Built-In', body: 'Optimized for search engines so prospects find you when they search for your services' },
                  { title: 'Lightning Fast', body: 'Optimized performance improves user experience and search rankings' },
                  { title: 'Lead Capture', body: 'Contact forms and CTAs designed to convert visitors into leads' },
                  { title: 'Easy to Maintain', body: 'Simple content management so you can update your own site' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-200 text-sm">{item.title} — </span>
                      <span className="text-stone-500 text-sm">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>

              <BeforeAfterMockup />
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Let's talk about your project and how we can deliver similar results for your company.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-base shadow-glow"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
