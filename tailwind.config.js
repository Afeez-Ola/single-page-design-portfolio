/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets", "./css"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px"
      },
      // backgroundImage: {
      //   "hero-mobile": "url('../assets/images/background-pattern-mobile.svg')",
      //   "hero-desktop": "url('../assets/images/background-pattern-desktop.svg')"
      // },
      textUnderlineOffset: {
        8: '8px',
      },
      borderRadius: {
        "large": "100%"
      },
      
    },
    container: {
      center: true,
    },
    colors: {
      blue: "#755CDE",
      yellow:"#F6A560",
      white: "#FFF7F0",
      pink: "#F39E9E",
      red: "#EB7565",
      green: "#61C4B7",
      purple: "#552049",
      black: "#030303",
      grey: "#7A746E",
    },
    fontFamily:{
      jakarta: ["Plus Jakarta Sans", "serif"],
    },
    fontWeight: {
      bold: 700,
      extrabold: 900,
      default: 400,
      thin: 200,
    },
    

  },
  plugins: [require('tailwind-clip-path')],
}