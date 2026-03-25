import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm amber gold — the primary accent
        primary: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Warm charcoal base — replaces cold slate
        dark: {
          50:  '#f9f7f5',
          100: '#f0ede8',
          200: '#e0d9d0',
          300: '#c8bdb0',
          400: '#a89080',
          500: '#8c6f5e',
          600: '#6e5447',
          700: '#4e3c33',
          800: '#2e2218',
          900: '#1a1410',
          950: '#0e0b08',
        },
        // Warm stone neutrals
        stone: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Blueprint grid pattern for hero
        'blueprint-grid': `
          linear-gradient(rgba(217,119,6,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(217,119,6,0.06) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      fontFamily: {
        sans:    ['var(--font-sora)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow':    '0 0 24px rgba(217,119,6,0.20)',
        'glow-lg': '0 0 48px rgba(217,119,6,0.30)',
        'warm':    '0 4px 24px rgba(14,11,8,0.40)',
        'card':    '0 2px 12px rgba(14,11,8,0.30)',
      },
      borderColor: {
        DEFAULT: '#292524',
      },
    },
  },
  plugins: [],
}
export default config
