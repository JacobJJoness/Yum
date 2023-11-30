/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#257500',
        black: '#000000',
        background: '#DAFFC1',
      },
    },
  },
  plugins: [],
}

