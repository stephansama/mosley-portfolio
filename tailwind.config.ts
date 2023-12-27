import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poiret One"],
			},
		},
		debugScreens: {
			position: ["bottom", "right"],
			style: {
				color: "whitesmoke",
				padding: "10px",
				backdropFilter: "blur(8px)",
				backgroundColor: "rgba(0,0,0,.4)",
			},
		},
	},
	plugins: [
		// https://www.npmjs.com/package/@iconify/tailwind
		addDynamicIconSelectors(),
		// https://github.com/tailwindlabs/tailwindcss-forms
		// require("@tailwindcss/forms"),
		// https://tailwindcss.com/docs/typography-plugin
		// require("@tailwindcss/typography"),
		// https://github.com/jorenvanhee/tailwindcss-debug-screens
		require("tailwindcss-debug-screens"),
		scrollbar({ nocompatible: true }),
	],
} satisfies Config;
