module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'light-base': 'rgb(var(--color-light-base) / <alpha-value>)',
        background: 'var(--color-bg)',
      }
    },
  },
  plugins: [],
}
