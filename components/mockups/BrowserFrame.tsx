interface BrowserFrameProps {
  children: React.ReactNode
  url?: string
}

export default function BrowserFrame({ children, url = 'app.buildkitlabs.com' }: BrowserFrameProps) {
  return (
    <div className="rounded-sm overflow-hidden border border-line-strong bg-paper-50 shadow-sheet">
      <div className="flex items-center gap-2 px-3 py-2 bg-paper-100 border-b border-line">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full border border-line-strong" />
          <div className="w-2 h-2 rounded-full border border-line-strong" />
          <div className="w-2 h-2 rounded-full border border-line-strong" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-paper-200 rounded-sm px-3 py-1 text-[11px] text-ink-400 text-center font-mono truncate">
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
