import suidPlugin from '@suid/vite-plugin';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [suidPlugin(), solidSvg(), solidPlugin()],
  base: isProd ? '/solid-template' : '',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
