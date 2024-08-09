/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#e9f8ff',
          '100': '#ceefff',
          '200': '#a7e5ff',
          '300': '#6bdaff',
          '400': '#26c0ff',
          '500': '#0098ff',
          '600': '#006eff',
          '700': '#0053ff',
          '800': '#0046e6',
          '900': '#0041b3',
          '950': '#003488', // main
        },
        'secondary': {
          '50': '#f0f8ff',
          '100': '#e0f0fe',
          '200': '#b9e2fe',
          '300': '#7cccfd',
          '400': '#36b4fa',
          '500': '#0c9beb',
          '600': '#007ecf', //main
          '700': '#0161a3',
          '800': '#065286',
          '900': '#0b456f',
          '950': '#072c4a',
        }

      }
    },
  },
  plugins: [],
}

