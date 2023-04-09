/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ejs,js}"],
  theme: {
    extend: {
      colors: {
      'primary': "#1F2029",
      "secondary": "#181b23",
      "text-gray": "#EEEEF2",
      "btn-primary": "#4c1d95", 
      "btn-secondary": "#c026d3"
    }},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}