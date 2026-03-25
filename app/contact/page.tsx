'use client'

import Link from 'next/link'
import { useState } from 'react'

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
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this to an API endpoint
      // For now, we'll just log it and simulate success
      console.log('Form submitted:', formData)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'custom-software',
        message: '',
      })

      // Reset status after 5 seconds
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
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to transform your business? Let's talk about your project and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h2>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-400 mb-2">Email</h3>
                <a
                  href="mailto:info@buildkitlabs.com"
                  className="text-slate-300 hover:text-primary-400 transition-colors break-all"
                >
                  info@buildkitlabs.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-400 mb-2">Location</h3>
                <p className="text-slate-300">
                  Dallas-Fort Worth, Texas<br />
                  Serving North Texas and beyond
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-400 mb-2">Availability</h3>
                <p className="text-slate-300">
                  Monday - Friday: 9am - 6pm CT<br />
                  We typically respond within 24 hours
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800">
                <h3 className="text-lg font-bold text-primary-400 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a4.5 4.5 0 01-1-4.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-slate-950 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-semibold">
                      Thanks for reaching out! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-semibold">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2">
                      Service You're Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web Design & Development</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-slate-400 text-sm">
                    We typically respond to inquiries within 24 hours during business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="section-padding bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-100 mb-8 text-center">Schedule a Discovery Call</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 text-center">
            <p className="text-slate-300 mb-6">
              Prefer to schedule a time directly? Use Calendly to book a 30-minute discovery call with us. We'll discuss your project, goals, and how we can help.
            </p>

            {/* Calendly Embed Placeholder */}
            <div className="bg-slate-900/50 rounded-lg p-12 border border-dashed border-slate-600">
              <p className="text-slate-400 mb-4">
                Calendly embed will appear here. Add your Calendly URL to the environment variables.
              </p>
              <p className="text-slate-500 text-sm">
                In production, replace this with your Calendly widget or scheduling system of choice.
              </p>
            </div>

            <p className="text-slate-400 text-sm mt-6">
              Can't find a time that works? Email us at info@buildkitlabs.com and we'll work something out.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Let's talk.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-lg hover:bg-primary-500/10 transition-all duration-300 text-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
