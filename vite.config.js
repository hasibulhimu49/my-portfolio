import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Files in public/ are copied as-is to the build root (e.g. /assets/images/logo.png).
export default defineConfig({
  plugins: [react()],
})
