/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "space-grotesk":['"Space Grotesk"',"sans-serif"],
        "nunito-sans":['"Nunito Sans"',"sans-serif"]
      },
      boxShadow:{
        "arrow-btn":"0px 4px 15px 0px #0000001A"
      },
      colors:{
        primary:"#00D2FF",
        secondary:"#2D2D2D",
        accent:"#666666",
      },
      backgroundImage:{
        "gradient-primary":"linear-gradient(180deg,#00D2FF 0%,#059DBE 100%)",
        "gradient-secondary":"linear-gradient(161.45deg,#00D2FF -5.54%,#9AEDFF 59.11%)"
      }
    },
  },
  plugins: [],
}

