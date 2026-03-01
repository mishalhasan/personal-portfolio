/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#362417",
          tan: "#f1dabf",
          yellow: "#faf1cf",
          darkyellow: "#f2e9ce",
          gray: "#92817a",
          black: "#000500",
          card1: "#fff2d7",
          card2: "#fffbeb",
          white: "#fffbff",
          midyellow: "#f7e9c4",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
