/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dracula: {
          background: '#282a36',
          current: '#44475a',
          selection: '#44475a',
          foreground: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c'
        }
      },
      backgroundColor: {
        primary: '#282a36',
        secondary: '#44475a',
        accent: '#bd93f9',
        highlight: '#8be9fd'
      },
      textColor: {
        primary: '#f8f8f2',
        secondary: '#6272a4',
        accent: '#bd93f9'
      }
    },
  },
  plugins: [],
}