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
      fontSize: {
        "5xl": ["38px", "46px"],
        sm: ["16px", "20px"],
      },
      letterSpacing: {
        widest: ".0575em",
      },
      colors: {
        orange: {
          100: "#FDB755",
        },
      },
      gridTemplateColumns: {
        28: "repeat(28, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      spacing: {
        11.5: "46px",
        13: "3.25rem",
        15: "3.75rem",
        25: "25px",
        42: "10.25rem",
        53: "13.25rem",
        54: "13.5rem",
        58: "14.25rem",
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
