import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {

  },
  optimizeDeps: { exclude: ["node_libcurl"] },
  define: {
    'process.env.VITE_APP_CINET_PAY_KEY': JSON.stringify(process.env.VITE_APP_CINET_PAY_KEY),
    'process.env.VITE_APP_CINET_PAY_SITE_Id': JSON.stringify(process.env.VITE_APP_CINET_PAY_SITE_Id),
  }
})
