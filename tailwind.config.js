module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: ["./node_modules/flowbite/**/*.js"],
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
  plugins: [require("tailwindcss-rtl")],
};
