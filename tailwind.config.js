/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#1b1b1b",
        secondaryBg: "#2e2e2e",
        tertiaryBg: "#3a3a3a",
        bgBorder: "#8B8B8B",
        primaryAccent: "#ffd700",
        secondaryAccent: "#0a7f50",
        tertiaryAccent: "#e63946",
        casinoNightBlue: "#374E68",
        brightBlue: "#4285f4",
        highlight: "#f5f5f5",
        subduedText: "#7d7d7d",
        errorAlert: "#ff4747",
      },
    },
  },
  plugins: [],
};
