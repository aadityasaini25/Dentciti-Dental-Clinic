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
        // Dentciti brand palette — derived from logo (sky blue + warm yellow)
        brand: {
          blue: "#2A93C7",
          blueDark: "#1E7AAC",
          blueDeep: "#155E84",
          blueBright: "#4FB3DC",
          blueSoft: "#E5F3FB",
          ink: "#0F2A40",
          inkDeep: "#081827",
          yellow: "#F5D548",
          yellowLight: "#FBE783",
          mist: "#F5FAFD",
          tint: "#E5F3FB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(15, 42, 64, 0.18)",
        premiumHover: "0 30px 60px -12px rgba(42, 147, 199, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
