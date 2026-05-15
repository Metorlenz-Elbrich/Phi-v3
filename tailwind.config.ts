import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060B14",
          900: "#060B14",
          800: "#0A111E",
          700: "#0F1724",
          600: "#151E2D",
          500: "#1B2638",
        },
        accent: {
          DEFAULT: "#00D9FF",
          soft: "#39E6FF",
          deep: "#0099CC",
        },
        text: {
          primary: "#F8FAFC",
          muted: "#94A3B8",
          dim: "#64748B",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
          accent: "rgba(0,217,255,0.32)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 5.5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        wider2: "0.18em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,217,255,0.20), 0 16px 60px -20px rgba(0,217,255,0.35)",
        soft: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.8)",
        ring: "0 0 0 1px rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-spot":
          "radial-gradient(60% 50% at 50% 30%, rgba(0,217,255,0.18), transparent 70%)",
      },
      transitionTimingFunction: {
        precision: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "breathe-glow": "breatheGlow 6s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
      },
      keyframes: {
        breatheGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.95" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
