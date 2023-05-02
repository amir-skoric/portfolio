export default {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE.env === 'production' ? { cssnano: {} } : {})
  },
}
