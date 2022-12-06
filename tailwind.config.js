/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rest-image': "url('/images/backgroundrest.jpg')"
      }
    },
  },
  plugins: [],
}
