import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { Kicker, DimLabel } from '@/components/technical/marks'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BuildKit Labs privacy policy — how we collect, use, and protect your data.',
}

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 border-b border-line pb-3 mb-6">
        <span className="font-mono text-sm text-primary-600 tabular leading-none">{n}</span>
        <h2 className="text-xl font-bold text-ink tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-ink-600 leading-relaxed max-w-[68ch]">
        {children}
      </div>
    </section>
  )
}

const linkClass = 'text-primary-600 font-medium underline underline-offset-2 hover:text-primary-700 transition-colors'

export default function PrivacyPolicy() {
  return (
    <main>
      {/* ── Title block ────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Kicker index="PP" className="mb-6">Legal · Privacy policy</Kicker>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Privacy policy</h1>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-ink-400">Last updated: March 26, 2026</p>
            </div>
            <DimLabel className="hidden sm:block">DWG. LEGAL / PP-01</DimLabel>
          </div>
        </div>
      </section>

      {/* ── Document ───────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <Section n="01" title="Introduction">
            <p>BuildKit Labs ("we," "our," or "us") operates buildkitlabs.com and the BuildKit CRM platform. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us via email, SMS, or phone.</p>
          </Section>

          <Section n="02" title="Information we collect">
            <h3 className="text-base font-semibold text-ink pt-2">Information you provide</h3>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Name, email address, phone number, and business name when you contact us or fill out forms</li>
              <li>Business information including website URL, address, and industry</li>
              <li>Communications you send to us via email, SMS, or phone</li>
              <li>Payment information when you purchase our services</li>
            </ul>

            <h3 className="text-base font-semibold text-ink pt-4">Information we collect automatically</h3>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Website usage data (pages visited, time spent, referral source)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Email engagement data (opens, clicks) when you interact with our communications</li>
            </ul>

            <h3 className="text-base font-semibold text-ink pt-4">Publicly available business information</h3>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Business name, phone number, website, address, and ratings from publicly listed sources such as Google Business Profiles</li>
              <li>Website technical data (page speed, SSL status, mobile-friendliness) gathered through automated website audits of publicly accessible websites</li>
            </ul>
          </Section>

          <Section n="03" title="How we use your information">
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about our services, including via email, SMS, and phone</li>
              <li>To send you marketing communications about web development and software services (with your consent)</li>
              <li>To conduct website audits and generate improvement recommendations</li>
              <li>To process transactions and send related information</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Section>

          <Section n="04" title="SMS/text messaging">
            <p>By providing your phone number and opting in to receive text messages from BuildKit Labs, you consent to receive SMS messages related to our web development and software services. These may include:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Service-related communications about your project</li>
              <li>Follow-up messages regarding website audits or proposals</li>
              <li>Marketing messages about our services</li>
            </ul>
            <p><strong className="font-semibold text-ink">Message frequency varies.</strong> Message and data rates may apply. You can opt out at any time by replying <strong className="font-mono font-semibold text-ink">STOP</strong> to any message. Reply <strong className="font-mono font-semibold text-ink">HELP</strong> for assistance.</p>
            <p>We will not share your phone number with third parties for their marketing purposes. Phone numbers are used solely for communication between BuildKit Labs and the recipient.</p>
          </Section>

          <Section n="05" title="Data sharing">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li><strong className="font-semibold text-ink">Service providers:</strong> Companies that help us operate our business (hosting, email delivery, SMS delivery, payment processing)</li>
              <li><strong className="font-semibold text-ink">Legal requirements:</strong> When required by law, subpoena, or government request</li>
              <li><strong className="font-semibold text-ink">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </Section>

          <Section n="06" title="Data security">
            <p>We implement appropriate technical and organizational measures to protect your personal information, including encryption in transit (SSL/TLS), secure database storage, and access controls. However, no method of transmission over the Internet is 100% secure.</p>
          </Section>

          <Section n="07" title="Data retention">
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us.</p>
          </Section>

          <Section n="08" title="Your rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Opt out of SMS messages by replying STOP</li>
            </ul>
          </Section>

          <Section n="09" title="Cookies">
            <p>Our website may use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings.</p>
          </Section>

          <Section n="10" title="Children's privacy">
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
          </Section>

          <Section n="11" title="Changes to this policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last updated" date.</p>
          </Section>

          <Section n="12" title="Contact us">
            <p>If you have questions about this Privacy Policy or your personal data, contact us at:</p>
            <p>
              <strong className="font-semibold text-ink">BuildKit Labs</strong><br />
              Dallas-Fort Worth, TX<br />
              Email: <a href="mailto:hello@buildkitlabs.com" className={linkClass}>hello@buildkitlabs.com</a><br />
              Phone: <a href="tel:+14698888214" className={linkClass}>(469) 888-8214</a>
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-ink font-medium link-draw">
            <ArrowLeft size={16} weight="bold" className="text-primary-600" />
            Return to home
          </Link>
          <DimLabel>End of document</DimLabel>
        </div>
      </article>
    </main>
  )
}
