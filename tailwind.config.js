/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:       '#21592D',
        'primary-light': '#EBF5EE',
        gold:          '#DFB12A',
        'gold-hover':  '#EFC435',
        dark:          '#1F2520',
        'text-dark':   '#1A1A1A',
        'text-muted':  '#404040',
        'bg-page':     '#F7F7F5',
        border:        '#E0E0DC',
        'gray-mid':    '#757A76',
        'gray-light':  '#C1C2C1',
      },
      fontFamily: {
        sans:    ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        xl:   '24px',
        pill: '999px',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        hover: '0 4px 24px rgba(33,89,45,0.12)',
      },
    },
  },
  plugins: [],
}
