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
        loader: "loader 500ms alternate infinite ease",
        shadowLoader: "shadowLoader 500ms alternate infinite ease",
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
        loader: {
          "0%": {
            top: "60px",
            height: "5px",
            borderRadius: "50px 50px 25px 25px",
            transform: "scaleX(1.7)",
          },

          "40%": {
            height: "20px",
            borderRadius: "50%",
            transform: "scaleX(1)",
          },

          "100%": {
            top: "0%",
          },
        },
        shadowLoader: {
          "0%": {
            transform: "scaleX(1.5)",
          },

          "40%": {
            transform: "scaleX(1)",
            opacity: ".7",
          },

          "100%": {
            transform: "scaleX(.2)",
            opacity: ".4",
          },
        },
      },
    },
  },
  plugins: [],
};
