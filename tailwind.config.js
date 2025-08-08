/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0a2540',
        teal: '#2d9c8a',
        lightgray: '#e4eef0',
        orange: '#ff5b04',
        sand: '#fff7ef'
      },
      boxShadow: {
        soft: '0 12px 34px rgba(10,37,64,0.12)',
        card: '0 10px 28px rgba(10,37,64,0.08)',
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
