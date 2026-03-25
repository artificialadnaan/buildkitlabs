# BuildKit Labs Website - Site Map & Navigation Structure

## URL Routes & Navigation

```
buildkitlabs.com/
├── /                              (Homepage)
│   ├── Hero Section
│   ├── Services Overview
│   ├── Stats & Social Proof
│   ├── Portfolio Preview
│   └── CTA Sections
│
├── /services                      (Services)
│   ├── Construction Software Development
│   │   ├── What We Build
│   │   ├── Industry-Specific Features
│   │   └── Case Examples
│   ├── Web Design & Development
│   │   ├── Modern Business Websites
│   │   ├── E-Commerce Solutions
│   │   └── Industries Served
│   └── Technology Consulting
│       ├── Assessment & Strategy
│       ├── Consulting Process
│       └── Who Should Consult
│
├── /portfolio                     (Portfolio)
│   ├── Project 1: Operations Command Center
│   │   ├── Challenge
│   │   ├── Solution
│   │   ├── Key Features
│   │   └── Results
│   ├── Project 2: Automated Sales Engine
│   │   ├── Challenge
│   │   ├── Solution
│   │   ├── Key Features
│   │   └── Results
│   └── Project 3: Digital Presence Overhaul
│       ├── Challenge
│       ├── Solution
│       ├── Key Features
│       └── Results
│
├── /about                         (About)
│   ├── Company Story
│   ├── Mission Statement
│   ├── Company Stats
│   ├── Team Members
│   ├── Mission & Values
│   └── Why Construction Companies Choose Us
│
└── /contact                       (Contact)
    ├── Contact Form
    │   ├── Name
    │   ├── Email
    │   ├── Phone
    │   ├── Company
    │   ├── Service Interest (Dropdown)
    │   └── Message
    ├── Contact Information
    │   ├── Email
    │   ├── Location
    │   ├── Availability
    │   └── Social Media
    └── Scheduling Section
        └── Calendly Embed
```

## Navigation Structure

### Header Navigation (All Pages)

```
BuildKit Labs Logo (links to /)
├── Home              → /
├── Services          → /services
├── Portfolio         → /portfolio
├── About             → /about
├── Contact Us        → /contact (Primary CTA)
└── Mobile Menu       (hamburger icon on mobile)
```

### Footer Navigation (All Pages)

```
Footer
├── Brand Section
│   ├── Logo
│   └── Description
├── Services Links
│   ├── Custom Software
│   ├── Web Development
│   └── Tech Consulting
├── Company Links
│   ├── About Us
│   ├── Portfolio
│   └── Contact
├── Contact Section
│   └── Email Us Button
├── Social Media Links
│   ├── LinkedIn
│   ├── Twitter/X
│   └── GitHub
└── Copyright & Legal
```

## Page Content Hierarchy

### Homepage (/)

1. **Header** - Fixed navigation
2. **Hero Section** - Main headline, subtext, CTAs
3. **Services Overview** - 3 service cards
4. **Stats Section** - Key metrics (50+ projects, 15+ years, 100% satisfaction, DFW local)
5. **Portfolio Preview** - 3 featured projects
6. **CTA Section** - "Ready to Build Something Great?"
7. **Footer** - Links and contact info

### Services Page (/services)

1. **Header** - Page title & intro
2. **Service 1: Construction Software Development**
   - Icon and heading
   - Detailed description
   - Service highlights (5 items)
   - Why choose us (4 items)
   - Right side: Feature boxes
3. **Service 2: Web Design & Development**
   - Icon and heading
   - Detailed description
   - What we deliver (5 items)
   - Industries served (4 items)
   - Right side: Feature boxes
4. **Service 3: Technology Consulting**
   - Icon and heading
   - Detailed description
   - Services offered (5 items)
   - Who should consult (4 items)
   - Right side: Step-by-step process
5. **CTA Section** - "Not Sure Which Service?"
6. **Footer**

### Portfolio Page (/portfolio)

1. **Header** - Page title & intro
2. **Project 1: Operations Command Center**
   - Left: Image/visual
   - Right:
     - Project type badge
     - Headline
     - Challenge
     - Solution
     - Key features
     - Results grid (3 metrics)
   - Bottom left: Detailed features list
3. **Project 2: Automated Sales Engine**
   - Same structure as Project 1
4. **Project 3: Digital Presence Overhaul**
   - Same structure as Project 1
5. **CTA Section** - "Ready to Grow Your Business?"
6. **Footer**

### About Page (/about)

1. **Header** - Page title & intro
2. **Our Story** - 4 paragraphs with company stats
3. **Mission & Values** - 2 columns
   - Left: Mission statement
   - Right: 3 value cards
4. **Our Team** - 2 team member cards
5. **Why Construction Companies Choose Us** - 6 feature blocks with icons
6. **CTA Section** - "Let's Build Something Great Together"
7. **Footer**

### Contact Page (/contact)

1. **Header** - Page title & intro
2. **Contact Section** - 3 columns
   - Left (1 col):
     - Contact information (email, location, hours)
     - Social media links
   - Right (2 cols):
     - Contact form (name, email, phone, company, service dropdown, message)
     - Form submission feedback
3. **Calendly Section** - Scheduling widget
4. **CTA Section** - "Ready to Transform Your Business?"
5. **Footer**

## Visual Components Used Throughout

### Service Cards
- Icon in colored circle
- Title
- Description
- "Learn more" link with arrow

### Project Cards
- Image/visual background
- Overlay with project info
- Challenge → Solution → Results
- Metrics grid
- "View case study" link

### Stats Blocks
- Large number in gradient
- Descriptive text below

### Feature Lists
- Checkmark or bullet icon
- Bold title
- Description text

### CTA Buttons
- Primary: Gradient background (blue)
- Secondary: Border with gradient text
- Hover states with glow effects

### Form Elements
- Input fields with border
- Dropdown select
- Textarea
- Submit button

## Responsive Design Breakpoints

### Mobile (< 768px)
- Single column layout
- Hamburger menu navigation
- Stacked cards
- Full-width buttons
- Smaller headings
- Reduced padding

### Tablet (768px - 1024px)
- 2-column layouts
- Same navigation as mobile
- Larger cards
- Standard button sizes

### Desktop (> 1024px)
- Multi-column layouts
- Fixed header navigation
- Full hover effects
- Large headings
- Expanded spacing

## Interaction Patterns

### Hover Effects
- Links: Color change to primary color
- Buttons: Glow effect + slight scale
- Cards: Border color change + shadow
- All transitions: 300ms smooth

### Click/Active States
- Links: Active state highlighting
- Form fields: Border color on focus
- Buttons: Disabled state on submission

### Mobile Menu
- Hamburger icon reveals menu
- Smooth slide animation
- Closes on link click
- Backdrop blur

## SEO & Meta Information

### Meta Tags Present
- Title (unique per page)
- Description (unique per page)
- Keywords
- Open Graph (social sharing)
- Canonical URLs

### Structured Data Ready
- Organization schema
- Page schema
- Article schema (for blog posts if added)

## Analytics Touch Points

### Trackable Actions
- Hero CTA clicks
- Service card interactions
- Portfolio case study views
- Contact form submissions
- Schedule call button clicks
- Social link clicks
- Footer link clicks

---

**Total Pages**: 5 main pages
**Total Components**: 2 shared components (Header, Footer)
**Total Features**: 30+ distinct sections
**Total Links**: 50+ internal and external links
