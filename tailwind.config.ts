// TODO: sprawdzić czy poprawnie zaczytuje wartości


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
        'light-bg': '#e5e5e5',
        'dark-bg': '#020618', // var(--color-yellow-400) jeśli się da
        'main': '#fdc700'
      }
    }
  },
  plugins: []
};
export default config;
