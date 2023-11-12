/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'NieRbg': '#C8C2AA',
        'NieR': '#4D493E',
        fontFamily: {
          custom: ['NieR', 'sans']
        }
      },
    },
    plugins: [],
  }
}
