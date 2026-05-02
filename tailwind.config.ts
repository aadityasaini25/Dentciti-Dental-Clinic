import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Isha-Para brand palette — medical premium
        brand: {
          teal: "#0E7C7B",
          tealDark: "#0B5F5E",
          tealDeep: "#083F3F",
          navy: "#0A2540",
          navyDeep: "#061B2E",
          gold: "#C9A961",
          goldLight: "#E6CF94",
          mist: "#F4F9F9",
          tint: "#E6F2F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(10, 37, 64, 0.18)",
        premiumHover: "0 30px 60px -12px rgba(14, 124, 123, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
