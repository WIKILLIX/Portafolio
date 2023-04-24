/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      height: {
        93: "92vh",
      },
      gridTemplateColumns: {
        hero: "1fr 26rem",
      },
    },
    colors: {
      "color-primary": "#A5C5E9",
      "color-secondary": "#ffffff",
    },
  },
  plugins: [],
};
