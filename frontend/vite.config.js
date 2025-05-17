import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Patch for environments (like Docker) where 'crypto.getRandomValues' fails
if (typeof globalThis.crypto === 'undefined') {
  const { webcrypto } = await import('node:crypto')
  globalThis.crypto = webcrypto
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'biancagabriela-dev.com',
      'www.biancagabriela-dev.com',
      'localhost',
      '127.0.0.1'
    ],
    cors: true
  }
})

