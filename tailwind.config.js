const plugin = require("tailwindcss");
const buttonPlugin = require("./plugins/buttonPlugin.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1s linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant.js"),
    require("./plugins/animationDelay.js"),
    require("./plugins/tableCaption.js"),
    require("./plugins/buttonPlugin.js"),
  ],
};
