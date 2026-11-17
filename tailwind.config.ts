import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        ring: "var(--ring)",
        gold: "var(--gold)",
        burgundy: "var(--burgundy)",
        charcoal: "var(--charcoal)",
        champagne: "var(--champagne)",
        ivory: "var(--ivory)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-down": "slide-down 0.3s ease-out",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        "luxury-sm": "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        "luxury-md": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "luxury-lg": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "section": "80px",
        "section-sm": "60px",
      },
    },
  },
  plugins: [],
};

export default config;
