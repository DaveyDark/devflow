import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF7000",
          100: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "accent-blue": "#1DA1F2",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      boxShadow: {
        "light-100":
          "Opx 12px 20px Opx rgba(184, 184, 184, 0.03), Opx 6px 12px Opx rgba (184, 184, 184, 0.02), Opx 2px 4px Opx rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px Opx rgba (218, 213, 213, 0.10)",
        "light-300": "1-10px 10px 20px Opx rgbal (218, 213, 213, 0.10)",
        "dark-100": "Opx 2px 10px Opx rgba(46, 52, 56, 0.10)",
        "dark-200": "2px Opx 20px Opx rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "auth-dark": 'url("/assets/images/auth-dark.png")',
        "auth-light": 'url("/assets/images/auth-light.png")',
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var (--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var (--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
