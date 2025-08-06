import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      three: path.resolve(__dirname, './node_modules/three/'),
      '@react-three/fiber': path.resolve(__dirname, './node_modules/@react-three/fiber/')
    }
  },
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    port: 3666,
    open: true
  },
  base: '/'
})
