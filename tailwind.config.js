/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020202',
        'secondary-bg': '#09090b',
        'card-bg': 'rgba(12, 12, 14, 0.65)',
        primary: '#FFFFFF',
        secondary: '#A1A1AA',
        'accent-gold': '#D4AF37',
        'soft-gold': '#E8C96A',
        'bright-gold': '#F3D87A',
        'accent-emerald': '#10B981',
        'accent-cyan': '#06B6D4',
        'accent-purple': '#8B5CF6',
        'accent-blue': '#3B82F6',
        'warm-glow': 'rgba(212, 175, 55, 0.15)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      animation: {
        'shine': 'shine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float-subtle': 'float-subtle 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'light-sweep': 'light-sweep 2s ease-in-out infinite',
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
          '50%': { opacity: 0.5, transform: 'scale(1.05)' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'light-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}