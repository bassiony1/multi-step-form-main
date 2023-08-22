/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {},
      colors: {
        primary: {
          100: "hsl(206, 94%, 87%)",
          200: "hsl(228, 100%, 84%)",
          300: "hsl(243, 100%, 62%)",
          400: "hsl(213, 96%, 18%)",
        },
        secondary: "hsl(354, 84%, 57%)",

        neutral: {
          100: "hsl(231, 100%, 99%)",
          200: "hsl(217, 100%, 97%)",
          300: "hsl(229, 24%, 87%)",
          400: "hsl(231, 11%, 63%)",
        },
      },
      gridTemplateRows: {
        "6-auto": "repeat(6, minmax(0, auto))",
        "1-auto": "auto 1fr",
        layout: " 1fr auto",
      },
      gridTemplateColumns: {
        layout: "1fr 2fr",
      },

      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      matchUtilities,
      theme,
    }) {
      addBase({
        "* , *::after , *::before": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*": {
          fontSize: "initial",
          fontFamily: "Ubuntu",
        },
        html: {
          scrollBehavior: "smooth",
          height: "100%",
        },
        body: {
          height: "100%",
          lineHeight: 1.5,
        },
        a: {
          textDecoration: "none",
          cursor: "pointer",
          color: "inherit",
          display: "block",
          "&:focus": {
            outline: "none",
          },
        },
        ul: {
          listStyle: "none",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        "video,canvas,svg": {
          display: "block",
          maxWidth: "100%",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          overflowWrap: "break-word",
        },
        button: {
          cursor: "pointer",
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          "&:focus": {
            outline: "none",
          },
        },
        "::placeholder": {
          fontFamily: "Ubuntu",
        },
        "#root": {
          height: "100%",
        },
      });
      addComponents({
        ".btn": {
          borderRadius: theme("borderRadius.md"),
          fontWeight: theme("fontWeight.bold"),
          cursor: "pointer",
          transition: "all 0.3s ease",
        },
        ".btn-primary": {
          backgroundColor: theme("colors.primary.400"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.primary.300"),
          },
        },
        ".btn-secondary": {
          color: theme("colors.neutral.400"),
        },
        ".heading": {
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.4xl"),
          lineHeight: theme("lineHeight.9"),
          color: theme("colors.primary.400"),
        },
      });
      addUtilities({
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-between": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-center-col": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-between-col": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-start-col": {
          display: "flex",
          "align-items": "flex-start",
          "flex-direction": "column",
        },
        ".flex-between-start": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-start",
        },
      });
      matchUtilities(
        {
          "grid-dynamic": (value) => {
            return {
              "grid-template-columns": `repeat(auto-fit, minmax(min(${value},100%) , 1fr))`,
            };
          },
        },
        {
          values: [
            "0px",
            "200px",
            "250px",
            "300px",
            "350px",
            "400px",
            "450px",
            "500px",
            "550px",
            "600px",
            "650px",
          ],
        }
      );
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
