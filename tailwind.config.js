/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4C7D",
        secondary: "#3E84C9"
      },
      container: {
        center: true
      },
      fontSize: {
        "2xs": "0.7rem"
      },
      fontFamily: {
        "heading": ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"]
      },
      screens: {
        "xs": "500px"
      }
    },
  },
  plugins: [],
}