/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./*.html", "./src/*.jsx"],
  },
  theme: {
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
