import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo/artist/',
  plugins: [react()],
  server: {
    host: true,
    port: 3002,
<<<<<<< HEAD
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
=======
    allowedHosts: true
>>>>>>> refs/remotes/origin/main
  }
})