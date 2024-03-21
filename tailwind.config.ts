import type { Config } from "tailwindcss";
import { metalurdo } from "@/app/layout";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        metalurdo: ['var(--font-metalurdo)']
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontSize: {
        dropDown: '1rem',
        dropDownItem: '0.8rem'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      
    },
  },
  plugins: [],
};
export default config;
