import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';  

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: "server",          
  adapter: vercel(),          

  site: isProd
    ? 'https://your-vercel-url.vercel.app'
    : 'http://localhost:4321',

  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});