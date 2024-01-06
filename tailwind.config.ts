import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["18px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["36px", "50px"],
      "4xl": ["44px", "58px"],
      "8xl": ["72px", "96px"],
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        longcang: ["Long Cang", "sans-serif"],
      },
      colors: {
        primary: "#2898FF",
        "light-blue": "#BFE7FB",
        "neutral-blue": "#E7F7FF",
        orange: "#FFA630",
        brown: "#B89687",
        "white-neutral": "#F6F6F6",
        black: "#1C1C1C",
        "neutral-400": "#494F56",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
