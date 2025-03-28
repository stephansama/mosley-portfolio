import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content" }),
});

export const collections = { posts };
