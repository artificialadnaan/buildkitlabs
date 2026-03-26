import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BuildKit Labs privacy policy — how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-stone-100 mb-2">Privacy Policy</h1>
        <p className="text-stone-400 text-sm mb-12">Last updated: March 26, 2026</p>

        <div className="prose prose-invert prose-stone max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-100">1. Introduction</h2>
            <p>BuildKit Labs ("we," "our," or "us") operates buildkitlabs.com and the BuildKit CRM platform. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us via email, SMS, or phone.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-stone-200">Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number, and business name when you contact us or fill out forms</li>
              <li>Business information including website URL, address, and industry</li>
              <li>Communications you send to us via email, SMS, or phone</li>
              <li>Payment information when you purchase our services</li>
            </ul>

            <h3 className="text-lg font-semibold text-stone-200 mt-4">Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website usage data (pages visited, time spent, referral source)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Email engagement data (opens, clicks) when you interact with our communications</li>
            </ul>

            <h3 className="text-lg font-semibold text-stone-200 mt-4">Publicly Available Business Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Business name, phone number, website, address, and ratings from publicly listed sources such as Google Business Profiles</li>
              <li>Website technical data (page speed, SSL status, mobile-friendliness) gathered through automated website audits of publicly accessible websites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about our services, including via email, SMS, and phone</li>
              <li>To send you marketing communications about web development and software services (with your consent)</li>
              <li>To conduct website audits and generate improvement recommendations</li>
              <li>To process transactions and send related information</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">4. SMS/Text Messaging</h2>
            <p>By providing your phone number and opting in to receive text messages from BuildKit Labs, you consent to receive SMS messages related to our web development and software services. These may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service-related communications about your project</li>
              <li>Follow-up messages regarding website audits or proposals</li>
              <li>Marketing messages about our services</li>
            </ul>
            <p className="mt-2"><strong className="text-stone-100">Message frequency varies.</strong> Message and data rates may apply. You can opt out at any time by replying <strong className="text-stone-100">STOP</strong> to any message. Reply <strong className="text-stone-100">HELP</strong> for assistance.</p>
            <p className="mt-2">We will not share your phone number with third parties for their marketing purposes. Phone numbers are used solely for communication between BuildKit Labs and the recipient.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">5. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-stone-100">Service providers:</strong> Companies that help us operate our business (hosting, email delivery, SMS delivery, payment processing)</li>
              <li><strong className="text-stone-100">Legal requirements:</strong> When required by law, subpoena, or government request</li>
              <li><strong className="text-stone-100">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information, including encryption in transit (SSL/TLS), secure database storage, and access controls. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Opt out of SMS messages by replying STOP</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">9. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">10. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last updated" date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-100">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your personal data, contact us at:</p>
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
