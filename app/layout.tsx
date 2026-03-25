import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`bg-slate-950 text-slate-100 ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
