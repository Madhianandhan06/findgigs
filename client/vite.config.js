import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Or vue, svelte, etc. if using a framework)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Add the Tailwind plugin here
  ],
})
