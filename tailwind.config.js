/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#18171c",
        secondaryBg: "#1d1c21",
        tertiaryBg: "#26242b",
        bgBorder: "#8B8B8B",
        primaryAccent: "#ffd700",
        secondaryAccent: "#0a7f50",
        redAccent: "#ff5a5a",
        casinoNightBlue: "#374E68",
        fontLight: "#e0dfdf",
        brightBlue: "#4285f4",
        orange: "#ffaa63",
        highlight: "#f5f5f5",
        subduedText: "#7d7d7d",
        errorAlert: "#ff4747",
      },
      fontFamily: {
        lobster: ['"Lobster Two"', "sans-serif"],
        montserrat: ["'Montserrat", "sans-serif"],
        oneset: ["Oneset", "sans"],
      },
      boxShadow: {
        yellow:
          "0 4px 6px -1px rgba(255, 215, 0, 0.1), 0 2px 4px -1px rgba(255, 215, 0, 0.06)",
        "yellow-lg":
          "0 10px 15px -3px rgba(255, 215, 0, 0.1), 0 4px 6px -2px rgba(255, 215, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
