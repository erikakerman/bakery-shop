/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD1DC",    // Soft pink
        secondary: "#FFFDD0",  // Cream
        accent: "#C9184A",     // Deep rose
        textColor: "#333333"   // Dark gray
      },
    },
  },
  plugins: [],
}