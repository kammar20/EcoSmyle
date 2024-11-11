/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '481px',
      md: '768px',
      lg: '1050px',
      xl: '1200px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        logo: ['Lora', 'serif'],
      },
      colors: {
        darkGray: '#1A1A19',
        gray: '#a3a3a3',
        darkGreen: '#31511E',
        green: '#347928',
        offwhite: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
