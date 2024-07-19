/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobileL: "425px",
      tablet: "768px",
      laptopM: "1020px",
      laptopL: "1440px",
    },
    colors: {
      backgroundColor: "#E1E0DE",
      primary: "#000000",
      secondary: "#CFA200",
      grey: "#444444",
    },
    fontFamily: {
      amiko: ["Amiko", "sans-serif"],
      cabin: ["Cabin"],
      inter: ["Inter"],
      Jet: ["JetBrains Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
