import { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      userSelect: ['hover', 'focus'],
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        customGrey: '#838383',
      },
      backgroundColor: {
        f5: '#f5f5f5',
        blueColor: '#4676ee',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.user-select-none': {
          'user-select': 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
