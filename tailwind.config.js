/** @type {import('tailwindcss').Config} */// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        FadeIn: {
          "0%": {
            opacity: '0',
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0)",
          }
        },
        PopUp:{
          '0%' : {opacity: '0', transform: 'scale(0.4)'},
          '50%' : {opacity: '1', transform: 'scale(0.8)'},
          '100%' : {opacity: '1', transform: 'scale(1)'},
        }
        },
      animation: {
        'FadeIn': 'FadeIn 1s ease-out forwards',
        'PopUp': 'PopUp 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
};