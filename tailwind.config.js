/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        retro: ["Orbitron", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        flicker: "flicker 2.5s infinite",
      },
    },
  },
  plugins: [],
};
