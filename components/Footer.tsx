import Link from 'next/link'
import { LinkedinLogo, XLogo, GithubLogo, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { Logo } from '@/components/technical/marks'

const COLS = [
  {
    label: 'Services',
    ref: '01',
    links: [
      { href: '/services', text: 'Custom Software' },
      { href: '/services', text: 'Web Development' },
      { href: '/services', text: 'Tech Consulting' },
    ],
  },
  {
    label: 'Company',
    ref: '02',
    links: [
      { href: '/about', text: 'About' },
      { href: '/portfolio', text: 'Portfolio' },
      { href: '/showcase', text: 'Showcase' },
      { href: '/contact', text: 'Contact' },
    ],
  },
  {
    label: 'Legal',
    ref: '03',
    links: [
      { href: '/privacy', text: 'Privacy Policy' },
      { href: '/terms', text: 'Terms of Service' },
    ],
  },
]

const SOCIAL = [
  { href: 'https://linkedin.com/company/buildkitlabs', label: 'LinkedIn', Icon: LinkedinLogo },
  { href: 'https://twitter.com/buildkitlabs', label: 'X', Icon: XLogo },
  { href: 'https://github.com/buildkitlabs', label: 'GitHub', Icon: GithubLogo },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-[2] border-t-2 border-ink bg-paper-100">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Title-block grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 border-x border-line">

          {/* Firm cell */}
          <div className="col-span-2 md:col-span-5 p-8 md:p-10 border-b md:border-b-0 md:border-r border-line">
            <Logo className="w-10 h-10 mb-5" />
            <p className="text-ink text-lg font-medium leading-snug max-w-xs mb-6 text-pretty">
              Custom software for construction. Websites for North Texas businesses.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-400">
              <span className="w-1.5 h-1.5 bg-primary-500" />
              Dallas–Fort Worth · 32.7767°N 96.7970°W
            </div>
          </div>

          {/* Link columns */}
          <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-2">
            {COLS.slice(0, 2).map((col, i) => (
              <div key={col.label} className={`p-8 md:p-10 border-b border-line ${i === 0 ? 'border-r' : ''}`}>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="font-mono text-[10px] text-primary-600 tabular">{col.ref}</span>
                  <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-500">{col.label}</h3>
                </div>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l.text}>
                      <Link href={l.href} className="text-sm text-ink-600 hover:text-primary-600 transition-colors">
                        {l.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + legal cell */}
          <div className="col-span-2 md:col-span-3 p-8 md:p-10 border-t md:border-t-0 md:border-l border-line">
            <div className="flex items-baseline gap-2 mb-5">
              <span className="font-mono text-[10px] text-primary-600 tabular">03</span>
              <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-500">Contact</h3>
            </div>
            <a
              href="mailto:hello@buildkitlabs.com"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-600 transition-colors mb-6"
            >
              hello@buildkitlabs.com
              <ArrowUpRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <ul className="space-y-3 mb-7">
              {COLS[2].links.map(l => (
                <li key={l.text}>
                  <Link href={l.href} className="text-sm text-ink-600 hover:text-primary-600 transition-colors">
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 -ml-2 text-ink-400 hover:text-ink transition-colors"
                >
                  <Icon size={18} weight="regular" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — drawing number / revision */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 border-x border-b border-line font-mono text-[11px] uppercase tracking-widest text-ink-400">
          <span>DWG. BKL-000 · Landing · Rev. {year}</span>
          <span>© {year} BuildKit Labs — All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
