import BrowserFrame from './BrowserFrame'

export default function PipelineMockup() {
  return (
    <BrowserFrame url="crm.example.com/pipeline">
      <div className="flex gap-3 h-48">
        <div className="w-12 flex flex-col gap-2 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-2 rounded-sm ${i === 1 ? 'bg-primary-500' : 'bg-paper-400'} mx-1`} />
          ))}
        </div>
        <div className="flex-1 flex gap-2">
          {['New', 'Qualified', 'Proposal', 'Won'].map((label, colIdx) => (
            <div key={label} className="flex-1 flex flex-col">
              <div className="text-[8px] text-ink-400 font-medium mb-1.5 uppercase tracking-wider font-mono">{label}</div>
              <div className="flex-1 bg-paper-100 rounded-sm border border-line p-1.5 space-y-1.5">
                {[...Array(colIdx === 0 ? 3 : colIdx === 3 ? 1 : 2)].map((_, i) => (
                  <div key={i} className="bg-paper-50 rounded-sm p-1.5 border border-line">
                    <div className="h-1.5 w-full bg-paper-400 rounded-sm mb-1" />
                    <div className="h-1 w-2/3 bg-paper-300 rounded-sm mb-1.5" />
                    <div className={`h-1 w-8 rounded-sm ${colIdx === 3 ? 'bg-primary-500' : 'bg-primary-300'}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}
