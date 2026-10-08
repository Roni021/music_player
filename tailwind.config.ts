import type { Config } from "tailwindcss";

/**
 * Tailwind is available for layout utilities. Colour, type and elevation come from
 * the CSS custom properties defined in app/globals.css so both themes stay in sync.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        line: "var(--line)",
        ink: "var(--text)",
        dim: "var(--text-dim)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)"
      },
      borderRadius: {
        card: "var(--r-lg)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;
