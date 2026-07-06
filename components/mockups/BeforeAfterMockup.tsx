import BrowserFrame from './BrowserFrame'

function DatedSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-4 bg-paper-400 rounded-sm" />
      <div className="flex gap-2">
        <div className="flex-1 space-y-1.5">
          <div className="h-2 bg-paper-300 rounded-sm w-3/4" />
          <div className="h-2 bg-paper-300 rounded-sm w-full" />
          <div className="h-2 bg-paper-300 rounded-sm w-2/3" />
        </div>
        <div className="w-16 h-16 bg-paper-400 rounded-sm" />
      </div>
      <div className="h-8 bg-paper-300 rounded-sm mt-2" />
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-6 bg-paper-300/60 rounded-sm" />
        ))}
      </div>
    </div>
  )
}

function ModernSite() {
  return (
    <div className="h-36 space-y-2">
      <div className="h-6 bg-paper-100 rounded-sm flex items-center px-2 border border-line">
        <div className="h-1.5 w-8 bg-primary-500 rounded-sm" />
        <div className="ml-auto flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-4 bg-paper-400 rounded-sm" />
          ))}
        </div>
      </div>
      <div className="h-14 bg-paper-100 rounded-sm p-2 border border-line">
        <div className="h-2 w-20 bg-ink-400 rounded-sm mb-1" />
        <div className="h-1.5 w-full bg-paper-400 rounded-sm mb-1" />
        <div className="h-3 w-12 bg-primary-500 rounded-sm mt-1.5" />
      </div>
      <div className="flex gap-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-10 bg-paper-100 rounded-sm border border-line p-1.5">
            <div className="h-1 w-4 bg-primary-400 rounded-sm mb-1" />
            <div className="h-1 w-full bg-paper-400 rounded-sm" />
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
        <div className="text-[10px] text-ink-400 font-medium mb-1.5 text-center uppercase tracking-wider font-mono">Before</div>
        <BrowserFrame url="oldsite.example.com">
          <DatedSite />
        </BrowserFrame>
      </div>
      <div className="flex-1">
        <div className="text-[10px] text-primary-600 font-medium mb-1.5 text-center uppercase tracking-wider font-mono">After</div>
        <BrowserFrame url="newsite.example.com">
          <ModernSite />
        </BrowserFrame>
      </div>
    </div>
  )
}
