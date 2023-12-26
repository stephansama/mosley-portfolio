import { getIconData, iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";
import { IncludedIconPacks, type IncludedIconPack } from "./packs";

/**
 * @description Inspired from this example https://iconify.design/docs/usage/svg/utils/
 * @param pack pack iconify icon resides
 * @param name name of icon to pull from pack
 * @param customisations modifications to apply to the icon
 * @returns string representation of svg
 */
export const loadSVG = async (
	pack: IncludedIconPack,
	name: string,
	customisations?: { height?: number; width?: number }
) => {
	name = name?.toLowerCase();
	customisations = customisations ?? { height: 16 };
	if (!IncludedIconPacks.includes(pack))
		return console.error(`pack with name of [ ${pack} ] not found`);
	const icon = getIconData(
		await import(`../../../node_modules/@iconify-json/${pack}/index.mjs`).then(
			({ icons }) => icons
		),
		name
	);
	if (!icon)
		return console.error(
			`icon with name of [ ${name} ] not found in [ ${pack} ]`
		);
	const { body, attributes } = iconToSVG(icon, customisations);
	return iconToHTML(replaceIDs(body), attributes);
};
