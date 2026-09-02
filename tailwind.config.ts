import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edfaf6",
          100: "#d3f4e9",
          200: "#aae9d5",
          400: "#2dcaa4",
          500: "#0f9d7e",
          600: "#0b7a62",
          700: "#0a624f",
          800: "#0c4e41",
          900: "#0b4036",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-tajawal)", "system-ui", "sans-serif"],
        arabic: ["var(--font-tajawal)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 78, 65, 0.04), 0 12px 32px rgba(12, 78, 65, 0.08)",
        phone:
          "0 25px 50px -12px rgba(11, 64, 54, 0.28), 0 0 0 1px rgba(255,255,255,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
