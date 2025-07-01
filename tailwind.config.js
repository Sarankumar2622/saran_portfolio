/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        blob: 'blob 7s infinite',
        spinSlow: "spin 10s linear infinite",
        float: "float 3s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        'reverse-spinSlow': "reverse-spinSlow 15s linear infinite",
      },

      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'reverse-spinSlow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.1)' },
          '66%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};