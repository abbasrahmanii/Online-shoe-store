module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#29212e",
      },
      fontFamily: {
        roboto: ["Roboto"],
        vazir: ["Vazir"],
      },
    },
  },
  // plugins: [],
  // plugins: [require("tailwindcss-dir")()],
  plugins: [require("tailwindcss-rtl")],
  // variants: {
  //   float: ["responsive", "direction"],
  //   margin: ["responsive", "direction"],
  //   padding: ["responsive", "direction"],
  //   space: ["responsive", "direction"],
  // },
};
