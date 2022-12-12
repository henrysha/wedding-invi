/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Gowun Batang', 'NanumMyeongjo', 'sans-serif'],
      },
      screens: {
        xs: '300px',
      },
      gridTemplateRows: {
        '1-2': '1fr 2fr',
        '1-3': '1fr 3fr',
        '2-3': '2fr 3fr',
        '2-5': '2fr 5fr',
      },
    },
  },
  plugins: [],
}
