import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              counterReset: "line",
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: "var(--shiki-light)",
              backgroundColor: "var(--shiki-light-bg)",
              border: "1px solid #e5e7eb",
            },

            ".dark pre": {
              backgroundColor: "var(--shiki-dark-bg)",
              color: "var(--shiki-dark)",
              border: "1px solid #374151",
            },

            "pre > code > span": {
              paddingLeft: "1.1rem",
              paddingRight: "1rem",
            },

            "pre code span": {
              color: "var(--shiki-light)",
            },
            ".dark pre code span": {
              color: "var(--shiki-dark)",
            },

            "[data-highlighted-line]": {
              backgroundColor: "rgba(253, 224, 71, 0.2)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
