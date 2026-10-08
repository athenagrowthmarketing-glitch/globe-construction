/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#000D13',
        'navy-card': '#051821',
        'navy-elevated': '#092432',
        'navy-surface': '#0E2E3F',
        'navy-border': 'rgba(203, 184, 144, 0.18)',
        'gold-champagne': '#CBB890',
        'gold-hover': '#B8A377',
        'gold-light': '#E2D7C0',
        'gold-muted': '#8E7F60',
        'canvas-warm': '#FAF9F6',
        'canvas-card': '#FFFFFF',
        'canvas-subtle': '#F4EFEA',
        'stone-ink': '#1A2128',
        'stone-secondary': '#4D5761',
        'stone-muted': '#7E8B98',
        'stone-border': '#E5DFD7',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        architectural: '0.15em',
        luxury: '0.2em',
      }
    },
  },
  plugins: [],
}
