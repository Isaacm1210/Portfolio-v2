import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blueGradient": "radial-gradient(circle, rgba(0, 217, 255, 0.377) 5%, rgba(0, 0, 0, 0) 80%)"
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: '#33ffaa',
      buttonfade: '#33ffaa1a',
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
