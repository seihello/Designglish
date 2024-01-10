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
        yellow: {
          light: "#F2EBC4",
          main: "#9E8E00",
        },
        red: {
          light: "#FFEEEF",
          main: "#DD224F",
        },
        destructive: "#DD224F",
        background: "#FFFFFF",
      },
      fontFamily: {
        roboto: ["Roboto"],
        "roboto-bold": ["RobotoBold"],
        dm: ["DMSans"],
        "dm-bold": ["DMSansBold"],
        caveat: ["Caveat"],
      },
    },
  },
  plugins: [],
};
