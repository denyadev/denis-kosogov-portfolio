/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'roboto': ['Roboto Mono', 'sans-serif', 'monospace'],
        },
        backgroundImage: {
            'bg': 'url("../public/bg.jpg")',
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    plugins: [require('tailwind-scrollbar')],
  }