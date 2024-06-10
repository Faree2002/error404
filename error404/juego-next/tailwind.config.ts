import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        presentacion:"url('/images/presentacion.png')",
        Logo:"url('/images/Logo.png')",
        loginfoto:"url('/images/Age_of_Empires.png')",
        fondoAge:"url('/images/Pasto.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      colors: {
        //grassGreen: '#41980a',
        //grassGreenLight: '#56c70e',
      },
    },
    
  },
  plugins: [],
};
export default config;
