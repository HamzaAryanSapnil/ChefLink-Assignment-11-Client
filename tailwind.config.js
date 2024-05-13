/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bannerBtnBg: "#ea6a12",
        foodDetailsBg: "#fdfdf9",
        allFoodPageBgRight: "#fbf9f0",
        allFoodPageBgLeft: "#faf6f2",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
