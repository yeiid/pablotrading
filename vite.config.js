import { defineConfig } from 'vite';

export default defineConfig({
  // base relativa para poder desplegar en cualquier hosting estático
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // NO inlinear: los assets quedan como ficheros (logo, charts, video)
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // libs solo-PC en chunk separado (focus + video modal)
          'pc-overlays': ['./src/lib/focusPanel.js', './src/lib/videoModal.js'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
