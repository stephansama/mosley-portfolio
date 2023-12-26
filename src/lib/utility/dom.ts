/**
 * @description registers event listener to window persists through view transitions
 * @param listener - function used during initial event and every subsequent swap
 * @param windowEvent - initial window event type to listen to
 */
export const registerToDOM = (
	listener: () => void,
	windowEvent: "DOMContentLoaded" | "alpine:init" = "DOMContentLoaded"
) => {
	window.addEventListener(windowEvent, listener);
	document.addEventListener("astro:after-swap", listener);
};
