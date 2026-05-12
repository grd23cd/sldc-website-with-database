import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://your-vercel-url.vercel.app',
  base: '/sldc-website/',

  vite: {
    plugins: [tailwindcss()]
  }
});
