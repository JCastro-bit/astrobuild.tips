import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Tailwind CSS. Se debe agregar al array cada una de las integraciones que se deseen utilizar
  integrations: [tailwind(), mdx()]
});