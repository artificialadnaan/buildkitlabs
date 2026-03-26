import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'BuildKit Labs terms and conditions for website and software development services.',
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-stone-100 mb-2">Terms & Conditions</h1>
        <p className="text-stone-400 text-sm mb-12">Last updated: March 26, 2026</p>

        <div className="prose prose-invert prose-stone max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-100">1. Agreement to Terms</h2>
            <p>By accessing or using the BuildKit Labs website (buildkitlabs.com), our CRM platform, or any services provided by BuildKit Labs ("Company," "we," "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">2. Services</h2>
            <p>BuildKit Labs provides custom software development, web design, and digital consulting services for businesses. Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website design and development</li>
              <li>Custom software and CRM development</li>
              <li>Website audits and optimization</li>
              <li>Digital marketing and outreach services</li>
              <li>Ongoing maintenance and support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">3. SMS/Text Messaging Terms</h2>
            <p><strong className="text-stone-100">Program Name:</strong> BuildKit Labs Business Outreach</p>
            <p><strong className="text-stone-100">Program Description:</strong> Personalized text messages about web development services, website audit findings, project updates, and follow-up communications.</p>
            <p className="mt-2"><strong className="text-stone-100">Message Frequency:</strong> Message frequency varies based on your interaction with our services. You may receive up to 10 messages per month.</p>
            <p className="mt-2"><strong className="text-stone-100">Message & Data Rates:</strong> Message and data rates may apply. Check with your wireless carrier for details about your text messaging plan.</p>
            <p className="mt-2"><strong className="text-stone-100">Opt-Out:</strong> You can opt out of receiving text messages at any time by replying <strong className="text-stone-100 text-lg">STOP</strong> to any message from us. You will receive a confirmation message and no further texts will be sent.</p>
            <p className="mt-2"><strong className="text-stone-100">Help:</strong> For help or questions about our text messaging program, reply <strong className="text-stone-100 text-lg">HELP</strong> to any message, or contact us at <a href="mailto:hello@buildkitlabs.com" className="text-primary-400 hover:underline">hello@buildkitlabs.com</a> or <a href="tel:+14698888214" className="text-primary-400 hover:underline">(469) 888-8214</a>.</p>
            <p className="mt-2"><strong className="text-stone-100">Supported Carriers:</strong> Compatible with major US carriers including AT&T, T-Mobile, Verizon, Sprint, and others. Carriers are not liable for delayed or undelivered messages.</p>
            <p className="mt-2">We do not charge for text messages, but standard message and data rates from your carrier may apply. Your phone number will not be shared with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">4. Payments and Pricing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website development projects start at $1,000</li>
              <li>Custom quotes are provided after an initial consultation</li>
              <li>Payment terms are specified in individual project proposals</li>
              <li>A deposit is typically required before work begins</li>
              <li>All prices are in US Dollars (USD)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">5. Intellectual Property</h2>
            <p>Upon full payment, clients receive ownership of custom-developed code and designs created specifically for their project. BuildKit Labs retains the right to use general-purpose frameworks, libraries, and reusable components across projects unless otherwise agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing timely feedback and content for projects</li>
              <li>Ensuring the accuracy of information provided to us</li>
              <li>Maintaining login credentials and account security</li>
              <li>Complying with applicable laws regarding their business operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">7. Limitation of Liability</h2>
            <p>BuildKit Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">8. Website Audits</h2>
            <p>Our automated website audits analyze publicly available information about your website, including page speed, mobile responsiveness, SSL status, and other technical factors. Audit results are provided for informational purposes and do not constitute a guarantee of specific outcomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">9. Termination</h2>
            <p>Either party may terminate a service agreement with written notice as specified in the project proposal. In the event of termination, the client is responsible for payment of work completed up to the termination date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Dallas County, Texas.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">11. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">12. Contact</h2>
            <p>Questions about these Terms? Contact us:</p>
            <p className="mt-2">
              <strong className="text-stone-100">BuildKit Labs</strong><br />
              Dallas-Fort Worth, TX<br />
              Email: <a href="mailto:hello@buildkitlabs.com" className="text-primary-400 hover:underline">hello@buildkitlabs.com</a><br />
              Phone: <a href="tel:+14698888214" className="text-primary-400 hover:underline">(469) 888-8214</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
