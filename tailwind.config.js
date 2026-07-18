/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        encre:    '#14181A',
        craie:    '#F5F4F1',
        pierre:   '#EAE8E3',
        graphite: '#6E7377',
        pin:      '#0E5C4A',
        rule:     '#DCDAD4',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter:   ['Inter',   'sans-serif'],
      },
      letterSpacing: {
        display: '-0.03em',
        label:   '0.12em',
      },
    },
  },
  plugins: [],
}
