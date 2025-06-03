import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Enable minification and tree shaking optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.log statements in production
        drop_console: true,
        // Remove unused variables
        unused: true,
        // Remove unreachable code
        dead_code: true,
      },
    },
    // Split chunks for better caching and parallel loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Group vendor dependencies
          vendor: ['vue', 'vue-router', 'pinia'],
          // Separate route components for better code splitting
          routing: ['./src/router/index.ts'],
        },
      },
    },
    // Generate source map for debugging
    sourcemap: false,
    // Report detailed build info
    reportCompressedSize: true,
  },
})
