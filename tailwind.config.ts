import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-blurred-purple':
          'radial-gradient(circle, hsla(250, 89%, 55%, 0.1) 40%, hsla(250, 70%, 12%, 0.0) 50%, hsla(250, 70%, 12%, 0) 65%, hsla(250, 75%, 14%, 0) 100%)'
      },
      colors: {
        'brand-light': '#F7F1F9',
        'brand-dark': '#000000',
        'brand-yellow': '#D3F527',
        'brand-orange': '#FF930F',
        'brand-purple': '#4A28F2',
        'brand-lila': '#A998F8'
      },
      fontFamily: {
        monserrat: ['var(--monserrat)'],
        'jet-brains': ['var(--jet-brains)']
      },
      dropShadow: {
        'blurred-purple': '0 35px 90px rgba(74, 40, 242, 0.35)'
      }
    }
  },
  plugins: []
}

export default config
