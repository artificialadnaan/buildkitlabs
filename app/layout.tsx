import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

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
    <html lang="en" className={`scroll-smooth ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-paper-200 text-ink font-sans paper-grain antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-paper-50 focus:font-semibold focus:rounded-sm">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
