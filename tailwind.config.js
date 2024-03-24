/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Libre-Franklin"],
      },
      placeholderFontSize: {
        sm: "0.875rem;",
      },
    },
  },
  plugins: [],
};
