import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/ramibus': 'http://localhost:80'
    }
  },
  plugins: [react()],
})
