import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-soft": "#FFF4EC",
        ink: "#1B1410",
        "ink-soft": "#6B5E55",
        orange: {
          DEFAULT: "#FF5A1F",
          deep: "#C2410C",
          pale: "#FFE4D1",
        },
        line: "#F0DCC9",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Arial", "sans-serif"],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
      },
      borderRadius: {
        tag: "14px",
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(-6deg) translateY(-8px)", opacity: "0" },
          "60%": { transform: "rotate(3deg) translateY(0)", opacity: "1" },
          "100%": { transform: "rotate(0deg) translateY(0)", opacity: "1" },
        },
      },
      animation: {
        swing: "swing 0.7s cubic-bezier(.2,.8,.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
