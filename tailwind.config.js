/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'myBlack': '#2D2D2D',
      'myWhtie': '#e8e8e8',
    }
  },
  plugins: [],
}