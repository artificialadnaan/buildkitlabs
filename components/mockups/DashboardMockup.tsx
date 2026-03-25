import BrowserFrame from './BrowserFrame'

export default function DashboardMockup() {
  return (
    <BrowserFrame url="ops.example.com/dashboard">
      <div className="flex gap-3 h-48">
        {/* Sidebar */}
        <div className="w-12 flex flex-col gap-2 pt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-2 rounded ${i === 0 ? 'bg-primary-600/70' : 'bg-stone-700'} mx-1`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 space-y-3">
          {/* Stat cards */}
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-1 h-10 rounded-lg bg-dark-800 border border-stone-700 p-2">
                <div className="h-1.5 w-8 bg-primary-600/50 rounded mb-1.5" />
                <div className="h-2.5 w-6 bg-stone-600 rounded" />
              </div>
            ))}
          </div>
          {/* Chart + Map */}
          <div className="flex gap-2 flex-1">
            <div className="flex-1 rounded-lg bg-dark-800 border border-stone-700 p-2">
              <div className="h-1.5 w-12 bg-stone-600 rounded mb-2" />
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor: i === 6 ? 'rgba(217,119,6,0.7)' : 'rgba(217,119,6,0.25)',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/3 rounded-lg bg-dark-800 border border-stone-700 p-2">
              <div className="h-1.5 w-8 bg-stone-600 rounded mb-2" />
              <div className="h-full rounded bg-stone-800/50 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
