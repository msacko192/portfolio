/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#111827',
        secondary: '#2563EB',
        accent:    '#4F46E5',
        success:   '#10B981',
        section:   '#F8FAFC',
        border:    '#E5E7EB',
        muted:     '#6B7280',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter:   ['Inter',   'sans-serif'],
      },
      letterSpacing: {
        display: '-0.04em',
        tight:   '-0.03em',
        label:   '0.12em',
        wide:    '0.06em',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-md':  '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-lg':  '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05)',
        glow:       '0 0 0 3px rgba(37,99,235,0.15)',
      },
    },
  },
  plugins: [],
}
