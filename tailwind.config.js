/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "repeat-5-18": "repeat(5, 18%)",
        "repeat-3-20": "repeat(3, 20%)",
        "repeat-4-20": "repeat(4, 20%)",
      },
    },
  },
  plugins: [],
};
