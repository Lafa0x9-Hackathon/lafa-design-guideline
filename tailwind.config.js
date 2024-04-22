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
        "violet-500": "#5932C4",
        "gray-200": "#C4C1CF",
        "gray-white": "#FFFFFF",
        "gray-300": "#A7A2B6",
        "gray-400": "#757087",
        "teal-400": "#02E2AC",
        "teal-500": "#11BC92",
        "pink-400": "#F3587D",
        "pink-500": "#D03E63",
      },
      placeholderFontSize: {
        sm: "0.875rem;",
      },
    },
  },
  plugins: [],
};
