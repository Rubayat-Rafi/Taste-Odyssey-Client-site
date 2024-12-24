/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
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
        'all-food-banner': "url('./src/assets/allfoodbanner.jpg')",
        'gallery-banner': "url('./src/assets/galleryBG.jpg')",
      }
      
    },
  },
  plugins: [daisyui],
}

