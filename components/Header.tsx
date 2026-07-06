'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { List, X, ArrowRight } from '@phosphor-icons/react'
import { Wordmark } from '@/components/technical/marks'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Lock scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper-100/85 backdrop-blur-md border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          <Link href="/" aria-label="BuildKit Labs — home" className="group press">
            <Wordmark markClass="w-8 h-8 transition-transform duration-200 group-hover:-translate-y-px" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-ink' : 'text-ink-500 hover:text-ink'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-px h-0.5 bg-primary-500 origin-left transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}

            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-ink font-semibold text-sm rounded-sm transition-colors press"
            >
              Book a Call
              <ArrowRight size={15} weight="bold" />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            className="md:hidden -mr-2 p-2 text-ink press"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {isMenuOpen && (
        <nav
          className="md:hidden border-t border-line bg-paper-100 draft-grid"
          aria-label="Mobile navigation"
        >
          <div className="max-w-[1400px] mx-auto px-5 py-4">
            {NAV.map(({ href, label }, i) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-4 py-3.5 border-b border-line-soft ${
                    active ? 'text-ink' : 'text-ink-500'
                  }`}
                >
                  <span className="font-mono text-[11px] text-primary-600 tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium">{label}</span>
                  {active && <span className="ml-auto w-1.5 h-1.5 bg-primary-500" />}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 px-5 py-3.5 bg-primary-500 text-ink font-semibold rounded-sm press"
            >
              Book a Call
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
