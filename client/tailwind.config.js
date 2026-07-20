/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design system DJEXA 3.0 — light premium
        primary:   '#111827',
        secondary: '#2563EB',
        accent:    '#4F46E5',
        success:   '#10B981',
        warning:   '#F59E0B',
        section:   '#F8FAFC',
        border:    '#E5E7EB',
        text:      '#111827',
        muted:     '#6B7280',
        // Legacy — utilisé par les schémas SVG projet (hex en dur, pas de Tailwind)
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
        display: '-0.04em',
        tight:   '-0.03em',
        label:   '0.12em',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-md':  '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
