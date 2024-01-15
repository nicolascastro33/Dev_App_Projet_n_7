/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script/**/*.js'],
    fontFamily: {
      anton: ["'Anton', sans-serif"],
    },
    extend: {
      favorite: '-99',
      gridTemplateColumns: {
        nav: '2fr 1fr',
      },
    },
  },
  plugins: [],
};
