/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          'primary': '#3A3845',
          'secondary': '#595667',
          'tertiary': '#807F86',
          'quaternary': '#E5E5E5',
          'quinary': '#A6A6A8',
          'senary': '#374151',
          'title': '#FFFDFB',
        },
        'background': {
          'primary': '#FFFFFF',
          'secondary': '#F7F6F5',
          'tertiary': '#CAC9CF',
        },

        'brown': {
          'light': '#C69B7B',
          'dark' : '#826F66',
        }
      },
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  plugins: [],
}