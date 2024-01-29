/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script/**/*.js'],
  theme:{
    fontFamily: {
      anton: ["'Anton', sans-serif"],
    },
    screens: {
      'phone': '330px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      favorite: '-99',
      gridTemplateColumns: {
        nav: '2fr 1fr',
      },
    },
  },
  plugins: [],
}