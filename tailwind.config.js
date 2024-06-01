/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "810px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
};
