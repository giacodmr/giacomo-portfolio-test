import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    ssr: {
      // Primer Brand's ESM build imports component CSS internally.
      // Bundle dependencies during prerender so Vite transforms those CSS imports.
      noExternal: true
    }
  }
});
