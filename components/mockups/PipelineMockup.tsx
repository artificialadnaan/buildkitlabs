import BrowserFrame from './BrowserFrame'

export default function PipelineMockup() {
  return (
    <BrowserFrame url="crm.example.com/pipeline">
      <div className="flex gap-3 h-48">
        <div className="w-12 flex flex-col gap-2 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-2 rounded ${i === 1 ? 'bg-primary-600/70' : 'bg-stone-700'} mx-1`} />
          ))}
        </div>
        <div className="flex-1 flex gap-2">
          {['New', 'Qualified', 'Proposal', 'Won'].map((label, colIdx) => (
            <div key={label} className="flex-1 flex flex-col">
              <div className="text-[8px] text-stone-600 font-medium mb-1.5 uppercase tracking-wider">{label}</div>
              <div className="flex-1 bg-dark-800/60 rounded-lg border border-stone-800 p-1.5 space-y-1.5">
                {[...Array(colIdx === 0 ? 3 : colIdx === 3 ? 1 : 2)].map((_, i) => (
                  <div key={i} className="bg-dark-900 rounded-md p-1.5 border border-stone-800">
                    <div className="h-1.5 w-full bg-stone-700 rounded mb-1" />
                    <div className="h-1 w-2/3 bg-stone-800 rounded mb-1.5" />
                    <div
                      className="h-1 w-8 rounded"
                      style={{
                        backgroundColor: colIdx === 3
                          ? 'rgba(34,197,94,0.45)'
                          : 'rgba(217,119,6,0.40)',
                      }}
                    />
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
