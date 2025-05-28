/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        noir: '#0D0D0D',
        gold: '#C9A66B',
        rose: '#D79E9E',
        marble: '#EFEAE6',
      },
      fontFamily: {
        sans: ["Urbanist", "Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
