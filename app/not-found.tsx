import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
      <div className="relative z-10 max-w-md mx-auto px-4 text-center">
        <div className="text-8xl font-bold text-primary-500 mb-4 tracking-tight">404</div>
        <h1 className="text-2xl font-bold text-stone-100 mb-4">Page Not Found</h1>
        <p className="text-stone-500 mb-10 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-dark-950 font-bold rounded-lg transition-all duration-200 text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
