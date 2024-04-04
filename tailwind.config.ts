import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brokenConsole: ["var(--font-brokenConsole)"],
        minesweeper: ["var(--font-minesweeper)"],
        lexandDeca: ["var(--font-lexendDeca)"]
      },
      backgroundImage: {
        "website-icon": "url('/Personal Icon/WebsiteLogo.gif')",
        "website-icon-ani": "url('/Personal Icon/WebsiteLogoAni.gif')",
        linkedinLogo: "url('/Icons/Linkedin-Icon.svg')",
        githubLogo: "url('/Icons/Github-Icon.svg')",
        'main-nav-pattern' : "url('/Background.svg')",
      },
      fontSize: {
        dropDown: "1rem",
        dropDownItem: "0.8rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
