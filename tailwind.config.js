/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white-primary': '#FFFFFF',
        'black-primary': '#282A35',
        'green-primary': '#059862',
        'green-secondary': '#D9EEE1',
        'dark-secondary' : '#252423',
        'dark-primary' : '#11100F',
      }
    },
  },
  plugins: [],
}

