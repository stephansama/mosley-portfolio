export const sendResponse = (body: string | unknown, statusCode: number) => ({
	body: typeof body === "string" ? body : JSON.stringify(body),
	statusCode,
});

export const error = (body: string | any) => sendResponse(body, 400);
export const success = (body: string | any) => sendResponse(body, 200);
