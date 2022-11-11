module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('./images/h3.jpg')",
     },
      backgroundColor:{
        primary:'var(--color-bg-primary)',
        secondary:'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)'
      },
      textColor:{
        accent:'var(--color-text-accent)',
        primary:'var(--color-text-primary)',
        secondary:'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)'
      },
      borderColor:{
        primary: 'var(color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-text-accent)',
      }
    },
  },
  plugins: [],
}