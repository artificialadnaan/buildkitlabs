'use client'

interface CalendlyEmbedProps {
  url: string
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  if (!url) {
    return (
      <div className="bg-paper-100 border border-dashed border-line-strong rounded-sm p-12 text-center">
        <p className="text-ink-500">
          Scheduling is being set up. Please email us at{' '}
          <a href="mailto:hello@buildkitlabs.com" className="text-primary-600 link-draw">
            hello@buildkitlabs.com
          </a>{' '}
          to book a call.
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
      className="rounded-sm border border-line bg-paper-50"
    />
  )
}
