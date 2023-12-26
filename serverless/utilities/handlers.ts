import type { HandlerEvent } from "@netlify/functions";
import { error } from "./response";

export const RespondWithHandlers = async (
	event: HandlerEvent,
	handlers: {
		[action: string]: (
			event: HandlerEvent
		) => Promise<{ statusCode: number; body: string }>;
	}
) => {
	if (!event.queryStringParameters || !event.queryStringParameters["action"])
		return error("Must call function with action query parameter");
	const { action } = event.queryStringParameters;
	return await handlers[action as keyof typeof handlers](event);
};
