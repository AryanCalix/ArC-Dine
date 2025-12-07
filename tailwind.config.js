/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B00',
          'orange-dark': '#CC5500',
          black: '#0A0A0A',
          'black-light': '#1A1A1A',
        }
      },
    },
  },
  plugins: [],
}
