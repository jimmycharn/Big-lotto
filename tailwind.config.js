/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        gold: {
          light: '#f4d03f',
          DEFAULT: '#d4af37',
          dark: '#b8960c',
        },
        navy: {
          light: '#1e3a5f',
          DEFAULT: '#1a1a2e',
          dark: '#0f0f1a',
        }
      },
      fontFamily: {
        'thai': ['Prompt', 'Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
