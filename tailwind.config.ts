import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      '2xs': '360px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        landing: "url('../public/landing.webp')",
      },
      backgroundSize: {
        'fit-h': 'auto 100%'
      },
      height: {
        'screen-mobile': 'calc(var(--vh, 1vh) * 100)'
      },
      minHeight: {
        'screen-mobile': 'calc(var(--vh, 1vh) * 100)'
      },
      colors: {
        'main-text': '#ffffff',
        'dark-text': '#404040',
        'dark-bg': '#09090b',
        'light-bg': '#e5e5e5'
      }
    }
  },
  plugins: []
};
export default config;
