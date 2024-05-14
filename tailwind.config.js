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
        BeigeCream: "#F5F5DC",
        LightBlue: "#ADD8E6",
        PastelYellow: "#FFFACD",
        PastelPink: "#FFDAB9",
        PastelLavender: "#E6E6FA",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
