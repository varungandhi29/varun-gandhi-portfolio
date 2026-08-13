/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          base: '#FAF8F5',
          surface: '#F4F1EA',
          card: '#FFFFFF',
          border: '#E5E0D8',
          borderHover: '#0284C7',
        },
        accent: {
          primary: '#0284C7',
          teal: '#0D9488',
          glow: 'rgba(2, 132, 199, 0.12)',
        },
        amber: {
          accent: '#D97706',
          dark: '#B45309',
        },
        slateText: {
          primary: '#0F172A',
          body: '#334155',
          muted: '#64748B',
        },
        status: {
          green: '#16A34A',
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
