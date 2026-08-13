/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0B0E14',
          surface: '#12161F',
          border: '#1E2638',
          hover: '#18202F',
        },
        teal: {
          accent: '#3ED6C4',
          glow: 'rgba(62, 214, 196, 0.15)',
          muted: '#22D3B8',
        },
        amber: {
          accent: '#E8A33D',
          badge: 'rgba(232, 163, 61, 0.15)',
        },
        slateText: {
          primary: '#E6E9EF',
          muted: '#8B93A7',
          dim: '#5A6378',
        },
        status: {
          green: '#4ADE80',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
