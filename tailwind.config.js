/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["var(--font-bangers)"],
        rajdhani: ["var(--font-rajdhani)"],
        architectsDaughter: ["var(--font-architects-daughter)"], // Fixed variable name
      },
    },
  },
  plugins: [],
}