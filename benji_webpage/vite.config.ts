import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  server: {
		prerender: {
			crawlinks: true,
		}
	},
	vite: {
		base: "/webpage",
	},
	plugins: [solidStart(),
		nitro()
	],
});
