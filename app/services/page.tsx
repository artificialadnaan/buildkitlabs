import Link from 'next/link'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Construction software development, professional web design, and technology consulting for Dallas-Fort Worth businesses. Custom operations platforms, CRM systems, and modern websites.',
  keywords: ['construction software development', 'web development Fort Worth', 'tech consulting Dallas', 'custom CRM construction', 'website design DFW'],
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
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Complete solutions designed for construction companies and local North Texas businesses
          </p>
        </div>
      </section>

      {/* Service 1: Construction Software */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Construction Software Development</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                We don't just build software—we build software that understands construction. From dispatching and crew management to job tracking and invoicing, every feature is designed with your industry's unique workflows in mind.
              </p>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">What We Build:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Operations Platforms:</strong> Centralized dashboards for dispatch, scheduling, and team coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>CRM Systems:</strong> Lead management, automated follow-ups, and sales pipeline tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Mobile Apps:</strong> Field tools for crews—photos, timesheets, job status updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Integration Solutions:</strong> Connect your software ecosystem—accounting, project management, customer data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Custom Automation:</strong> Workflows that eliminate manual data entry and reduce human error</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">Why Construction Companies Choose Us:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Deep understanding of construction operations and workflows</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Scalable solutions that grow with your business</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Proven ROI through efficiency gains and reduced overhead</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Local support—we understand DFW's construction market</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Multi-Location Dispatch Platform</h4>
                  <p className="text-slate-400 text-sm">Real-time crew dispatch, route optimization, and automated job assignment across multiple service areas.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Lead & Pipeline Management</h4>
                  <p className="text-slate-400 text-sm">Automated lead tracking, follow-up reminders, quote generation, and sales forecasting.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Field Crew Management</h4>
                  <p className="text-slate-400 text-sm">Mobile-first tools for timesheets, photo documentation, job notes, and real-time status updates.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Custom Integrations</h4>
                  <p className="text-slate-400 text-sm">Seamless connections to QuickBooks, ServiceTitan, Salesforce, or your existing tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Web Development */}
      <section className="section-padding bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Modern Business Websites</h4>
                  <p className="text-slate-400 text-sm">Professional sites built for conversion—showcasing your services, building credibility, and capturing leads.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">E-Commerce Solutions</h4>
                  <p className="text-slate-400 text-sm">Full-featured online stores with inventory management, payment processing, and customer accounts.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">Responsive Design</h4>
                  <p className="text-slate-400 text-sm">Mobile-first development that works flawlessly across all devices and screen sizes.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-lg font-bold text-primary-400 mb-2">SEO & Performance</h4>
                  <p className="text-slate-400 text-sm">Built for search engines and speed—fast loading times, structured data, and ranking optimization.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Web Design & Development</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Your website is often the first impression clients have of your business. We create modern, fast, mobile-first websites that build trust, communicate value, and drive conversions.
              </p>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">What We Deliver:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Website Design:</strong> Professional, modern design tailored to your brand and audience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Technical Excellence:</strong> Built with modern frameworks, optimized performance, and enterprise-grade security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>SEO Optimization:</strong> Structured for search engines, built-in analytics, and conversion tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Content Management:</strong> Easy-to-use systems so you can update content without technical knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Hosting & Maintenance:</strong> Reliable hosting, regular updates, and ongoing support</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">Industries We Serve:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Construction & Home Services</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Professional Services & Consulting</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Retail & E-Commerce</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Local & Small Businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Consulting */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">Technology Consulting</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Not sure where to start with technology? We help business leaders and operations managers make informed decisions about software, automation, and digital transformation.
              </p>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">Our Consulting Services:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Technology Assessments:</strong> Evaluate your current tech stack and identify optimization opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Digital Strategy:</strong> Roadmaps for modernizing operations, improving efficiency, and scaling growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Automation Planning:</strong> Identify workflows ripe for automation and calculate ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Software Selection:</strong> Help you choose the right tools for your needs, budget, and scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  <span className="text-slate-300"><strong>Implementation Support:</strong> Guidance through deployments and team training</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">Who Should Consult With Us:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Construction companies ready to modernize operations</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Business leaders wanting to improve efficiency and reduce costs</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Organizations evaluating custom software vs. off-the-shelf solutions</li>
                <li className="text-slate-300 flex items-center"><span className="text-primary-400 mr-2">→</span> Teams struggling with fragmented systems and manual workflows</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">Our Consulting Process</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-100 mb-1">Discovery Call</h4>
                    <p className="text-slate-400 text-sm">Understand your business, challenges, and goals</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-100 mb-1">Assessment</h4>
                    <p className="text-slate-400 text-sm">Deep dive into current systems, workflows, and pain points</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-100 mb-1">Strategy</h4>
                    <p className="text-slate-400 text-sm">Detailed recommendations with timelines and ROI projections</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-100 mb-1">Implementation</h4>
                    <p className="text-slate-400 text-sm">Optional hands-on support to bring the plan to life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's have a conversation. We'll discuss your specific challenges and recommend the right solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
