/** @type {import('tailwind-css').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1DA1F2",        // Electric Blue Accent
          hover: "#0ED3DD",       // Cyan Hover Accent
          cyan: "#0ED3DD",        // Neon Cyan Accent
          navy: "#071A2B",        // High-Contrast Deep Navy Text
          purple: "#8B5CF6",      // Purple Accent
          white: "#FFFFFF",       // Pure White
          muted: "#475569",       // Muted Slate Text
          bg: "#EAF6FF",          // Light Sapphire Base Canvas (NO BLACK)
          secondaryBg: "#E0F2FE", // Soft Sky Secondary Canvas
          card: "#FFFFFF",        // White Glass Card Container
          darkCard: "#FFFFFF",    // White Card Container
          border: "rgba(29, 161, 242, 0.35)",
          glassBorder: "rgba(14, 211, 221, 0.4)",
          glass: "rgba(255, 255, 255, 0.95)"
        }
      },
      fontFamily: {
        sans: ['"Roboto"', '"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Roboto"', '"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        sora: ['"Sora"', '"Outfit"', 'sans-serif']
      },
      boxShadow: {
        'dodger-glow': '0 4px 20px rgba(30, 144, 255, 0.25)',
        'cyan-glow': '0 4px 20px rgba(56, 189, 248, 0.25)',
        'dodger-card': '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        'glass-card': '0 10px 30px 0 rgba(15, 23, 42, 0.06)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'border-spin': 'border-spin 3s linear infinite',
        'border-spin-slow': 'border-spin 6s linear infinite',
        'dash-flow': 'dash-flow 1.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(30, 144, 255, 0.15)' },
          '100%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }
        },
        'border-spin': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' }
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' }
        }
      }
    }
  },
  plugins: []
};