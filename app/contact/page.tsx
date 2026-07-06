'use client'

import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EnvelopeSimple, MapPin, Clock, CalendarBlank, ArrowRight, Check,
  PaperPlaneTilt, LinkedinLogo, XLogo, GithubLogo, Warning, CircleNotch,
} from '@phosphor-icons/react'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import { Kicker, DimLabel } from '@/components/technical/marks'

const inputClass =
  'w-full bg-paper-50 border border-line-strong rounded-sm px-4 py-3 text-ink placeholder:text-ink-400 focus:border-ink focus:outline-none transition-colors'
const labelClass =
  'block font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-2'

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
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/0 via-paper-200/0 to-paper-200 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-20">
          <Kicker index="01" className="mb-8 animate-fade-in">Contact · Start a project</Kicker>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink text-balance max-w-3xl animate-fade-in-delay-1">
            Let&apos;s talk through your project.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed text-pretty animate-fade-in-delay-2">
            No pitch decks — just a straightforward conversation about what you need.
            Send a message below or book a call directly.
          </p>
        </div>
      </section>

      {/* ── Contact + Form ───────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Contact info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-ink">
                <DimLabel>Contact details</DimLabel>
                <span className="h-px flex-1 bg-line" />
                <DimLabel>DIR-01</DimLabel>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-paper-50 border border-line p-5 flex items-start gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-ink text-ink">
                    <EnvelopeSimple size={20} weight="regular" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-1">Email</div>
                    <a
                      href="mailto:hello@buildkitlabs.com"
                      className="text-ink font-medium link-draw break-all"
                    >
                      hello@buildkitlabs.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-paper-50 border border-line p-5 flex items-start gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-ink text-ink">
                    <MapPin size={20} weight="regular" />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-1">Location</div>
                    <p className="text-ink-500 text-sm leading-relaxed">
                      Dallas–Fort Worth, Texas<br />
                      Serving North Texas and beyond
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-paper-50 border border-line p-5 flex items-start gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-ink text-ink">
                    <Clock size={20} weight="regular" />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-1">Availability</div>
                    <p className="text-ink-500 text-sm leading-relaxed">
                      Monday – Friday · 9am – 6pm CT<br />
                      Typically respond within one business day
                    </p>
                  </div>
                </div>

                {/* Connect */}
                <div className="bg-paper-50 border border-line p-5">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-3">Connect</div>
                  <div className="flex gap-2.5">
                    <a
                      href="https://linkedin.com/company/buildkitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 border border-ink text-ink hover:bg-primary-500 hover:border-primary-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinLogo size={18} weight="regular" />
                    </a>
                    <a
                      href="https://twitter.com/buildkitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 border border-ink text-ink hover:bg-primary-500 hover:border-primary-500 transition-colors"
                      aria-label="X"
                    >
                      <XLogo size={18} weight="regular" />
                    </a>
                    <a
                      href="https://github.com/buildkitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 border border-ink text-ink hover:bg-primary-500 hover:border-primary-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubLogo size={18} weight="regular" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form sheet */}
            <div className="lg:col-span-2">
              <div className="tick-frame bg-paper-50 border border-ink shadow-sheet">

                {/* Title block */}
                <div className="border-b border-line px-5 md:px-6 py-3 flex items-center justify-between">
                  <DimLabel>Project inquiry</DimLabel>
                  <DimLabel>DWG. RFI-01</DimLabel>
                </div>

                <div className="p-5 md:p-8">
                  <h2 className="text-2xl font-bold text-ink mb-1.5">Send us a message</h2>
                  <p className="text-ink-500 text-sm mb-7">
                    Fill in the fields below and we&apos;ll get back to you.
                  </p>

                  {submitStatus === 'success' && (
                    <div className="mb-6 flex items-start gap-2.5 border border-line bg-paper-100 px-4 py-3 rounded-sm">
                      <Check size={18} weight="bold" className="text-primary-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-ink">
                        Message sent. We&apos;ll reply within one business day.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 flex items-start gap-2.5 border border-primary-200 bg-primary-50 px-4 py-3 rounded-sm">
                      <Warning size={18} weight="bold" className="text-primary-700 shrink-0 mt-0.5" />
                      <p className="text-sm text-primary-700">
                        We couldn&apos;t send your message. Please try again or email us directly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full name <span className="text-primary-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email address <span className="text-primary-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Service you&apos;re interested in <span className="text-primary-600">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="custom-software">Custom software development</option>
                        <option value="web-development">Web design &amp; development</option>
                        <option value="consulting">Technology consulting</option>
                        <option value="other">Other / not sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Project details <span className="text-primary-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your project, challenges, and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center gap-2.5 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm px-7 py-4 press transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <CircleNotch size={18} weight="bold" className="animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send message
                          <PaperPlaneTilt size={18} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-ink-400 text-xs">
                      We typically respond within one business day during business hours.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Book directly (Calendly) ─────────────────────────────────── */}
      <section className="border-b border-line bg-paper-100 relative overflow-hidden">
        <div className="absolute inset-0 draft-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Kicker index="02" className="mb-5">Or book directly</Kicker>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance">
                Schedule a discovery call.
              </h2>
              <p className="mt-5 text-ink-500 leading-relaxed max-w-md">
                Pick a time that works for you — no back-and-forth needed.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-ink-500">
              <CalendarBlank size={18} weight="regular" />
              <DimLabel>30 min · Video call</DimLabel>
            </div>
          </div>

          <div className="tick-frame bg-paper-50 border border-ink shadow-sheet">
            <div className="border-b border-line px-5 md:px-6 py-3 flex items-center justify-between">
              <DimLabel>Booking</DimLabel>
              <DimLabel>CAL-01</DimLabel>
            </div>
            <div className="p-5 md:p-6">
              <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL || ''} />
              <p className="text-ink-400 text-xs mt-5 text-center">
                Can&apos;t find a time? Email us at{' '}
                <a href="mailto:hello@buildkitlabs.com" className="text-primary-600 link-draw">
                  hello@buildkitlabs.com
                </a>{' '}
                and we&apos;ll work something out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sign-off CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex mx-auto mb-8 w-12 h-[3px] bg-primary-500 origin-center animate-draw-x" />
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 text-balance">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-ink-500 mb-11 max-w-xl mx-auto leading-relaxed">
            Whether you have a specific project in mind or just want to explore
            possibilities, we&apos;re here to help.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-ink font-medium link-draw"
          >
            Back to home
            <ArrowRight size={16} weight="bold" className="text-primary-600" />
          </Link>
        </div>
      </section>
    </div>
  )
}
