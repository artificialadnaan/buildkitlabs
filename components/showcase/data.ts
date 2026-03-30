export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  tech: string[]
  url: string | null
  accent: string
  accentRgb: string
  buildingImage: string
  buildingModel?: string // GLB 3D model path
  screenshot: string
  position: [number, number, number] // x, y, z
  scaleHeight: number
  side: 'left' | 'right' | 'center'
  nda?: boolean
  metrics: ProjectMetric[]
}

export const projects: Project[] = [
  {
    id: 'fencetastic',
    name: 'Fencetastic',
    subtitle: 'Fencing Company',
    description: 'Full-service fencing company in DFW. Built the brand, website, and operations from the ground up. Serves as a credibility anchor for construction tech consulting work.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://fencetastic.com',
    accent: '#9CA3AF',
    accentRgb: '156,163,175',
    buildingImage: '/buildings/fencetastic.jpeg',
    buildingModel: '/buildings/fencetastic.glb',
    screenshot: '/screenshots/fencetastic.png',
    position: [-6, 0, -8],
    scaleHeight: 3,
    side: 'left',
    metrics: [{ value: 'DFW', label: 'Service Area' }, { value: 'Fast', label: 'Load Time' }, { value: '1', label: 'Launch' }],
  },
  {
    id: 'booth-plug',
    name: 'The Booth Plug',
    subtitle: 'Photo Booth Rentals',
    description: 'Photo booth rental business targeting DFW weddings and corporate events. Custom React site with EmailJS-powered booking flow and black/gold brand identity.',
    tech: ['React', 'TypeScript', 'EmailJS', 'Tailwind CSS'],
    url: 'https://theboothplug.com',
    accent: '#DAA520',
    accentRgb: '218,165,32',
    buildingImage: '/buildings/booth-plug.jpeg',
    buildingModel: '/buildings/booth-plug.glb',
    screenshot: '/screenshots/booth-plug.png',
    position: [-5.5, 0, -4],
    scaleHeight: 5,
    side: 'left',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: '3', label: 'Packages' }, { value: '24/7', label: 'Booking' }],
  },
  {
    id: 'virasat-jewels',
    name: 'Virasat Jewels',
    subtitle: 'E-Commerce Platform',
    description: 'Custom e-commerce storefront for a jewelry brand. Full product catalog, cart system, and checkout flow built from scratch.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    url: null,
    accent: '#8B5CF6',
    accentRgb: '139,92,246',
    buildingImage: '/buildings/virasat-jewels.jpeg',
    buildingModel: '/buildings/virasat-jewels.glb',
    screenshot: '/screenshots/virasat-jewels.png',
    position: [-5, 0, 0],
    scaleHeight: 8,
    side: 'left',
    metrics: [{ value: '930+', label: 'Products' }, { value: '0%', label: 'Platform Fees' }, { value: 'A+', label: 'Security' }],
  },
  {
    id: 'buildkit-crm',
    name: 'BuildKit CRM',
    subtitle: 'Lead Generation Platform',
    description: 'Lead generation and CRM platform purpose-built for construction companies. Automated prospecting pipeline using Apify and Apollo.io with custom outreach sequences.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://buildkitlabs.com',
    accent: '#EAB308',
    accentRgb: '234,179,8',
    buildingImage: '/buildings/buildkit-crm.jpeg',
    buildingModel: '/buildings/buildkit-crm.glb',
    screenshot: '/screenshots/buildkit-crm.png',
    position: [5.5, 0, -4],
    scaleHeight: 9,
    side: 'right',
    metrics: [{ value: '30+', label: 'DB Tables' }, { value: '8', label: 'Job Queues' }, { value: '\u221e', label: 'Leads' }],
  },
  {
    id: 'buildkit-labs',
    name: 'BuildKit Labs',
    subtitle: 'Web Consulting Agency',
    description: 'DFW-based web consulting and software development agency serving construction companies and small businesses. Mockup-first outreach strategy with commission-based sales team.',
    tech: ['React', 'Tailwind CSS', 'Railway', 'Cloudflare'],
    url: 'https://buildkitlabs.com',
    accent: '#6B7280',
    accentRgb: '107,114,128',
    buildingImage: '/buildings/buildkit-labs.jpeg',
    buildingModel: '/buildings/buildkit-labs.glb',
    screenshot: '/screenshots/buildkit-labs.png',
    position: [6, 0, -8],
    scaleHeight: 3,
    side: 'right',
    metrics: [{ value: '57', label: 'Blog Posts' }, { value: '100', label: 'Lighthouse' }, { value: 'A11y', label: 'Accessible' }],
  },
  {
    id: 'skyguard',
    name: 'SkyGuard',
    subtitle: 'Roofing Ops Platform',
    description: 'Full-stack CRM and operations dashboard for SkyGuard Roofing Solutions. Built from scratch in 5 weeks \u2014 handles leads, jobs, crews, invoicing, and a client-facing support hub.',
    tech: ['React', 'TypeScript', 'Prisma', 'Express', 'PostgreSQL', 'Railway'],
    url: 'https://skyguardrs.com',
    accent: '#38BDF8',
    accentRgb: '56,189,248',
    buildingImage: '/buildings/skyguard.jpeg',
    buildingModel: '/buildings/skyguard.glb',
    screenshot: '/screenshots/skyguard.png',
    position: [-3, 0, 4],
    scaleHeight: 11,
    side: 'center',
    metrics: [{ value: '26', label: 'Workflows' }, { value: '5wk', label: 'Build Time' }, { value: '100%', label: 'E-Sig' }],
  },
  {
    id: 'synchub',
    name: 'T-Rock SyncHub',
    subtitle: 'Automation Platform',
    description: 'Enterprise middleware integrating HubSpot and Procore for T Rock Construction. Automates the full project pipeline \u2014 deal creation, RFP approvals, bid board sync, portfolio automation, change order tracking, and branded PDF generation.',
    tech: ['TypeScript', 'Drizzle ORM', 'Playwright', 'React', 'PostgreSQL', 'Docker', 'Railway'],
    url: null,
    accent: '#10B981',
    accentRgb: '16,185,129',
    buildingImage: '/buildings/synchub.jpeg',
    screenshot: '/screenshots/synchub.png',
    position: [3, 0, 4],
    scaleHeight: 15,
    side: 'center',
    nda: true,
    metrics: [{ value: '47', label: 'Automations' }, { value: '3', label: 'Integrations' }, { value: '11', label: 'PDF Types' }],
  },
]

// Mobile building heights for proportional display
export const mobileBuildingHeights: Record<string, number> = {
  fencetastic: 120,
  'booth-plug': 160,
  'virasat-jewels': 220,
  skyguard: 280,
  synchub: 340,
  'buildkit-crm': 240,
  'buildkit-labs': 120,
}

// Mobile display order (tallest toward center)
export const mobileOrder = [
  'fencetastic',
  'booth-plug',
  'virasat-jewels',
  'skyguard',
  'synchub',
  'buildkit-crm',
  'buildkit-labs',
]
