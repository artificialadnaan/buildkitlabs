import BrowserFrame from './BrowserFrame'

function DatedSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-4 bg-slate-700 rounded" />
      <div className="flex gap-2">
        <div className="flex-1 space-y-1.5">
          <div className="h-2 bg-slate-600 rounded w-3/4" />
          <div className="h-2 bg-slate-600 rounded w-full" />
          <div className="h-2 bg-slate-600 rounded w-2/3" />
        </div>
        <div className="w-16 h-16 bg-slate-700 rounded" />
      </div>
      <div className="h-8 bg-slate-700/50 rounded mt-2" />
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-6 bg-slate-700/30 rounded" />
        ))}
      </div>
    </div>
  )
}

function ModernSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-6 bg-gradient-to-r from-primary-500/20 to-primary-400/10 rounded flex items-center px-2">
        <div className="h-1.5 w-8 bg-primary-500/40 rounded" />
        <div className="ml-auto flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-4 bg-slate-500 rounded" />
          ))}
        </div>
      </div>
      <div className="h-14 bg-gradient-to-br from-slate-800 to-slate-700 rounded p-2">
        <div className="h-2 w-20 bg-slate-500 rounded mb-1" />
        <div className="h-1.5 w-full bg-slate-600 rounded mb-1" />
        <div className="h-3 w-12 bg-primary-500/40 rounded mt-1.5" />
      </div>
      <div className="flex gap-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-10 bg-slate-800 rounded border border-slate-700 p-1.5">
            <div className="h-1 w-4 bg-primary-500/30 rounded mb-1" />
            <div className="h-1 w-full bg-slate-600 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BeforeAfterMockup() {
  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <div className="text-[10px] text-slate-500 font-medium mb-1.5 text-center uppercase tracking-wider">Before</div>
        <BrowserFrame url="oldsite.example.com">
          <DatedSite />
        </BrowserFrame>
      </div>
      <div className="flex-1">
        <div className="text-[10px] text-primary-400 font-medium mb-1.5 text-center uppercase tracking-wider">After</div>
        <BrowserFrame url="newsite.example.com">
          <ModernSite />
        </BrowserFrame>
      </div>
    </div>
  )
}
