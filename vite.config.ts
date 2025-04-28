
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './', // Use relative paths for all assets
  
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  server: {
    host: '::',
    port: 8080,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Add minify option to ensure proper build
    minify: 'terser',
    // Add terser options for better output
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console logs in production
      }
    },
    // Make sure Vite doesn't choke on dynamic imports
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Add optimizeDeps to improve build process
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: []
  }
}));
