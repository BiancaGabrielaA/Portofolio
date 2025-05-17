import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/demo/artist/',
  plugins: [react()],
  server: {
    host: true,
    port: 3002,
    allowedHosts: [
      'biancagabriela-dev.com',
      'www.biancagabriela-dev.com',
      'localhost',
      '127.0.0.1'
    ],
  },
  preview: {
    host: true,
    port: 3002,
    allowedHosts: [
      'biancagabriela-dev.com',
      'www.biancagabriela-dev.com',
      'localhost',
      '127.0.0.1'
    ],
  }
})
