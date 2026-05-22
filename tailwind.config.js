/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#0B090A',
        'bg-secondary': '#161A1D',
        'bg-tertiary': '#B1A7A6',
        // Interaction/Button colors
        'accent-dark': '#660708',
        'accent': '#A4161A',
        'accent-medium': '#BA181B',
        'accent-light': '#E5383B',
        // Additional colors
        'text-muted': '#D3D3D3',
        'text-light': '#F5F3F4',
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'],
        'body': ['Google Sans', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.03em',
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '200': '200% 100%',
      },
    },
  },
  plugins: [],
}
