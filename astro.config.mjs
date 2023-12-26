import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	// https://docs.astro.build/en/guides/integrations-guide/netlify/
	adapter: netlify(),
	output: "server",
	prefetch: true,
	integrations: [
		robotsTxt({
			sitemapBaseFileName: "sitemap",
			policy: [{ userAgent: "*", allow: "/" }],
		}),
		// https://docs.astro.build/en/guides/integrations-guide/tailwind/
		tailwind({
			applyBaseStyles: false,
		}),
	],
	// https://github.com/withastro/astro/issues/8224
	// https://vitejs.dev/config/server-options.html#server-watch
	// vite: { server: { watch: { ignored: ["**/.netlify/**"] } } },
});
