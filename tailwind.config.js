/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        // #010206
        secondary: "#aaa6c3",
        tertiary: "#151030",
        fourtary:"rgba(225, 225, 225, 0.15)",
        fiverey:"rgba(147, 54, 180, 0.18)",
        brprimary:"rgba( 255, 255, 255, 0.18 )",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};