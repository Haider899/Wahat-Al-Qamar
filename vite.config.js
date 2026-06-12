import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: { port: 5173, open: true },
  build: { 
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
});
