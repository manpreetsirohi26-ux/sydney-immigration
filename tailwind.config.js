/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0B1F3A',
        'primary-navy-light': '#1A3A5C',
        'primary-navy-dark': '#061426',
        'primary-gold': '#D4A537',
        'primary-gold-light': '#E8C566',
        'primary-gold-dark': '#B38A23',
        'secondary-light': '#F5F7FA',
        'secondary-gray': '#64748B',
        'secondary-dark': '#1E293B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(11,31,58,0.08)',
        'elevated': '0 20px 50px rgba(11,31,58,0.12)',
        'gold': '0 10px 40px rgba(212,165,55,0.25)',
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