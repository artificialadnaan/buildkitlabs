interface BrowserFrameProps {
  children: React.ReactNode
  url?: string
}

export default function BrowserFrame({ children, url = 'app.buildkitlabs.com' }: BrowserFrameProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-stone-700 bg-dark-900 shadow-warm">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-800 border-b border-stone-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-dark-950 rounded-md px-3 py-1 text-xs text-stone-600 text-center font-mono">
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
