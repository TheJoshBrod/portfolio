// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      colors: {
        amaranth: "#e63746",
      },
    },
  },
  plugins: [],
};
