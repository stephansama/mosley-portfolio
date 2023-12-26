export const IncludedIconPacks = [
	// https://www.npmjs.com/package/@iconify-json/logos
	"logos",
	// https://www.npmjs.com/package/@iconify-json/line-md
	"line-md",
	// https://www.npmjs.com/package/@iconify-json/octicon
	"octicon",
	// https://www.npmjs.com/package/@iconify-json/devicon
	"devicon",
	// https://www.npmjs.com/package/@iconify-json/healthicons
	"healthicons",
	// https://www.npmjs.com/package/@iconify-json/heroicons
	"heroicons",
	// https://www.npmjs.com/package/@iconify-json/simple-icons
	"simple-icons",
] as const;

export type IncludedIconPack = typeof IncludedIconPacks[number];
