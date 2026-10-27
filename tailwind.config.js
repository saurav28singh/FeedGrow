/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#064E4A",
          "teal-dark": "#032C2A",
          "teal-light": "#0E6560",
          emerald: "#008F68",
          "emerald-hover": "#007A58",
          "emerald-light": "#02A277",
          lime: "#84CC16",
          "lime-hover": "#74B812",
          mint: "#F0FDF8",
          "mint-subtle": "#F7FEFA",
          "mint-border": "#C9F0E3",
          white: "#FFFFFF",
          dark: "#040A08",
          charcoal: "#1F2826",
          muted: "#5B6C68",
          border: "#E2ECE9",
          pill: "#F1F5F4",
          cardBg: "#F7FAF9",
          // Backward compatibility mappings
          green: "#008F68",
          "green-hover": "#007A58",
          "green-light": "#F0FDF8",
          "green-subtle": "#F7FEFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        "emerald-sm": "0 2px 8px rgba(0, 143, 104, 0.12)",
        "emerald-md": "0 6px 20px rgba(0, 143, 104, 0.22)",
        "emerald-lg": "0 12px 32px rgba(0, 143, 104, 0.28)",
        "teal-sm": "0 2px 8px rgba(6, 78, 74, 0.12)",
        "teal-md": "0 6px 20px rgba(6, 78, 74, 0.2)",
      },
    },
  },
  plugins: [],
};
