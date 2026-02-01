// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  env: {
    schema: {
      API_URL: envField.string({ context: 'client', access: 'public' }),
      RESEND_API_KEY: envField.string({ context: 'client', access: 'public' }),
    }
  }
});