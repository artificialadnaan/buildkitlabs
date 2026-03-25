# Quick Start Guide - BuildKit Labs Website

Get up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git (optional, for cloning)

## Local Development (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

That's it! You can now:
- Edit files in `app/` and see changes instantly
- View the site at http://localhost:3000
- Check the console for any errors

## File Structure Overview

```
app/
├── page.tsx           👈 Homepage
├── services/
│   └── page.tsx       👈 Services page
├── portfolio/
│   └── page.tsx       👈 Portfolio/case studies
├── about/
│   └── page.tsx       👈 About page
├── contact/
│   └── page.tsx       👈 Contact page with form
├── layout.tsx         👈 Root layout (header, footer)
└── globals.css        👈 Global styles

components/
├── Header.tsx         👈 Navigation
└── Footer.tsx         👈 Footer
```

## Making Changes

### Update homepage content

Edit `app/page.tsx` - change the text, colors, structure as needed.

### Update services

Edit `app/services/page.tsx` - add/remove service sections

### Update portfolio projects

Edit `app/portfolio/page.tsx` - modify case studies and examples

### Change colors/styling

Edit `tailwind.config.ts` - adjust the `primary` color palette

### Update footer/header

Edit `components/Footer.tsx` and `components/Header.tsx`

## Building for Production

```bash
# Build optimized bundle
npm run build

# Test production build locally
npm start

# Then visit http://localhost:3000
```

## Deploying to VPS

See detailed instructions in `README.md`, but quick version:

1. Push code to your server
2. Run: `npm install --production && npm run build`
3. Run: `pm2 start ecosystem.config.js`
4. Point domain to your VPS

## Adding a New Page

Want to add a new page like `/blog`?

```bash
# Create directory
mkdir app/blog

# Create page file
touch app/blog/page.tsx
```

Then add to `app/blog/page.tsx`:

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | BuildKit Labs',
  description: 'Latest articles and insights',
}

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Your content here */}
    </div>
  )
}
```

The navigation will automatically work!

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then update values:

```
NEXT_PUBLIC_SITE_URL=https://buildkitlabs.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@buildkitlabs.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname
```

## Contact Form Setup

The contact form in `app/contact/page.tsx` currently logs to console. To make it work:

**Option 1: Use a service like Formspree**
- Visit formspree.io
- Create form
- Update form action in `app/contact/page.tsx`

**Option 2: Build your own API**
- Create `app/api/contact/route.ts`
- Handle form submission and send email
- Update form in contact page to POST to `/api/contact`

**Option 3: Use SendGrid/Mailgun**
- Install their SDK: `npm install @sendgrid/mail`
- Create API route that uses their service
- Update form submission handler

## Troubleshooting

### Port 3000 already in use?
```bash
# Use a different port
npm run dev -- -p 3001
```

### Node_modules issues?
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
```bash
# Clear cache and try again
rm -rf .next
npm run build
```

### Want to see logs?
```bash
# Development server shows logs in terminal
npm run dev

# Check console in browser (F12)
```

## Common Customizations

### Change company name
Search for "BuildKit Labs" and replace with your company name

### Change colors
Edit `tailwind.config.ts` - change `primary` colors from cyan/blue

### Change fonts
Edit `app/globals.css` - update font-family

### Add your logo
Place logo in `public/` and update header

### Update contact email
Change email in `components/Footer.tsx` and `app/contact/page.tsx`

### Add analytics
Add Google Analytics script to `app/layout.tsx`

## Performance Tips

- Images in `public/` directory are automatically optimized
- All pages are pre-rendered for speed
- CSS is automatically minified
- Lighthouse score should be 90+

## Next Steps

1. Customize content for your company
2. Test on mobile and desktop
3. Deploy to VPS (see README.md)
4. Set up SSL certificate
5. Configure domain name
6. Test everything works

## Getting Help

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT_CHECKLIST.md` before launching
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs

---

**Happy building! 🚀**
