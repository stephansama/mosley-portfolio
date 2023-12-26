import Alpine, { type PersistFunctions } from "alpinejs";

export const darkmodeLocalStorageKey = "darkmode";
export const darkmodeQuery = "(prefers-color-scheme: dark)";

export type DarkmodeOptions = "dark" | "light";
export type DarkmodeStore = {
	on: boolean | PersistFunctions;
	setTheme(val: boolean): DarkmodeOptions;
	toggle(value?: boolean): void;
};

export default function registerDarkmode() {
	Alpine.store("darkmode", {
		on: Alpine.$persist(window.matchMedia(darkmodeQuery).matches).as(
			darkmodeLocalStorageKey
		),
		setTheme: (val: boolean) =>
			(document.documentElement.className = val ? "dark" : "light"),
		toggle(value?: boolean) {
			(this as DarkmodeStore)?.setTheme(
				((this as DarkmodeStore).on = value ?? !(this as DarkmodeStore).on)
			);
		},
	} satisfies DarkmodeStore);
}
