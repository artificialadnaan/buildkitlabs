'use client'

interface CalendlyEmbedProps {
  url: string
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  if (!url) {
    return (
      <div className="bg-slate-900/50 rounded-lg p-12 border border-dashed border-slate-600">
        <p className="text-slate-400 text-center">
          Scheduling is being set up. Please email us at hello@buildkitlabs.com to book a call.
        </p>
      </div>
    )
  }

  return (
    <iframe
      src={url}
      width="100%"
      height="700"
      frameBorder="0"
      title="Schedule a Discovery Call"
      className="rounded-lg"
    />
  )
}
