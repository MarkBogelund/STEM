/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2C2C2C",
        light: "#F0F0F0",
        custom_blue: "#4F90CD",
        custom_red: "#CD4F4F",
        custom_green: "#52CD4F",
        custom_yellow: "#CDB94F",
      },
    },
  },
  plugins: [],
};
