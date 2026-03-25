import BrowserFrame from './BrowserFrame'

export default function PipelineMockup() {
  return (
    <BrowserFrame url="crm.example.com/pipeline">
      <div className="flex gap-3 h-48">
        <div className="w-12 flex flex-col gap-2 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-2 rounded ${i === 1 ? 'bg-primary-500/60' : 'bg-slate-700'} mx-1`} />
          ))}
        </div>
        <div className="flex-1 flex gap-2">
          {['New', 'Qualified', 'Proposal', 'Won'].map((label, colIdx) => (
            <div key={label} className="flex-1 flex flex-col">
              <div className="text-[8px] text-slate-500 font-medium mb-1.5 uppercase tracking-wider">{label}</div>
              <div className="flex-1 bg-slate-800/50 rounded border border-slate-700 p-1.5 space-y-1.5">
                {[...Array(colIdx === 0 ? 3 : colIdx === 3 ? 1 : 2)].map((_, i) => (
                  <div key={i} className="bg-slate-900 rounded p-1.5 border border-slate-700">
                    <div className="h-1.5 w-full bg-slate-600 rounded mb-1" />
                    <div className="h-1 w-2/3 bg-slate-700 rounded mb-1.5" />
                    <div className={`h-1 w-8 rounded ${colIdx === 3 ? 'bg-green-500/40' : 'bg-primary-500/30'}`} />
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
