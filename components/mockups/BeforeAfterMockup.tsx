import BrowserFrame from './BrowserFrame'

function DatedSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-4 bg-stone-800 rounded" />
      <div className="flex gap-2">
        <div className="flex-1 space-y-1.5">
          <div className="h-2 bg-stone-700 rounded w-3/4" />
          <div className="h-2 bg-stone-700 rounded w-full" />
          <div className="h-2 bg-stone-700 rounded w-2/3" />
        </div>
        <div className="w-16 h-16 bg-stone-800 rounded" />
      </div>
      <div className="h-8 bg-stone-800/60 rounded mt-2" />
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-6 bg-stone-800/40 rounded" />
        ))}
      </div>
    </div>
  )
}

function ModernSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-6 bg-dark-800 rounded-lg flex items-center px-2 border border-stone-800">
        <div className="h-1.5 w-8 bg-primary-600/50 rounded" />
        <div className="ml-auto flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-4 bg-stone-600 rounded" />
          ))}
        </div>
      </div>
      <div className="h-14 bg-dark-800 rounded-lg p-2 border border-stone-800">
        <div className="h-2 w-20 bg-stone-500 rounded mb-1" />
        <div className="h-1.5 w-full bg-stone-700 rounded mb-1" />
        <div className="h-3 w-12 bg-primary-600/50 rounded mt-1.5" />
      </div>
      <div className="flex gap-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-10 bg-dark-800 rounded-lg border border-stone-800 p-1.5">
            <div className="h-1 w-4 bg-primary-600/40 rounded mb-1" />
            <div className="h-1 w-full bg-stone-700 rounded" />
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
        <div className="text-[10px] text-stone-600 font-medium mb-1.5 text-center uppercase tracking-wider">Before</div>
        <BrowserFrame url="oldsite.example.com">
          <DatedSite />
        </BrowserFrame>
      </div>
      <div className="flex-1">
        <div className="text-[10px] text-primary-500 font-medium mb-1.5 text-center uppercase tracking-wider">After</div>
        <BrowserFrame url="newsite.example.com">
          <ModernSite />
        </BrowserFrame>
      </div>
    </div>
  )
}
