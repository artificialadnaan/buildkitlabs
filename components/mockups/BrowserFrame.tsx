interface BrowserFrameProps {
  children: React.ReactNode
  url?: string
}

export default function BrowserFrame({ children, url = 'app.buildkitlabs.com' }: BrowserFrameProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-600 bg-slate-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-slate-900 rounded-md px-3 py-1 text-xs text-slate-500 text-center">
            {url}
          </div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
