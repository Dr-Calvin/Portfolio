const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/templates/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'regal-blue': '#243c5a',
        bly: '#0089d0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
