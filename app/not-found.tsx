import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-100 mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-slate-950 font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
