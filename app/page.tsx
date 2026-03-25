import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BuildKit Labs | Custom Software & Web Development',
  description: 'Custom software development and web design for construction companies and North Texas businesses.',
}

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight">
              We Build the Software That{' '}
              <span className="gradient-text">Builds Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Purpose-built software for construction companies. Professional web development for North Texas businesses. We transform operations, automate workflows, and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-lg hover:bg-primary-500/10 transition-all duration-300 text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">What We Deliver</h2>
            <p className="text-xl text-slate-400">Comprehensive solutions tailored to construction and North Texas businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Custom Software</h3>
              <p className="text-slate-400 mb-4">
                Built specifically for construction operations—dispatching, crew management, job tracking, and more. Software that speaks your industry's language.
              </p>
              <Link href="/services" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center group">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Web Development</h3>
              <p className="text-slate-400 mb-4">
                Modern websites and web applications that represent your brand professionally. Designed for conversion, optimized for performance.
              </p>
              <Link href="/services" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center group">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">Tech Consulting</h3>
              <p className="text-slate-400 mb-4">
                Strategic guidance on technology adoption, digital transformation, and workflow optimization. We help you make smart tech decisions.
              </p>
              <Link href="/services" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center group">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50+</div>
              <p className="text-slate-400 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</div>
              <p className="text-slate-400 font-medium">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
              <p className="text-slate-400 font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">DFW</div>
              <p className="text-slate-400 font-medium">Local Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Recent Work</h2>
            <p className="text-xl text-slate-400 mb-8">Solutions we've built for construction and service companies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Operations Command Center</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Centralized operations platform for multi-location construction services company. Automated dispatching, real-time crew management, and comprehensive job tracking.
                </p>
                <p className="text-primary-400 font-semibold text-sm mb-4">+40% operational efficiency</p>
                <Link href="/portfolio" className="text-primary-400 hover:text-primary-300 font-semibold text-sm inline-flex items-center group/link">
                  View case study <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Automated Sales Engine</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Custom CRM platform built for commercial roofing and exterior services. Lead management, automated follow-ups, sales pipeline tracking, and performance analytics.
                </p>
                <p className="text-primary-400 font-semibold text-sm mb-4">+60% lead conversion</p>
                <Link href="/portfolio" className="text-primary-400 hover:text-primary-300 font-semibold text-sm inline-flex items-center group/link">
                  View case study <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow">
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/5 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.591-4.591a2 2 0 012.828 0L21 21" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Digital Presence Overhaul</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Website rebuilds for construction and home services companies. Modern design, mobile-first approach, SEO optimization, and conversion-focused layouts.
                </p>
                <p className="text-primary-400 font-semibold text-sm mb-4">+120% inquiry increase</p>
                <Link href="/portfolio" className="text-primary-400 hover:text-primary-300 font-semibold text-sm inline-flex items-center group/link">
                  View case study <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border-2 border-primary-500 text-primary-400 font-bold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's discuss your project and how we can drive real results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg"
          >
            Schedule a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
