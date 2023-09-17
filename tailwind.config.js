/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1058px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        placeholder: {
          '0%': { backgroundPosition: '-1200px 0' },
          '100%': { backgroundPosition: '1200px 0' }
        },
        nav: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
      }
    },
    colors: {
      primary: '#43425D',
      secondary: '#3C3B54',
      color: '#4D4F5C',
      bg: '#F5F7FB',
      limeGreen: '#81E37A',
      blueCs: '#3B86FF',
      lightPurple: '#B5B3FB',
      lightPink: '#F49FA8',
      skyBlue: '#80E2FF',
      redCs: '#FF4A33',
      ...colors
      // ...
    }
  },
  plugins: [],
}
