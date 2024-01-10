/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      'anton':[
        "'Anton', sans-serif"
      ]
    },
    extend: {
      'favorite': '-99',
      gridTemplateColumns:{
        'nav': '1.5fr 1fr'
      }
    },
  },
  plugins: [],
}

