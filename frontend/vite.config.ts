import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  // base differs: local XAMPP lives under /bhawani/public/, production at /public/
  base: mode === 'production' ? '/public/dist/' : '/bhawani/public/dist/',
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
}))
