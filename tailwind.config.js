/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi', 'dark']
  }
};
