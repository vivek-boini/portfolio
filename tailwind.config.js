/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316', // Orange-500
          600: '#ea580c',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        handwriting: ['Patrick Hand', 'cursive'], // Good for the "Pin Board" feel
      }
    },
  },
  plugins: [],
}
