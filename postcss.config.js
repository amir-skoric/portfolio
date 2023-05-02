export default {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE.ENV === 'production' ? { cssnano: {} } : {})
  },
}
