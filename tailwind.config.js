/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8a2b',
        accent: '#2b6ffb',
        mutedText: '#6b7280',
      },
      borderRadius: {
        xl: '18px',
        '2xl': '28px',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(14,24,40,0.06)',
      },
    },
  },
  plugins: [],
};
