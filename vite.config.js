import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths, so the built site works on GitHub Pages (e.g. /portfolio/) or any other folder.
  base: './',
})
