import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://buildkitlabs.com'),
  title: {
    default: 'BuildKit Labs | Custom Software & Web Development for Construction',
    template: '%s | BuildKit Labs',
  },
  description: 'Custom software development and web design for construction companies and North Texas businesses. Specialized in operations platforms, CRM systems, and digital transformation.',
  keywords: ['construction software', 'web development', 'custom software', 'Dallas Fort Worth', 'North Texas', 'CRM', 'automation'],
  authors: [{ name: 'BuildKit Labs' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildkitlabs.com',
    siteName: 'BuildKit Labs',
    title: 'BuildKit Labs | Custom Software & Web Development',
    description: 'Custom software development and web design for construction companies and North Texas businesses.',
    images: [
      {
        url: 'https://buildkitlabs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BuildKit Labs',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildkitlabs.com" />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
