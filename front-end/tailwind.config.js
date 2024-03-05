/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        }
      },
      animation:
        { shrink: 'shrink 2s linear 1' }
    },
  },
  darkMode: 'class',
  plugins: [],
}