import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f7f7f6",
          100: "#ebebe8",
          200: "#d9d8d2",
          300: "#b6b5ad",
          400: "#8f8d85",
          500: "#6f6d66",
          600: "#55534d",
          700: "#3b3a36",
          800: "#242320",
          900: "#151514",
          950: "#0b0b0a"
        },
        accent: "#9f8f68"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(11, 11, 10, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
