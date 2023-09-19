/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        murasaki: "#502050",
        "fugitive-flamingo": "#ee68a4",
        "lepidolite-purple": "#937b92",
        abalone: "#f7f2f7",
        white: "#ffffff",
      },
      fontFamily: {
        league: "'League Spartan', sans-serif"
      },
    },
  },
  plugins: [],
};
