'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu  = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-900 backdrop-blur-md border-b border-stone-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="BuildKit Labs home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" className="w-9 h-9 transition-transform duration-200 group-hover:scale-105">
              <rect x="0" y="0" width="10" height="10" rx="2" fill="#d97706" opacity="0.3"/>
              <rect x="13" y="0" width="10" height="10" rx="2" fill="#d97706" opacity="0.35"/>
              <rect x="26" y="0" width="10" height="10" rx="2" fill="#d97706" opacity="0.5"/>
              <rect x="0" y="13" width="10" height="10" rx="2" fill="#d97706" opacity="0.35"/>
              <rect x="13" y="13" width="10" height="10" rx="2" fill="#f59e0b" opacity="0.6"/>
              <rect x="26" y="13" width="10" height="10" rx="2" fill="#f59e0b" opacity="0.8"/>
              <rect x="0" y="26" width="10" height="10" rx="2" fill="#d97706" opacity="0.5"/>
              <rect x="13" y="26" width="10" height="10" rx="2" fill="#f59e0b" opacity="0.8"/>
              <rect x="26" y="26" width="10" height="10" rx="2" fill="#f97316" opacity="1"/>
            </svg>
            <span className="text-lg font-extrabold text-stone-100 hidden sm:inline tracking-tight">Build<span className="text-primary-500">Kit</span> Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <Link
              href="/"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200 font-medium text-sm"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200 font-medium text-sm"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200 font-medium text-sm"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200 font-medium text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-dark-950 font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-stone-400 hover:text-stone-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-stone-800 pt-4" aria-label="Mobile navigation">
            <div className="space-y-1 px-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="block py-3 px-3 text-stone-400 hover:text-stone-100 transition-colors font-medium text-sm rounded-lg hover:bg-stone-800/50"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="block py-3 px-3 text-stone-400 hover:text-stone-100 transition-colors font-medium text-sm rounded-lg hover:bg-stone-800/50"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="block py-3 px-3 text-stone-400 hover:text-stone-100 transition-colors font-medium text-sm rounded-lg hover:bg-stone-800/50"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block py-3 px-3 text-stone-400 hover:text-stone-100 transition-colors font-medium text-sm rounded-lg hover:bg-stone-800/50"
              >
                About
              </Link>
              <div className="pt-3 mt-2 border-t border-stone-800/60">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block px-5 py-3.5 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg text-center transition-colors text-sm shadow-glow"
                >
                  Book a Call →
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
