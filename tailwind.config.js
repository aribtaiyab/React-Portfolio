/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'secondary-bg': '#0B0B0D',
        'card-bg': 'rgba(11, 11, 13, 0.6)',
        primary: '#FFFFFF',
        secondary: '#A1A1AA',
        'accent-gold': '#D4AF37',
        'soft-gold': '#E8C96A',
        'soft-champagne': '#F3E5AB',
        'soft-cyan': '#A5F3FC',
        'warm-glow': 'rgba(212, 175, 55, 0.05)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      animation: {
        'shine': 'shine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'shine-slow': 'shine 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float-subtle': 'float-subtle 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}