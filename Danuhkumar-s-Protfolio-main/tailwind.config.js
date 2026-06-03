/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#00BFFF",
          purple: "#A855F7",
        },
        dark: {
          900: "#000000",
          800: "#0A0A0A",
          700: "#121212",
          600: "#1A1A1A",
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
