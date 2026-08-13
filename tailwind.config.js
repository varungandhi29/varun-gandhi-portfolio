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
          base: '#1a2234',
          surface: '#222d42',
          border: '#334155',
          hover: '#2a3750',
        },
        teal: {
          accent: '#2dd4bf',
          glow: 'rgba(45, 212, 191, 0.15)',
          muted: '#14b8a6',
        },
        amber: {
          accent: '#f59e0b',
          badge: 'rgba(245, 158, 11, 0.15)',
        },
        slateText: {
          primary: '#f8fafc',
          muted: '#cbd5e1',
          dim: '#94a3b8',
        },
        status: {
          green: '#4ade80',
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
