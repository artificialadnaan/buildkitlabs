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
    id: 'skyguard-hq',
    name: 'SkyGuard HQ',
    subtitle: 'Roofing Ops Platform',
    description: 'Full-stack CRM and operations dashboard for SkyGuard Roofing Solutions. Built from scratch in 5 weeks \u2014 handles leads, jobs, crews, invoicing, commissions, and a client-facing support hub.',
    tech: ['React', 'TypeScript', 'Prisma', 'Express', 'PostgreSQL', 'Railway'],
    url: 'https://skyguardhq.com',
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
    url: 'https://buildkitweb-production.up.railway.app',
    accent: '#EAB308',
    screenshot: '/screenshots/buildkit-crm.png',
    category: 'tool',
    metrics: [{ value: '30+', label: 'DB Tables' }, { value: '8', label: 'Job Queues' }, { value: '\u221e', label: 'Leads' }],
  },
  {
    id: 'ticket-hub',
    name: 'Ticket Hub',
    subtitle: 'Support Ticketing System',
    description: 'Comprehensive ticketing and support platform built for T Rock Construction. Client-facing portal for submitting, tracking, and resolving service requests with internal team routing and status workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Railway'],
    url: 'https://support-hub-production.up.railway.app',
    accent: '#F97316',
    screenshot: '/screenshots/ticket-hub.png',
    category: 'platform',
    metrics: [{ value: 'Real-time', label: 'Tracking' }, { value: 'Teams', label: 'Routing' }, { value: '24/7', label: 'Access' }],
  },
  {
    id: 'virasat-jewels',
    name: 'Virasat Jewels',
    subtitle: 'E-Commerce Platform',
    description: 'Custom e-commerce storefront for a South Asian heritage jewelry brand. Full product catalog with categories, cart system, and checkout flow \u2014 sourcing directly from artisan families in Jaipur, Hyderabad, and Lahore.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    url: 'https://virasatjewels-web-production.up.railway.app',
    accent: '#8B5CF6',
    screenshot: '/screenshots/virasat-jewels.png',
    category: 'platform',
    metrics: [{ value: '930+', label: 'Products' }, { value: '0%', label: 'Platform Fees' }, { value: 'A+', label: 'Security' }],
  },
  {
    id: 'trock-website',
    name: 'T-Rock Construction',
    subtitle: 'Commercial GC Website',
    description: 'Marketing website for T Rock Construction, a commercial and multi-family roofing and general contracting firm based in Flower Mound, TX. Showcases services across Dallas, Fort Worth, Houston, Austin, and San Antonio.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Railway'],
    url: 'https://trockgcwebsitemockup-production.up.railway.app',
    accent: '#EF4444',
    screenshot: '/screenshots/trock-website.png',
    category: 'website',
    metrics: [{ value: '100+', label: 'Yrs Experience' }, { value: '5', label: 'TX Markets' }, { value: '24/7', label: 'Emergency' }],
  },
  {
    id: 'skyguard-website',
    name: 'SkyGuard RS',
    subtitle: 'Roofing Company Website',
    description: 'Professional marketing website for SkyGuard Roofing Solutions in DFW. Lead generation focused with service pages, testimonials, blog, and free inspection scheduling. 8 service categories with 24/7 emergency availability.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Railway'],
    url: 'https://skyguardrs.com',
    accent: '#06B6D4',
    screenshot: '/screenshots/skyguard-website.png',
    category: 'website',
    metrics: [{ value: '150+', label: 'Reviews' }, { value: '5.0', label: 'Rating' }, { value: '8', label: 'Services' }],
  },
  {
    id: 'fencetastic',
    name: 'Fencetastic',
    subtitle: 'Fencing Contractor',
    description: 'Full-service fencing and outdoor construction company in DFW. Custom website with service pages, project gallery, blog, and lead generation forms. Covers 40+ cities across the DFW Metroplex.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://fencetastic-website-mockup-production.up.railway.app',
    accent: '#9CA3AF',
    screenshot: '/screenshots/fencetastic.png',
    category: 'website',
    metrics: [{ value: '2,500+', label: 'Projects' }, { value: '5.0', label: 'Rating' }, { value: '40+', label: 'Cities' }],
  },
  {
    id: 'booth-plug',
    name: 'The Booth Plug',
    subtitle: 'Photo Booth Rentals',
    description: 'Photo booth rental business targeting DFW weddings and corporate events. Custom React site with EmailJS-powered booking flow, package pricing, and black/gold brand identity.',
    tech: ['React', 'TypeScript', 'EmailJS', 'Tailwind CSS'],
    url: 'https://theboothplug.com',
    accent: '#DAA520',
    screenshot: '/screenshots/booth-plug.png',
    category: 'website',
    metrics: [{ value: '3', label: 'Packages' }, { value: 'DFW', label: 'Service Area' }, { value: '24/7', label: 'Booking' }],
  },
  {
    id: 'buildkit-labs',
    name: 'BuildKit Labs',
    subtitle: 'Agency Website',
    description: 'DFW-based web consulting and software development agency serving construction companies and small businesses. This very website \u2014 custom-built with Next.js, SEO-optimized, and scoring 100 on Lighthouse.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Railway'],
    url: 'https://buildkitlabs.com',
    accent: '#6B7280',
    screenshot: '/screenshots/buildkit-labs.png',
    category: 'website',
    metrics: [{ value: '100', label: 'Lighthouse' }, { value: 'A11y', label: 'Accessible' }, { value: 'SEO', label: 'Optimized' }],
  },
]
