import fontFile from "figlet/importable-fonts/Doom";
import figlet, { parseFont } from "figlet";

export const displayFiglet = (txt: string) => {
	parseFont("Doom", fontFile);
	figlet(txt, "Doom", (e, result) => {
		console.log(e ? e : result);
	});
};
