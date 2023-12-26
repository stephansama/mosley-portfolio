import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import registerDarkmode, {
	type DarkmodeStore,
	darkmodeQuery,
} from "./darkmode";
import { registerToDOM } from "@lib/utility";
import { displayFiglet } from "./figlet";
import { displayName } from "@pkg";

// Plugins
// https://alpinejs.dev/plugins/persist
Alpine.plugin(persist);

// add alpine instance to global window object
window.Alpine = Alpine;

// Event Listeners
window.addEventListener("DOMContentLoaded", Alpine.start);
registerToDOM(() => {
	registerDarkmode();
	displayFiglet(displayName);
}, "alpine:init");

window
	.matchMedia(darkmodeQuery)
	.addEventListener("change", ({ matches }: MediaQueryListEvent) => {
		const modifyTransitionClass = (method: "add" | "remove" = "remove") =>
			document.documentElement.classList[method]("[&*]:!transition-none");
		modifyTransitionClass("add");
		setTimeout(modifyTransitionClass, 0);
		(Alpine.store("darkmode") as DarkmodeStore).toggle(matches);
	});
