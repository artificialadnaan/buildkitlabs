export interface ProjectMetric {
  value: string
  label: string
}

export type ProjectCategory = 'platform' | 'website' | 'tool'

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  tech: string[]
  url: string | null
  accent: string
  screenshot: string
  category: ProjectCategory
  nda?: boolean
  metrics: ProjectMetric[]
}

export const categoryLabels: Record<ProjectCategory, string> = {
  platform: 'Platforms',
  website: 'Websites',
  tool: 'Tools',
}

export const projects: Project[] = [
  {
    id: 'synchub',
    name: 'T-Rock SyncHub',
    subtitle: 'Automation Platform',
    description: 'Enterprise middleware integrating HubSpot and Procore for T Rock Construction. Automates the full project pipeline \u2014 deal creation, RFP approvals, bid board sync, portfolio automation, change order tracking, and branded PDF generation.',
    tech: ['TypeScript', 'Drizzle ORM', 'Playwright', 'React', 'PostgreSQL', 'Docker', 'Railway'],
    url: null,
    accent: '#10B981',

    screenshot: '/screenshots/synchub.png',
    category: 'platform',
    nda: true,
    metrics: [{ value: '47', label: 'Automations' }, { value: '3', label: 'Integrations' }, { value: '11', label: 'PDF Types' }],
  },
  {
    id: 'skyguard',
    name: 'SkyGuard',
    subtitle: 'Roofing Ops Platform',
    description: 'Full-stack CRM and operations dashboard for SkyGuard Roofing Solutions. Built from scratch in 5 weeks \u2014 handles leads, jobs, crews, invoicing, and a client-facing support hub.',
    tech: ['React', 'TypeScript', 'Prisma', 'Express', 'PostgreSQL', 'Railway'],
    url: 'https://skyguardrs.com',
    accent: '#38BDF8',

    screenshot: '/screenshots/skyguard.png',
    category: 'platform',
    metrics: [{ value: '26', label: 'Workflows' }, { value: '5wk', label: 'Build Time' }, { value: '100%', label: 'E-Sig' }],
  },
  {
    id: 'buildkit-crm',
    name: 'BuildKit CRM',
    subtitle: 'Lead Generation Platform',
    description: 'Lead generation and CRM platform purpose-built for construction companies. Automated prospecting pipeline using Apify and Apollo.io with custom outreach sequences.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://buildkitlabs.com',
    accent: '#EAB308',

    screenshot: '/screenshots/buildkit-crm.png',
    category: 'tool',
    metrics: [{ value: '30+', label: 'DB Tables' }, { value: '8', label: 'Job Queues' }, { value: '\u221e', label: 'Leads' }],
  },
  {
    id: 'virasat-jewels',
    name: 'Virasat Jewels',
    subtitle: 'E-Commerce Platform',
    description: 'Custom e-commerce storefront for a jewelry brand. Full product catalog, cart system, and checkout flow built from scratch.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    url: null,
    accent: '#8B5CF6',

    screenshot: '/screenshots/virasat-jewels.png',
    category: 'platform',
    metrics: [{ value: '930+', label: 'Products' }, { value: '0%', label: 'Platform Fees' }, { value: 'A+', label: 'Security' }],
  },
  {
    id: 'booth-plug',
    name: 'The Booth Plug',
    subtitle: 'Photo Booth Rentals',
    description: 'Photo booth rental business targeting DFW weddings and corporate events. Custom React site with EmailJS-powered booking flow and black/gold brand identity.',
    tech: ['React', 'TypeScript', 'EmailJS', 'Tailwind CSS'],
    url: 'https://theboothplug.com',
    accent: '#DAA520',

    screenshot: '/screenshots/booth-plug.png',
    category: 'website',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: '3', label: 'Packages' }, { value: '24/7', label: 'Booking' }],
  },
  {
    id: 'fencetastic',
    name: 'Fencetastic',
    subtitle: 'Fencing Company',
    description: 'Full-service fencing company in DFW. Built the brand, website, and operations from the ground up. Serves as a credibility anchor for construction tech consulting work.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://fencetastic.com',
    accent: '#9CA3AF',

    screenshot: '/screenshots/fencetastic.png',
    category: 'website',
    metrics: [{ value: 'DFW', label: 'Service Area' }, { value: 'Fast', label: 'Load Time' }, { value: '1', label: 'Launch' }],
  },
  {
    id: 'buildkit-labs',
    name: 'BuildKit Labs',
    subtitle: 'Web Consulting Agency',
    description: 'DFW-based web consulting and software development agency serving construction companies and small businesses. Mockup-first outreach strategy with commission-based sales team.',
    tech: ['React', 'Tailwind CSS', 'Railway', 'Cloudflare'],
    url: 'https://buildkitlabs.com',
    accent: '#6B7280',

    screenshot: '/screenshots/buildkit-labs.png',
    category: 'website',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: '100', label: 'Lighthouse' }, { value: 'A11y', label: 'Accessible' }],
  },
]
