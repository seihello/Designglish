/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F1FBFB",
          main: "#239CAC",
        },
        destructive: "#ff0000",
        background: "#FFFFFF"
      }
    }
  },
  plugins: [],
}

