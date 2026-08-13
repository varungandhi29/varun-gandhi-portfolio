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
          base: '#EDE8D0',
          surface: '#F6F3E7',
          card: '#FDFBF7',
          border: '#D6CFB5',
          borderHover: '#0D9488',
        },
        teal: {
          accent: '#0D9488',
          dark: '#0F766E',
          glow: 'rgba(13, 148, 136, 0.12)',
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
          green: '#15803D',
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
