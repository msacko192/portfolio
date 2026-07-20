import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
  },
  server: {
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true },
    },
  },
}))
