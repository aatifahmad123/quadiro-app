/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'soft-green': '#6ede8a',
        'bright-orange': '#ff9500',
        'vibrant-green': '#92e6a7',
        'dark-green': '#208b3a',
        'skinn': '#fec89a',
        'purple-one': '#9f86c0',
        'skinn-one': '#ee964b',
        'skinn-two': '#db7c26'
      }
    },
  },
  plugins: [],
}

