/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
