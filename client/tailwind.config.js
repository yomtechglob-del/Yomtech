/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1DA1F2",        // Electric Blue Accent
          hover: "#0ED3DD",       // Cyan Hover Accent
          cyan: "#0ED3DD",        // Neon Cyan Accent
          navy: "#0C2340",        // Deep Sapphire Navy (NO BLACK)
          deepNavy: "#081829",    // Rich Midnight Navy Base
          purple: "#8B5CF6",      // Vibrant Purple Accent
          emerald: "#10B981",     // Luminous Emerald Accent
          amber: "#F59E0B",       // Warm Amber Accent
          white: "#FFFFFF",       // Pure White
          muted: "#475569",       // Muted Slate Text
          bg: "#EAF6FF",          // Light Sapphire Canvas (NO BLACK)
          secondaryBg: "#E0F2FE", // Soft Sky Secondary Canvas
          card: "#FFFFFF",        // White Glass Card Container
          darkCard: "#FFFFFF",    // White Card Container
          border: "rgba(29, 161, 242, 0.25)",
          glassBorder: "rgba(14, 211, 221, 0.35)",
          glass: "rgba(255, 255, 255, 0.95)"
        }
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        display: ['"Roboto"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        outfit: ['"Roboto"', 'sans-serif'],
        sora: ['"Roboto"', 'sans-serif']
      },
      boxShadow: {
        'dodger-glow': '0 8px 25px rgba(30, 144, 255, 0.22)',
        'cyan-glow': '0 8px 25px rgba(14, 211, 221, 0.22)',
        'purple-glow': '0 8px 25px rgba(139, 92, 246, 0.20)',
        'dodger-card': '0 12px 35px -5px rgba(12, 35, 64, 0.07)',
        'glass-card': '0 12px 32px 0 rgba(14, 165, 233, 0.08)',
        'elevated-card': '0 20px 40px -15px rgba(14, 116, 144, 0.12)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'border-spin': 'border-spin 3s linear infinite',
        'border-spin-slow': 'border-spin 6s linear infinite',
        'dash-flow': 'dash-flow 1.8s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(30, 144, 255, 0.15)' },
          '100%': { boxShadow: '0 0 30px rgba(14, 211, 221, 0.35)' }
        },
        'border-spin': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' }
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
};