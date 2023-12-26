/**
 * @description retrieves a serverless function
 * @param path path relative to root for serverless function
 * @param action action to perform on specified path
 * @param params any additional query parameters necessary for specified action
 * @param origin if running server side supply this value in order to allow it to resolve properly
 * @returns serverless promise
 */
export function serverless<T>(
	path: string,
	action?: string,
	params?: { [key: string]: string },
	origin?: string
): Promise<T> {
	const queryParams = action
		? `?${new URLSearchParams({ action, ...params })}`
		: "";
	return fetch(`${origin || ""}/.netlify/functions/${path}${queryParams}`).then(
		(res) => res.json()
	) as Promise<T>;
}
