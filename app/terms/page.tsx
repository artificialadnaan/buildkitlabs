import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { Kicker, DimLabel } from '@/components/technical/marks'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'BuildKit Labs terms and conditions for website and software development services.',
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

export default function TermsAndConditions() {
  return (
    <main>
      {/* ── Title block ────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Kicker index="TOS" className="mb-6">Legal · Terms &amp; conditions</Kicker>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Terms &amp; conditions</h1>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-ink-400">Last updated: March 26, 2026</p>
            </div>
            <DimLabel className="hidden sm:block">DWG. LEGAL / TOS-01</DimLabel>
          </div>
        </div>
      </section>

      {/* ── Document ───────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <Section n="01" title="Agreement to terms">
            <p>By accessing or using the BuildKit Labs website (buildkitlabs.com), our CRM platform, or any services provided by BuildKit Labs ("Company," "we," "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </Section>

          <Section n="02" title="Services">
            <p>BuildKit Labs provides custom software development, web design, and digital consulting services for businesses. Our services include but are not limited to:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Website design and development</li>
              <li>Custom software and CRM development</li>
              <li>Website audits and optimization</li>
              <li>Digital marketing and outreach services</li>
              <li>Ongoing maintenance and support</li>
            </ul>
          </Section>

          <Section n="03" title="SMS/text messaging terms">
            <p><strong className="font-semibold text-ink">Program Name:</strong> BuildKit Labs Business Outreach</p>
            <p><strong className="font-semibold text-ink">Program Description:</strong> Personalized text messages about web development services, website audit findings, project updates, and follow-up communications.</p>
            <p><strong className="font-semibold text-ink">Message Frequency:</strong> Message frequency varies based on your interaction with our services. You may receive up to 10 messages per month.</p>
            <p><strong className="font-semibold text-ink">Message &amp; Data Rates:</strong> Message and data rates may apply. Check with your wireless carrier for details about your text messaging plan.</p>
            <p><strong className="font-semibold text-ink">Opt-Out:</strong> You can opt out of receiving text messages at any time by replying <strong className="font-mono font-semibold text-ink">STOP</strong> to any message from us. You will receive a confirmation message and no further texts will be sent.</p>
            <p><strong className="font-semibold text-ink">Help:</strong> For help or questions about our text messaging program, reply <strong className="font-mono font-semibold text-ink">HELP</strong> to any message, or contact us at <a href="mailto:hello@buildkitlabs.com" className={linkClass}>hello@buildkitlabs.com</a> or <a href="tel:+14698888214" className={linkClass}>(469) 888-8214</a>.</p>
            <p><strong className="font-semibold text-ink">Supported Carriers:</strong> Compatible with major US carriers including AT&amp;T, T-Mobile, Verizon, Sprint, and others. Carriers are not liable for delayed or undelivered messages.</p>
            <p>We do not charge for text messages, but standard message and data rates from your carrier may apply. Your phone number will not be shared with third parties for marketing purposes.</p>
          </Section>

          <Section n="04" title="Payments and pricing">
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Website development projects start at $1,000</li>
              <li>Custom quotes are provided after an initial consultation</li>
              <li>Payment terms are specified in individual project proposals</li>
              <li>A deposit is typically required before work begins</li>
              <li>All prices are in US Dollars (USD)</li>
            </ul>
          </Section>

          <Section n="05" title="Intellectual property">
            <p>Upon full payment, clients receive ownership of custom-developed code and designs created specifically for their project. BuildKit Labs retains the right to use general-purpose frameworks, libraries, and reusable components across projects unless otherwise agreed in writing.</p>
          </Section>

          <Section n="06" title="Client responsibilities">
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-primary-500">
              <li>Providing timely feedback and content for projects</li>
              <li>Ensuring the accuracy of information provided to us</li>
              <li>Maintaining login credentials and account security</li>
              <li>Complying with applicable laws regarding their business operations</li>
            </ul>
          </Section>

          <Section n="07" title="Limitation of liability">
            <p>BuildKit Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
          </Section>

          <Section n="08" title="Website audits">
            <p>Our automated website audits analyze publicly available information about your website, including page speed, mobile responsiveness, SSL status, and other technical factors. Audit results are provided for informational purposes and do not constitute a guarantee of specific outcomes.</p>
          </Section>

          <Section n="09" title="Termination">
            <p>Either party may terminate a service agreement with written notice as specified in the project proposal. In the event of termination, the client is responsible for payment of work completed up to the termination date.</p>
          </Section>

          <Section n="10" title="Governing law">
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Dallas County, Texas.</p>
          </Section>

          <Section n="11" title="Changes to terms">
            <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section n="12" title="Contact">
            <p>Questions about these Terms? Contact us:</p>
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
