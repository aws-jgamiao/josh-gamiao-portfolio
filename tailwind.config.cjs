/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0c0e",
          900: "#111215",
          850: "#16181c",
          800: "#1d2025",
          700: "#2a2e35",
          600: "#3a3f48",
        },
        fog: {
          100: "#f2f1ee",
          300: "#c9c7c1",
          500: "#8e8c86",
        },
        accent: {
          DEFAULT: "#c8f169",
          soft: "#c8f16926",
          ink: "#1a2306",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      screens: {
        xs: "450px",
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
