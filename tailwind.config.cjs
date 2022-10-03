/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      screens: {
        xs: "480px",
      },
      borderWidth: {
        3: "3px",
      },
      minWidth: {
        10: "2.5rem",
        36: "9rem",
        44: "11rem",
        48: "12rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        xxs: "200px",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
      },
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        blue: {
          100: "#E6F0FD",
          200: "#CCE2FC",
          300: "#99C5FA",
          400: "#66A9F7",
          500: "#338CF5",
          600: "#0070F4",
          700: "#0064DA",
          800: "#0059C2",
          900: "#004391",
        },
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
    },
  },
  plugins: [
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
