'use client'

import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'custom-software',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: 'custom-software', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-5 leading-tight tracking-tight">Get In Touch</h1>
          <p className="text-xl text-stone-400 max-w-xl leading-relaxed">
            Ready to talk about your project? No pitch decks — just a straightforward conversation about what you need.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
      </section>

      {/* ── Contact Section ───────────────────────────────────────────── */}
      <section className="bg-dark-900 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-stone-100">Contact Information</h2>

              <div>
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Email</h3>
                <a
                  href="mailto:hello@buildkitlabs.com"
                  className="text-stone-300 hover:text-primary-400 transition-colors text-sm break-all"
                >
                  hello@buildkitlabs.com
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Location</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Dallas-Fort Worth, Texas<br />
                  Serving North Texas and beyond
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Availability</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Monday – Friday: 9am – 6pm CT<br />
                  Typically respond within 24 hours
                </p>
              </div>

              <div className="pt-6 border-t border-stone-800">
                <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">Connect</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/company/buildkitlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary-600 flex items-center justify-center text-stone-400 hover:text-dark-950 transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/buildkitlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary-600 flex items-center justify-center text-stone-400 hover:text-dark-950 transition-all"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a4.5 4.5 0 01-1-4.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/buildkitlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-primary-600 flex items-center justify-center text-stone-400 hover:text-dark-950 transition-all"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
                <h2 className="text-xl font-bold text-stone-100 mb-7">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className="text-green-400 font-semibold text-sm">
                      Thanks for reaching out! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-red-400 font-semibold text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                      Service You're Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                    >
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web Design & Development</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-900 border border-stone-700 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors resize-none text-sm"
                      placeholder="Tell us about your project, challenges, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-stone-600 text-xs">
                    We typically respond within 24 hours during business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calendly ─────────────────────────────────────────────────── */}
      <section className="bg-dark-950 border-b border-stone-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-stone-100 mb-3">Schedule a Discovery Call</h2>
          <p className="text-stone-400 mb-10 text-sm">Prefer to book directly? Pick a time that works for you.</p>
          <div className="rounded-2xl bg-dark-800 border border-stone-800 p-8">
            <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL || ''} />
            <p className="text-stone-600 text-xs mt-6 text-center">
              Can't find a time? Email us at hello@buildkitlabs.com and we'll work something out.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-stone-100 mb-4 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
          <Link
            href="/"
            className="text-stone-400 hover:text-stone-100 font-medium text-sm transition-colors underline underline-offset-4 decoration-stone-700 hover:decoration-stone-400"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
