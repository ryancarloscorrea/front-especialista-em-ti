/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        category: {
          black: 'black',
          yellow: '#fde047',
          green: '#78B159',
          gray: '#808080',
          blue: '#226699',
          pink: '#FF669A',
          orange: '#F4900C',
          purple: '#AA8ED6'
        }
      }
    },
  },
  plugins: [],
}