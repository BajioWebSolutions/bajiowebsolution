import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#1A1F2C",
        },
        foreground: {
          DEFAULT: "#111827",
          dark: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#8B5CF6",
          dark: "#7C3AED",
          light: "#A78BFA",
        },
        accent: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          gradient: "linear-gradient(135deg, #F97316 0%, #D946EF 100%)",
        },
        neutral: {
          DEFAULT: "#E2E8F0",
          dark: "#1E293B",
          light: "#F8FAFC",
        },
      },
      spacing: {
        'section': '60px',
        'card-gap': '30px',
      },
      borderRadius: {
        'card': '8px',
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "scale": "scale 0.2s ease-out",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;