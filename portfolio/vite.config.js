import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite + Tailwind modern setup
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              'code-bg': '#0d1117',
              'code-surface': '#161b22',
              'code-border': '#30363d',
              'code-text': '#f0f6fc',
              'code-comment': '#8b949e',
              'code-string': '#a5d6ff',
              'code-keyword': '#ff7b72',
              'code-function': '#d2a8ff',
              'code-variable': '#ffa657',
            }
          }
        }
      }
    })
  ],
  server: {
    host: true,
    port: 5173
  }
})
