/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#C92127",
        Black: "#0B0A0A",
        White: "#FAFAFA",
      },
      fontFamily: {
        Display: "CLASH_DISPLAY",
      },
    },
  },
  plugins: [],
};
