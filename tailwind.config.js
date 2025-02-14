/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6495ED',
        secondary: '#4169E1',
        dark: '#111111',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(100, 149, 237, 0.3)',
        'glow-lg': '0 0 30px rgba(100, 149, 237, 0.4)',
      }
    },
  },
  plugins: [],
}