import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Use '/' for custom domain or '/repository-name/' for GitHub Pages subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps in production for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          analytics: ['react-ga4'],
        },
      },
    },
  },
  // SEO-friendly configuration
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
