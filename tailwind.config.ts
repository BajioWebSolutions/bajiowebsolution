
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
          DEFAULT: "#2DD4BF",
          dark: "#10B981",
          light: "#34D399",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          dark: "#10B981",
          gradient: "linear-gradient(135deg, #2DD4BF 0%, #10B981 100%)",
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
        'hero-gradient': 'linear-gradient(135deg, #2DD4BF 0%, #10B981 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#F8FAFC', // Increased contrast for standard text
            h1: {
              color: '#FFFFFF',
            },
            h2: {
              color: '#FFFFFF',
            },
            h3: {
              color: '#FFFFFF',
            },
            strong: {
              color: '#FFFFFF',
            },
            a: {
              color: '#2DD4BF',
              '&:hover': {
                color: '#34D399',
              },
            },
            code: {
              color: '#FFFFFF',
            },
            p: {
              color: '#F1F5F9', // Lighter, higher contrast text
            },
            li: {
              color: '#F1F5F9', // Lighter, higher contrast text
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
