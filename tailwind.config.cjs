/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- kluczowe
  content: [
    './src/**/*.{html,js,svelte,ts}', // <- Svelte pliki
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};