/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      animation: {
        skills: "giro 8s linear infinite",
        wave: "wave 1s ease-in-out infinite",
        rotation: "rotation 5000ms infinite linear",
        card: "card 500ms ease-in-out",
        reverse: "cardReverse 500ms ease-in-out",
      },
      keyframes: {
        giro: {
          "0%": {
            transform: "rotateX(60deg) rotateZ(0)",
          },
          "100%": {
            transform: "rotateX(60deg) rotateZ(-360deg)",
          },
        },
        wave: {
          "0%,100%": {
            marginBottom: "0",
          },
          "50%": {
            marginBottom: "10px",
          },
        },
        rotation: {
          "o%": {
            transform: "rotateZ(0deg)",
          },
          "0%": {
            transform: "rotateZ(360deg)",
          },
        },
        card: {
          "0%": {
            transform: "translateX(-500px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        cardReverse: {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
