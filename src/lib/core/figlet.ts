import fontFile from "figlet/importable-fonts/Isometric4";
import figlet, { parseFont } from "figlet";

export const displayFiglet = (txt: string) => {
	parseFont("Isometric4", fontFile);
	figlet(txt, "Isometric4", (e, result) => {
		console.log(e ? e : result);
	});
};
