/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class', //Opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: '#222326',
        secondary: '#FBBF24',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    }
  },
  },
  plugins: [],
}

