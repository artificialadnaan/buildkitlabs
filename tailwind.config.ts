import type { Config } from 'tailwindcss'

/**
 * BuildKit Labs — "Engineering Drawing" design system.
 * Bone drafting paper, ink linework, a single hi-vis safety-orange accent.
 * No glow, no gradients-as-decoration — structure comes from lines and marks.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Drafting paper — cool-neutral bone / vellum, not warm cream
        paper: {
          50:  '#FBFAF6', // brightest drawing sheet
          100: '#F7F6F1', // raised sheet
          200: '#EFEEE9', // MAIN background (the drafting table)
          300: '#E7E5DE', // recessed panel
          400: '#DED9CD', // deep panel / fill
        },
        // Ink — near-black drafting ink, cascading to muted annotation grey
        ink: {
          DEFAULT: '#1A1915',
          900: '#1A1915',
          800: '#2A2822',
          700: '#3E3B33',
          600: '#514D43',
          500: '#67655C', // muted body copy
          400: '#8B887C', // captions / disabled
        },
        // Hairlines — the drawn borders of the sheet
        line: {
          DEFAULT: '#D5D2C8',
          soft:    '#E4E1D8',
          strong:  '#BEB9AB',
        },
        // THE ONE ACCENT — hi-vis safety orange. Kept under `primary`
        // so any legacy reference stays on-brand.
        primary: {
          50:  '#FDF3EC',
          100: '#FBE0CF',
          200: '#F6C3A5',
          300: '#F09E71',
          400: '#EB7B43',
          500: '#E4551E', // base accent
          600: '#C64310', // hover / pressed
          700: '#9E340B',
          800: '#7B2909',
          900: '#5E2109',
        },
      },
      fontFamily: {
        sans:    ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        // Subtle "sheet resting on the table" — no colored glow
        sheet: '0 1px 1px rgba(26,25,21,0.03), 0 12px 30px -20px rgba(26,25,21,0.30)',
        lift:  '0 2px 4px rgba(26,25,21,0.05), 0 22px 46px -22px rgba(26,25,21,0.35)',
      },
      borderColor: {
        DEFAULT: '#D5D2C8',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawX: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'draw-x':  'drawX 0.8s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
export default config
