import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [solidPlugin()],
  base: isProd ? '/solid-template' : '',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
