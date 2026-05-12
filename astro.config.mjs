import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd
    ? 'https://your-vercel-url.vercel.app'
    : 'http://localhost:4321',

  base: '/', // ALWAYS use root for Vercel + dev

  vite: {
    plugins: [tailwindcss()]
  }
});