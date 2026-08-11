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
          navy: "#FFFFFF",        // White Headings/Text
          purple: "#8B5CF6",      // Purple Accent
          white: "#FFFFFF",       // White Text
          muted: "#94A3B8",       // Muted Slate Text
          bg: "#151515",          // Solid #151515 Dark Base Canvas
          secondaryBg: "#0B1120", // Deep Blue-Dark Secondary Canvas
          card: "#0E162B",        // 3D Glassmorphic Card Container
          darkCard: "#0A0E1A",    // Deep Dark Card Container
          border: "rgba(59, 130, 246, 0.35)",
          glassBorder: "rgba(14, 211, 221, 0.4)",
          glass: "rgba(19, 28, 53, 0.95)"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif']
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
        'glow': 'glow 3s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(30, 144, 255, 0.15)' },
          '100%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }
        }
      }
    }
  },
  plugins: []
};