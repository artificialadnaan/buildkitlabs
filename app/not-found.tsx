import Link from 'next/link'
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { DimLabel } from '@/components/technical/marks'

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-line">
      <div className="absolute inset-0 draft-grid-major opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 sm:px-6 py-24 text-center">
        {/* Framed sheet reference */}
        <div className="tick-frame inline-flex flex-col items-center bg-paper-50 border border-ink shadow-sheet px-10 py-7 mb-10">
          <span className="font-mono text-6xl md:text-7xl font-bold text-ink tabular leading-none tracking-tight">404</span>
          <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
            <MagnifyingGlass size={12} weight="bold" />
            Sheet not found
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink text-balance">
          This sheet isn&apos;t in the set.
        </h1>
        <p className="mt-4 text-ink-500 leading-relaxed max-w-md mx-auto">
          The page you requested isn&apos;t part of this drawing. It may have been moved, renamed,
          or the reference is out of date.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-5">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-primary-500 hover:bg-primary-600 text-ink font-semibold rounded-sm transition-colors press"
          >
            Return to home
            <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 text-ink font-medium link-draw self-center">
            Contact us
            <ArrowRight size={16} weight="bold" className="text-primary-600" />
          </Link>
        </div>

        <DimLabel className="block mt-12">BKL · Error 404 · Off the plan</DimLabel>
      </div>
    </section>
  )
}
