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
        "blueGradient": "radial-gradient(circle, rgba(0, 217, 255, 0.377) 5%, rgba(0, 0, 0, 0) 80%)",
        "main-gradient": "radial-gradient(circle at 30% bottom, rgba(255, 191, 14, 0.1) , rgba(0, 0, 0, 0) 12%), radial-gradient(circle at 50% 95%,rgba(14, 227, 255, 0.1) , rgba(0, 0, 0, 0) 12%), radial-gradient(circle at 70% 100%,rgba(255, 14, 223, 0.1) , rgba(0, 0, 0, 0) 12%), radial-gradient(circle at 30% top, rgba(255, 191, 14, 0.1) , rgba(0, 0, 0, 0) 14%), radial-gradient(circle at 50% 5%,rgba(14, 227, 255, 0.1) , rgba(0, 0, 0, 0) 14%), radial-gradient(circle at 70% top,rgba(255, 14, 223, 0.1) , rgba(0, 0, 0, 0) 14%)",
        "section-gradient": "radial-gradient(circle at 40% center, rgba(255, 191, 14, 0.1) , rgba(0, 0, 0, 0) 32%), radial-gradient(circle at 60% center, rgba(14, 227, 255, 0.1) , rgba(0, 0, 0, 0) 32%),radial-gradient(circle at center 70%, rgba(255, 14, 223, 0.1) , rgba(0, 0, 0, 0) 32%)"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: '#33ffaa',
        buttonfade: '#33ffaa1a',
        white: "#ffffff",
      },
      spacing: {
        '128h': '90vh',
        '20h': '20vh'
      }
    },

  },
  plugins: [],
};
export default config;
