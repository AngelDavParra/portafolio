import { defineConfig } from "vite";
import path from 'path'

export default defineConfig( {
    base: "/portafolio/", 
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          portfolio: path.resolve(__dirname, 'portfolio.html'),
          resumen: path.resolve(__dirname, 'resumen.html'),
        },
    },
  },
})
