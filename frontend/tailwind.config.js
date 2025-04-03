/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'light-pink': '#d8c7d9',
          'dark-purple': '#13061b',
          'fuchsia': '#d030ce',
          'light-purple': '#5f4770',
          'medium-purple': '#321c43',
          'light-blue': '#68a2bd',
          'purplish-blue': '#71649b',
          'brownish': '#5f3749',
          'brownish-red': '#36122f',
          'grey': '#454550'
        }
      }
    },
  },
  plugins: [],
} 