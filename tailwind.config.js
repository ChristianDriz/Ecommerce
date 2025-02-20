/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
            'sm' : '640px',
            'md' : '768px',
            'lg' : '896px',
            'xl' : '1024px',
            '2xl' : '1280px',
        },
    },
      colors: {
        'white': '#FFFFFF',
        'off-white': '#F5F5F5',
        'grey': '#EAEAEA',
        'semidark-grey': '#C6C6C6',
        'dark-grey': '#666666',
        'black': '#222222',
        'coral': '#FF6F61',
        'link-blue' : '#0066FF',
        'star' : '#FFCB14',
      },
    },
    fontFamily: {
      'inter': ['Inter'],
    },
    fontSize: {
      '64': ['4rem', {lineHeight: '4.5rem',}],
      '56': ['3.5rem', {lineHeight: '4rem',}],
      '48': ['3rem', {lineHeight: '3.5rem',}],
      '40': ['2.5rem', {lineHeight: '3rem',}],
      '32': ['2rem', {lineHeight: '2.5rem',}],
      '24': ['1.5rem', {lineHeight: '2rem',}],
      'large': ['1.125rem', {lineHeight: '2rem',}],
      'regular': ['1rem', {lineHeight: '1.5rem',}],
      'small': ['0.875rem', {lineHeight: '1.5rem',}],
      '12': ['0.75rem', {lineHeight: '1.125rem',}],
      'paragraph': ['1rem', {lineHeight: '2rem',}],
    },
  },
  plugins: [],
}