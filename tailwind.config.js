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
    }
  },
  plugins: [daisyui],
}

