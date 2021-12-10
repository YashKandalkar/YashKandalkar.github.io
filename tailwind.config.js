module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./static/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: "#0a192f",
        accent: "#41b7bf",
        navyBlue: "#112240",
        lightestNavy: "#233554",
      },
      screens: {
        xs: "364px",
        mdlg: "880px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
