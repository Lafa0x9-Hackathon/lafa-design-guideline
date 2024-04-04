/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Libre-Franklin": ["Libre Franklin", "sans-serif"],
      },
      colors: {
        "violet-400": "#6F3FF5",
        "gray-200": "#C4C1CF",
      },
    },
  },
  plugins: [],
};
