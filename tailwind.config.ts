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
      gridTemplateRows: {
        "fr-auto": "1fr auto",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
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
      }
    }
  },
  plugins: []
}

export default config
