# BuildKit Labs Website

A production-ready Next.js website for BuildKit Labs—a custom software development and web design company specializing in construction industry solutions.

## Overview

This is a modern, fully-functional website built with:

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** (mobile-first)
- **Modern Dark Theme** with electric blue accents

## Features

- Homepage with hero section, services overview, portfolio preview, and CTAs
- Detailed Services page covering custom software, web development, and consulting
- Portfolio with three in-depth project case studies
- About page with company mission, values, and team information
- Contact page with working contact form and scheduling integration
- Fully responsive mobile menu and navigation
- SEO-optimized metadata on all pages
- Smooth animations and modern UI/UX
- Fast performance and accessibility best practices

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
buildkitlabs-website/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout with header/footer
│   ├── globals.css            # Global styles
│   ├── page.tsx               # Homepage
│   ├── services/
│   │   └── page.tsx           # Services page
│   ├── portfolio/
│   │   └── page.tsx           # Portfolio/case studies page
│   ├── about/
│   │   └── page.tsx           # About page
│   └── contact/
│       └── page.tsx           # Contact page with form
├── components/
│   ├── Header.tsx             # Navigation header
│   └── Footer.tsx             # Footer with links
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## Building for Production

1. **Build the optimized production bundle:**
   ```bash
   npm run build
   ```

2. **Start the production server locally:**
   ```bash
   npm start
   ```

The build process creates:
- `.next/` directory with optimized code
- Static assets optimized for delivery
- Server-side rendering support
- API routes ready for backend integration

## Deployment to VPS

### Overview

This guide covers deployment using PM2 (Node.js process manager) and Nginx as a reverse proxy on a Linux VPS.

### Prerequisites

- Linux VPS (Ubuntu 20.04+ recommended)
- SSH access to your VPS
- Domain name pointed to your VPS IP
- Sudo/root access for initial setup

### Step 1: Server Setup

SSH into your VPS:

```bash
ssh root@your_vps_ip
```

Update system packages:

```bash
apt update && apt upgrade -y
```

