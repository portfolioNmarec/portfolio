import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? '/mougammadaly-but-2-stage/' : '',
  // eslint-disable-next-line no-undef
  publicPath: process.env.NODE_ENV === 'production' ? '/mougammadaly-but-2-stage/' : '',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
