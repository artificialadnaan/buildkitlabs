'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <span className="text-slate-950 font-bold text-lg">BK</span>
            </div>
            <span className="text-xl font-bold text-slate-100 hidden sm:inline">BuildKit Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-slate-400 hover:text-primary-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-400 hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
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
          <nav className="md:hidden pb-6 border-t border-slate-800">
            <Link
              href="/"
              onClick={closeMenu}
              className="block py-2 text-slate-400 hover:text-primary-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="block py-2 text-slate-400 hover:text-primary-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="block py-2 text-slate-400 hover:text-primary-400 transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block py-2 text-slate-400 hover:text-primary-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block mt-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-semibold rounded-lg text-center"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
