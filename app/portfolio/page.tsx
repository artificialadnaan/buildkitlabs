import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

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
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real projects. See how we've helped construction and service companies transform their operations.
          </p>
        </div>
      </section>

      {/* Project 1 */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/10 rounded-xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-semibold mb-4">
                      CUSTOM SOFTWARE
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-4">Operations Command Center</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Challenge</h4>
                      <p className="text-slate-300">
                        A multi-location construction services company was juggling spreadsheets, phone calls, and manual scheduling for 40+ crews across the DFW area. Job assignments were slow, crews didn't know where to go or when, and office managers were working 60+ hours per week just to coordinate operations.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Solution</h4>
                      <p className="text-slate-300">
                        We built a centralized operations platform with real-time job dispatch, crew management, and automated notifications. Dispatch teams can assign jobs in seconds. Crews receive updates via mobile app. Managers see everything on a live dashboard.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">Key Features</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Real-time job dispatch with route optimization</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> GPS tracking and crew location mapping</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Mobile app for job details, photos, signatures</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Automated crew scheduling and availability management</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Integration with QuickBooks for billing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-700">
                    <h4 className="font-bold text-slate-100 mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-3xl font-bold gradient-text">40%</div>
                        <p className="text-slate-400 text-sm mt-1">Faster dispatching</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">20hrs</div>
                        <p className="text-slate-400 text-sm mt-1">Weekly admin saved</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">35%</div>
                        <p className="text-slate-400 text-sm mt-1">Efficiency gain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Multi-Location Construction Operations Platform</h2>
              <p className="text-lg text-slate-300 mb-6">
                Centralized command center for dispatch, crew management, and job tracking across multiple service areas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Dispatch Dashboard</h4>
                    <p className="text-slate-400 text-sm">Real-time map view showing job locations, crew assignments, and status</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Mobile Crew App</h4>
                    <p className="text-slate-400 text-sm">Crews receive job details, navigate to locations, complete work with photos and signatures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Automated Notifications</h4>
                    <p className="text-slate-400 text-sm">Crews notified immediately when jobs are assigned with all necessary details</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Reporting & Analytics</h4>
                    <p className="text-slate-400 text-sm">Performance metrics, crew productivity, and operational insights</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Billing Integration</h4>
                    <p className="text-slate-400 text-sm">Auto-sync data with QuickBooks for invoicing and financial tracking</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 italic mb-6">
                "This platform transformed how we manage operations. What used to take 4 hours now takes 30 minutes. Our crews are happier, our managers have their nights back, and we're serving more customers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section className="section-padding bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/10 rounded-xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-semibold mb-4">
                      CUSTOM CRM
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-4">Automated Sales Engine</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Challenge</h4>
                      <p className="text-slate-300">
                        A commercial roofing and exterior services company was losing deals because follow-ups fell through the cracks. Sales team spent more time hunting for information than closing deals. Lead conversion was inconsistent at best.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Solution</h4>
                      <p className="text-slate-300">
                        Custom CRM platform with automated follow-up workflows, lead scoring, and deal pipeline visibility. When a lead comes in, the system automatically schedules follow-ups, sends reminders, and routes leads to the right salespeople.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">Key Features</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Lead capture from multiple sources</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Automated follow-up workflows and reminders</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Lead scoring and prioritization</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Quote generation and proposal tracking</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Sales pipeline visualization and forecasting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-700">
                    <h4 className="font-bold text-slate-100 mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-3xl font-bold gradient-text">60%</div>
                        <p className="text-slate-400 text-sm mt-1">Conversion increase</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">8hrs</div>
                        <p className="text-slate-400 text-sm mt-1">Weekly admin saved</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">3x</div>
                        <p className="text-slate-400 text-sm mt-1">Deal velocity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Sales-Focused CRM Platform</h2>
              <p className="text-lg text-slate-300 mb-6">
                Custom CRM built to accelerate sales, automate follow-ups, and improve team accountability.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Lead Pipeline Tracking</h4>
                    <p className="text-slate-400 text-sm">Visual pipeline showing where every opportunity stands in the sales process</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Automated Workflows</h4>
                    <p className="text-slate-400 text-sm">Triggers and automations ensure no lead falls through the cracks</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Proposal & Quote Management</h4>
                    <p className="text-slate-400 text-sm">Generate professional quotes with one click, track acceptance status</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Sales Analytics</h4>
                    <p className="text-slate-400 text-sm">Real-time dashboards showing conversion rates, deal value, and team performance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Mobile Access</h4>
                    <p className="text-slate-400 text-sm">Check pipeline, update deals, and send quotes from the field or office</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 italic mb-6">
                "We're closing more deals in less time. The system keeps us accountable and we never miss a follow-up anymore. Best investment we've made in our sales infrastructure."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3 */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/10 rounded-xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-semibold mb-4">
                      WEB DEVELOPMENT
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-100 mb-4">Digital Presence Overhaul</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Challenge</h4>
                      <p className="text-slate-300">
                        Multiple construction and home services companies had outdated websites that weren't generating leads. Sites were hard to navigate, looked unprofessional, didn't work on mobile, and ranked poorly in search results.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">The Solution</h4>
                      <p className="text-slate-300">
                        Complete website rebuilds with modern design, mobile-first development, SEO optimization, and conversion-focused layouts. Each site tells the company's story and makes it easy for prospects to get in touch.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary-400 mb-2">What We Built</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Professional, modern design specific to each company</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Mobile-first responsive design (works on all devices)</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> SEO optimization for local search</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Portfolio/gallery showcasing past work</li>
                        <li className="flex items-start"><span className="text-primary-400 mr-2">•</span> Contact forms and lead capture</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-700">
                    <h4 className="font-bold text-slate-100 mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-3xl font-bold gradient-text">120%</div>
                        <p className="text-slate-400 text-sm mt-1">Inquiry increase</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">1st</div>
                        <p className="text-slate-400 text-sm mt-1">Page ranking (local)</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">2.5x</div>
                        <p className="text-slate-400 text-sm mt-1">Traffic growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Modern Websites for Construction Companies</h2>
              <p className="text-lg text-slate-300 mb-6">
                Website rebuilds that improve rankings, generate leads, and establish professional credibility.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Mobile-First Design</h4>
                    <p className="text-slate-400 text-sm">Half of your customers browse on phones. Sites that work great on mobile.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">SEO Built-In</h4>
                    <p className="text-slate-400 text-sm">Optimized for search engines so prospects find you when they search for your services</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Lightning Fast</h4>
                    <p className="text-slate-400 text-sm">Optimized performance improves user experience and search rankings</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Lead Capture</h4>
                    <p className="text-slate-400 text-sm">Contact forms and CTAs designed to convert visitors into leads</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-slate-100">Easy to Maintain</h4>
                    <p className="text-slate-400 text-sm">Simple content management so you can update your own site</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 italic mb-6">
                "We went from an outdated site that looked like 2010 to something we're actually proud to share. Calls are up and I finally have a professional online presence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's talk about your project and how we can deliver similar results for your company.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
