import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo/artist/',
  plugins: [react()],
  server: {
    host: true,
    port: 3002,
    allowedHosts: true
  }
})