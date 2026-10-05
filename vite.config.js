import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Only needed if your site lives at username.github.io/repo-name
  // (not at username.github.io). Uncomment and use your repo name:
  // base: '/repo-name/',
})
