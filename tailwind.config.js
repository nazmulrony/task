/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#22C55E",

          "secondary": "#EEF1F8",



          "neutral": "#fff",

          "base-100": "#FFF",

          "info": "#38bdf8",

          "success": "#22C55E",

          "warning": "#f97316",

          "error": "#e11d48",
        },
      },
      false
    ],
  },
}