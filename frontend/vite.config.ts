import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Absolute base matching the public/dist/ serve path so asset URLs resolve correctly
  base: '/public/dist/',
  build: {
    outDir: '../public/dist',
    emptyOutDir: true,
  },

  server: {
    // Proxy API calls and static assets to the XAMPP-served CI4 app during development
    proxy: {
      '/bhawani/public/api': {
        target: 'http://localhost',
        changeOrigin: true,
      },
      '/bhawani/public/images': {
        target: 'http://localhost',
        changeOrigin: true,
      },
    },
  },
})
