import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const primerBrandEnvironment = {
  name: 'primer-brand-environment',
  configEnvironment(environmentName) {
    if (environmentName === 'prerender' || environmentName === 'ssr') {
      return {
        resolve: {
          noExternal: ['@primer/react-brand']
        }
      };
    }
  }
};

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [primerBrandEnvironment]
  }
});
