/// <reference types="astro/client" />

import type { Alpine } from "alpinejs";

interface ImportMetaEnv {
	// readonly KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// add typings for $persist function
// https://alpinejs.dev/plugins/persist
declare module "alpinejs" {
	interface PersistentStorage {
		getItem(key: string): null | object;
		setItem(key: string, value?: object): void;
	}
	interface PersistFunctions {
		as(key: string): PersistFunctions;
		using(storage: PersistentStorage): PersistFunctions;
	}
	interface Alpine {
		$persist<T>(initial: T): PersistFunctions;
	}
}

declare global {
	// https://docs.astro.build/en/guides/middleware/#middleware-types
	// add alpine instance to global window object
	interface Window {
		Alpine: Alpine;
	}
}
