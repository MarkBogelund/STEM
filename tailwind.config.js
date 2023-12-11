/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2C2C2C",
        light: "#F0F0F0",
        custom_blue: "#48a1a6",
        custom_red: "#e29522",
        custom_green: "#5c4573",
        custom_yellow: "#dd4127",
      },
      fontFamily: {
        "didact-gothic": ["Didact Gothic", "sans-serif"],
        "libre-baskerville": ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
