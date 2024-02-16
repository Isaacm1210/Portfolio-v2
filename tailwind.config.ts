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
        "section-gradient": "radial-gradient(circle at 45% 40%, rgba(255, 191, 14, 0.1) , rgba(0, 0, 0, 0) 25%), radial-gradient(circle at 55% 40%, rgba(14, 227, 255, 0.1) , rgba(0, 0, 0, 0) 25%),radial-gradient(circle at center 60%, rgba(255, 14, 223, 0.1) , rgba(0, 0, 0, 0) 25%)",
        "cursor": "radial-gradient(circle at center, rgba(255,255,255, 0.1), rgba(0, 0, 0, 0)50%)"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "green": '#33ffaa',
        "buttonfade": '#33ffaa1a',
        "white-2": "rgba(255,255,255,0.027)",
        "nav": "rgba(255,255,255,0.03)"
      },
      spacing: {
        '128h': '90vh',
        '20h': '20vh',
        '2xl': "700px",
        "204": '204px'
      },
      borderWidth: {
        '1/2': "0.5px"
      },
      screens: {
        'md2': '960px',
        '2xl': "700px"
      },
      boxShadow: {
        'glow' : '0 0 5px 2px rgba(255, 255, 255, 0.5)'
      }
    },

  },
  plugins: [],
};
export default config;
