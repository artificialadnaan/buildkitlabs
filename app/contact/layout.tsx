import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with BuildKit Labs. Schedule a free discovery call or send us a message about your construction software or web development project.',
  keywords: ['hire software developer Dallas', 'construction software consultation', 'contact BuildKit Labs', 'free discovery call DFW'],
  alternates: {
    canonical: 'https://buildkitlabs.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
