/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#145A55',
        'primary-navy-light': '#287B73',
        'primary-navy-dark': '#0E403C',
        'primary-gold': '#E17858',
        'primary-gold-light': '#F5AD91',
        'primary-gold-dark': '#B95335',
        'secondary-light': '#FBF7F2',
        'secondary-gray': '#687A75',
        'secondary-dark': '#2E403D',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(20,90,85,0.08)',
        'elevated': '0 20px 50px rgba(20,90,85,0.12)',
        'gold': '0 10px 40px rgba(225,120,88,0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};