Install Node.js (18+ LTS):

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs
```

Verify installation:

```bash
node --version
npm --version
```

Install PM2 globally:

```bash
npm install -g pm2
```

Install Nginx:

```bash
apt install -y nginx
```

### Step 2: Deploy Application

Create a directory for the application:

```bash
mkdir -p /var/www/buildkitlabs-website
cd /var/www/buildkitlabs-website
```

Clone your repository (or upload files):

```bash
git clone https://github.com/your-username/buildkitlabs-website.git .
```

Or if using SCP/SFTP to upload files:

```bash
# From your local machine:
scp -r ./* root@your_vps_ip:/var/www/buildkitlabs-website/
```

Install dependencies:

```bash
npm install --production
```

Build the application:

```bash
npm run build
```

### Step 3: Configure PM2

Create a PM2 ecosystem configuration file:

```bash
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'buildkitlabs-website',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_SITE_URL: 'https://buildkitlabs.com'
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
    }
  ]
};
EOF
```

Start the application with PM2:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

The output will show commands to run for auto-restart on reboot.

Verify PM2 is running:

```bash
pm2 status
pm2 logs buildkitlabs-website
```

### Step 4: Configure Nginx

Create Nginx configuration file:

```bash
cat > /etc/nginx/sites-available/buildkitlabs << 'EOF'
upstream nextjs_backend {
  server 127.0.0.1:3000;
}

# Redirect HTTP to HTTPS
server {
  listen 80;
  listen [::]:80;
  server_name buildkitlabs.com www.buildkitlabs.com;

  location /.well-known/acme-challenge {
    root /var/www/certbot;
  }

  location / {
    return 301 https://$server_name$request_uri;
  }
}

# HTTPS configuration
server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name buildkitlabs.com www.buildkitlabs.com;

  # SSL certificates (replace with your paths)
  ssl_certificate /etc/letsencrypt/live/buildkitlabs.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/buildkitlabs.com/privkey.pem;

  # SSL configuration
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;

  # Security headers
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;

  # Gzip compression
  gzip on;
  gzip_types text/plain text/css text/javascript application/javascript application/json;
  gzip_min_length 1000;

  # Client body size limit
  client_max_body_size 20M;

  # Logging
  access_log /var/log/nginx/buildkitlabs-access.log;
  error_log /var/log/nginx/buildkitlabs-error.log;

  # Reverse proxy to Next.js
  location / {
    proxy_pass http://nextjs_backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;

    # Timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
  }

  # Cache static assets
  location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$ {
    proxy_pass http://nextjs_backend;
    proxy_cache_valid 200 30d;
    proxy_cache_bypass $http_pragma $http_authorization;
    add_header Cache-Control "public, max-age=2592000, immutable";
    access_log off;
  }

  # Deny access to sensitive files
  location ~ /\. {
    deny all;
  }
}
EOF
```

Enable the configuration:

```bash
ln -s /etc/nginx/sites-available/buildkitlabs /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
```

Test Nginx configuration:

```bash
nginx -t
```

Start Nginx:

```bash
systemctl start nginx
systemctl enable nginx
```

### Step 5: SSL Certificate (Let's Encrypt)

Install Certbot:

```bash
apt install -y certbot python3-certbot-nginx
```

Obtain SSL certificate:

```bash
certbot certonly --webroot -w /var/www/certbot -d buildkitlabs.com -d www.buildkitlabs.com
```

Auto-renew certificates:

```bash
systemctl enable certbot.timer
systemctl start certbot.timer
```

### Step 6: Environment Variables

Create `.env.local` on the server:

```bash
cat > /var/www/buildkitlabs-website/.env.local << 'EOF'
NEXT_PUBLIC_SITE_URL=https://buildkitlabs.com
NEXT_PUBLIC_SITE_NAME=BuildKit Labs
NEXT_PUBLIC_CONTACT_EMAIL=hello@buildkitlabs.com
EOF
```

### Step 7: Monitoring & Maintenance

Monitor application:

```bash
pm2 monit
pm2 logs buildkitlabs-website
```

View Nginx logs:

```bash
tail -f /var/log/nginx/buildkitlabs-access.log
tail -f /var/log/nginx/buildkitlabs-error.log
```

Restart the application (if needed):

```bash
pm2 restart buildkitlabs-website
```

Update the application:

```bash
cd /var/www/buildkitlabs-website
git pull origin main
npm install --production
npm run build
pm2 restart buildkitlabs-website
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://buildkitlabs.com
NEXT_PUBLIC_SITE_NAME=BuildKit Labs
NEXT_PUBLIC_CONTACT_EMAIL=hello@buildkitlabs.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname (optional)
```

## Customization

### Updating Content

All content is in the page components. To update:

1. Edit the relevant page in `app/[section]/page.tsx`
2. Restart the application or it will hot-reload in development
3. Rebuild for production: `npm run build`

### Styling

- Tailwind CSS configuration: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Color scheme: Edit the `primary` colors in `tailwind.config.ts`

### Adding Pages

Create new pages in the `app/` directory following Next.js App Router conventions:

```
app/blog/
├── page.tsx         # /blog route
├── [slug]/
│   └── page.tsx     # /blog/[slug] dynamic route
```

## Performance Optimization

This site includes:

- Static Site Generation (SSG) for fast builds
- Image optimization with Next.js Image component
- CSS minification with Tailwind
- Gzip compression with Nginx
- Cache headers for static assets
- SEO optimization with metadata

## Security

- HTTPS/SSL encryption enforced
- Security headers configured in Nginx
- CSRF protection
- XSS prevention
- Content Security Policy ready
- No sensitive data in frontend code

## Troubleshooting

### Application won't start

```bash
pm2 logs buildkitlabs-website
```

### Nginx 502 error

Verify Next.js is running:

```bash
pm2 status
pm2 restart buildkitlabs-website
```

### SSL certificate issues

```bash
certbot renew --dry-run
certbot renew
```

### Build fails

Clear cache and rebuild:

```bash
rm -rf .next
npm run build
```

## Support & Contact

For issues or questions about the website:
- Email: hello@buildkitlabs.com
- Website: https://buildkitlabs.com

## License

This website code is proprietary to BuildKit Labs. Unauthorized copying or distribution is prohibited.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
