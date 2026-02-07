module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'light-base': 'rgb(var(--color-light-base) / <alpha-value>)',
        background: 'var(--color-bg)',
        todo: 'rgb(var(--todo) / <alpha-value>)',
        inprogress: 'rgb(var(--in-progress) / <alpha-value>)',
        done: 'rgb(var(--done) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}
