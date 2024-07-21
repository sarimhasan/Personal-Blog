/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#EE9D4F',
        'light-light': '#F5F5F5',
        'light-dark': '#E7E7E7',
        'tt-light': '#343A40',
        'dark-light': '#212121',
        'dark-dark': '#121212',
        'tt-dark': '#E7E7E7',
        accent: '#FF70AB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
