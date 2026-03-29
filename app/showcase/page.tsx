import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ShowcaseContent from '@/components/showcase/ShowcaseContent'

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Explore the platforms, automations, and websites we\'ve built — from construction automation to e-commerce. Click any project to see the full case study.',
  keywords: ['construction software showcase', 'custom platform portfolio', 'automation case studies', 'BuildKit Labs projects', 'DFW software development'],
  alternates: {
    canonical: 'https://buildkitlabs.com/showcase',
  },
}

export default function ShowcasePage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Project Showcase | BuildKit Labs',
        description: 'Interactive showcase of platforms, automations, and websites built by BuildKit Labs.',
        url: 'https://buildkitlabs.com/showcase',
      }} />
      <ShowcaseContent />
    </>
  )
}
