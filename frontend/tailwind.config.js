/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-color': "#caf0f8",
        'hover_color': '#dee2e6',
        'text_color': "#219ebc"
      },
      spacing: {
        'mt-120': '15em',
      }
    },
  },
  plugins: [],
}


