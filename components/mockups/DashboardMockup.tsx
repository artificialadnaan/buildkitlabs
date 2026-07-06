import BrowserFrame from './BrowserFrame'

export default function DashboardMockup() {
  return (
    <BrowserFrame url="ops.example.com/dashboard">
      <div className="flex gap-3 h-48">
        {/* Sidebar */}
        <div className="w-12 flex flex-col gap-2 pt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-2 rounded-sm ${i === 0 ? 'bg-primary-500' : 'bg-paper-400'} mx-1`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 space-y-3">
          {/* Stat cards */}
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-1 h-10 rounded-sm bg-paper-100 border border-line p-2">
                <div className="h-1.5 w-8 bg-primary-400 rounded-sm mb-1.5" />
                <div className="h-2.5 w-6 bg-paper-400 rounded-sm" />
              </div>
            ))}
          </div>
          {/* Chart + Map */}
          <div className="flex gap-2 flex-1">
            <div className="flex-1 rounded-sm bg-paper-100 border border-line p-2">
              <div className="h-1.5 w-12 bg-paper-400 rounded-sm mb-2" />
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${i === 6 ? 'bg-primary-500' : 'bg-primary-200'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/3 rounded-sm bg-paper-100 border border-line p-2">
              <div className="h-1.5 w-8 bg-paper-400 rounded-sm mb-2" />
              <div className="h-[calc(100%-14px)] rounded-sm bg-paper-200 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-400 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
