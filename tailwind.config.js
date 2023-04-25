/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ef8c73",
        headingColor: "#081e21",
        smallTextColor: "#562319",
      },
    },
  },
  plugins: [],
}