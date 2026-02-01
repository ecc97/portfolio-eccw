// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  env: {
    schema: {
      API_URL: envField.string({ context: 'client', access: 'public' }),
      EMAILJS_SERVICE_ID: envField.string({ context: 'client', access: 'public' }),
      EMAILJS_TEMPLATE_ID: envField.string({ context: 'client', access: 'public' }),
      EMAILJS_PUBLIC_KEY: envField.string({ context: 'client', access: 'public' }),
    }
  }
});