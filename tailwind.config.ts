import { theme } from "./src/ui/theme";
import type { Config } from "tailwindcss";

const { colors, spacing, fontSize, lineHeight, letterSpacing } = theme;

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pagesComponents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      spacing,
      lineHeight,
      letterSpacing,
      fontSize,
      fontFamily: {
        primary: ["Montserrat", "system-ui"],
        code: ["IBM Plex Mono", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
