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
          base: '#0f172a',
          card: '#1e293b',
          elevated: '#172033',
          border: '#334155',
          borderGlow: 'rgba(56, 189, 248, 0.25)',
        },
        cyanGlow: {
          primary: '#38bdf8',
          teal: '#2dd4bf',
          light: '#7dd3fc',
        },
        amberGlow: {
          primary: '#f59e0b',
          gold: '#fbbf24',
        },
        slateText: {
          heading: '#f8fafc',
          body: '#cbd5e1',
          muted: '#94a3b8',
        },
        emerald: {
          status: '#34d399',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(23, 32, 51, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
