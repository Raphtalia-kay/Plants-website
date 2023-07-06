/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#4CAF50',
        'bordercolor' : '#8B4513',
        'secondbg' : '#F5F5DC',
        'highlight' : '#FFEB3B',
        'fortext' : '#FFFFFF'
      }
    },
  },
  plugins: [],
};
