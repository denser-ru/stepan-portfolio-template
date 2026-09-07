import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stepan.github.io',
  markdown: {
    // Теперь Степану не нужно писать layout в своих файлах. Astro сам применит дизайн!
    shikiConfig: { theme: 'dracula' }
  }
});
