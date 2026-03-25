import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-dark-950 font-bold text-sm tracking-tight">BK</span>
              </div>
              <span className="text-base font-bold text-stone-100 tracking-tight">BuildKit Labs</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Custom software for construction companies. Web development for North Texas businesses.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <span className="text-xs text-stone-500 ml-1">Dallas-Fort Worth, TX</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-500 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <p className="text-stone-500 text-sm mb-4 leading-relaxed">
              Ready to build something? Let's talk.
            </p>
            <a
              href="mailto:hello@buildkitlabs.com"
              className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-500 text-dark-950 font-semibold rounded-lg transition-colors text-sm"
            >
              hello@buildkitlabs.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-600 text-sm">
              &copy; {currentYear} BuildKit Labs. All rights reserved.
            </p>
            <div className="flex items-center space-x-5">
              <a
                href="https://linkedin.com/company/buildkitlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/buildkitlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a4.5 4.5 0 01-1-4.5z" />
                </svg>
              </a>
              <a
                href="https://github.com/buildkitlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
