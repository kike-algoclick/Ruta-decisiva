/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // azul personalizado
        secondary: '#F59E42', // naranja personalizado
        accent: '#10B981', // verde personalizado
      },
    },
  },
  plugins: [],
};
