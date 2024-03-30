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
      },
      colors:{
        "aurora-purple": "#3B1C6F",
        "aurora-blue": "#66B9F2",
        "aurora-darkblue": "#4E67B2",
        "aurora-lightorange": "#EC92A1",
        "aurora-orangina": "#D95C7F",
        "aurora-lightred": "#AA507A"
      }
    },
  },

  plugins: [
    require('tailwindcss-animated')
  ]
};
export default config;
