/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      animation: {
        skills: "giro 8s linear infinite",
        wave: "wave 1s ease-in-out infinite",
        glitch: "glitch 5s ease-in-out infinite",
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
        glitch: {
          "0%": {
            "clip-path": "var(--move1)",
            transform: "translate(0px,-10px)",
          },

          " 10%": {
            "clip-path": "var(--move2)",
            transform: "translate(-10px,10px)",
          },

          " 20%": {
            "clip-path": "var(--move3)",
            transform: "translate(10px,0px)",
          },

          "30%": {
            "clip-path": "var(--move4)",
            transform: "translate(-10px,10px)",
          },

          "40% ": {
            "clip-path": "var(--move5)",
            transform: "translate(10px,-10px)",
          },

          "50%": {
            "clip-path": "var(--move6)",
            transform: "translate(-10px,10px)",
          },

          "60% ": {
            "clip-path": "var(--move1)",
            transform: "translate(10px,-10px)",
          },

          "70% ": {
            "clip-path": "var(--move3)",
            transform: "translate(-10px,10px)",
          },

          "80% ": {
            "clip-path": "var(--move2)",
            transform: "translate(10px,-10px)",
          },

          "90% ": {
            "clip-path": "var(--move4)",
            transform: "translate(-10px,10px)",
          },

          "100%": {
            "clip-path": "var(--move1)",
            transform: " translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
