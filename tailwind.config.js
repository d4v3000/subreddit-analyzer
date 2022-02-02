const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Bitter"],
    },
    extend: {
      fontFamily: {
        mono: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: {
          100: "#FDB755",
        },
      },
      spacing: {
        11.5: "46px",
        13: "3.25rem",
        15: "3.75rem",
        25: "25px",
        42: "10.25rem",
        53: "13.25rem",
        54: "13.5rem",
        68: "17rem",
        69: "17.25rem",
        70: "17.5rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
