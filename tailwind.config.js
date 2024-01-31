/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Rutas de archivos que contienen clases de Tailwind
    "./public/index.html", // Archivo HTML que contiene clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

