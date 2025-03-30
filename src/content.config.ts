import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { postSchema } from "../tina/zod/schema";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content" }),
	schema: postSchema,
});

export const collections = { posts };
