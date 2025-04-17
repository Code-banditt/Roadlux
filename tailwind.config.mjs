import { Bricolage_Grotesque, Orbitron, Raleway } from "next/font/google";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: "#1E293B",
        "base-100": "#FFFFFF",
        black: "#000000 !important",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      clipPath: {
        "right-bottom-edge": "polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        raleway: ["Raleway", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        Bricolage_Grotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-right-bottom-edge": {
          "clip-path": "polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 100%)",
        },
        ".clip-bottom-right-quarter": {
          "clip-path": "polygon(50% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 50%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
};
