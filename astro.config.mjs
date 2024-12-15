import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  devOptions: {
    open: false, // Abre el navegador automáticamente si es necesario
  },
});