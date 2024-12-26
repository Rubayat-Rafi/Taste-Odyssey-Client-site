/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat : ['Montserrat', 'sans-serif'],
        Roboto : ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        "add-food-bg": "url('./src/assets/AddFoodBG.jpg')",
        'all-food-banner': "url('./src/assets/compressed_allfoodbanner.jpg')",
        'gallery-banner': "url('./src/assets/compressed_galleryBG.jpg')",
        "food-details-bg" : "url('./src/assets/fooddetailsBG.jpg')",
      }
      
    },
  },
  plugins: [daisyui],
}

