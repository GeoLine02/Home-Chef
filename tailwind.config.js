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
      dropShadow: { "custom-dropshadow": "0 0 10px rgba(0, 0, 0, 1)" },
      boxShadow: {
        "3xl-boxshadow": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
