import { z } from "astro:content";

export const postSchema = z.object({
	title: z.string(),
	body: z.any().optional(),
});

export const layoutSchema = z.object({
	title: z.string().optional(),
	profile: z.string().optional(),
});
