import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#1e1e1e",
      grey: "#262626",
      "grey-light": "#363636",
      white: "#DADADA",
    },
    fontFamily: {
      krub: ["Krub", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
