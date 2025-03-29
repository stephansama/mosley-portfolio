import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { Project } from "ts-morph";

const tinaSpecificTypes = ["__typename", "id", "_sys", "_values"];

const zodMap: Record<string, () => z.ZodTypeAny> = {
	string: () => z.string(),
	any: () => z.any(),
};

export function tinaTypeToZod(alias: string): z.ZodObject<z.ZodRawShape> {
	const project = new Project();
	const source = project.addSourceFileAtPath("./tina/__generated__/types.ts");

	const Type = source.getTypeAlias(alias);
	if (!Type) {
		throw new Error(`Type alias "${alias}" not found`);
	}

	const shape: Record<string, z.ZodTypeAny> = Type.getType()
		.getIntersectionTypes()
		.flatMap((t) =>
			t
				.getProperties()
				.filter((p) => !tinaSpecificTypes.includes(p.getName()))
				.map((p) => ({
					name: p.getName(),
					optional: p.isOptional(),
					type: p.getTypeAtLocation(Type).getText(),
				})),
		)
		.reduce(
			(prev, curr) => {
				const next =
					zodMap[curr.type as keyof typeof zodMap] ?? (() => z.any());
				const schema = next();
				return {
					...prev,
					[curr.name]: curr.optional ? schema.optional() : schema,
				};
			},
			{} as Record<string, z.ZodTypeAny>,
		);

	return z.object(shape);
}

// export function tinaTypeToZod(
// 	alias: string,
// ): z.ZodObject<Record<string, z.ZodTypeAny>> {
// 	const project = new Project();
//
// 	const source = project.addSourceFileAtPath("./tina/__generated__/types.ts");
//
// 	console.log(source && "source file loaded");
//
// 	const Type = source.getTypeAlias(alias);
//
// 	const shape = Type?.getType()
// 		.getIntersectionTypes()
// 		.flatMap((t) =>
// 			t
// 				.getProperties()
// 				.filter((p) => !tinaSpecificTypes.includes(p.getName()))
// 				.map((p) => ({
// 					name: p.getName(),
// 					optional: p.isOptional(),
// 					type: p.getTypeAtLocation(Type).getText(),
// 				})),
// 		)
// 		.reduce((prev, curr) => {
// 			const next = zodMap[curr.type as keyof typeof zodMap];
// 			return { ...prev, [curr.name]: next() };
// 		}, {});
//
// 	console.log(shape);
// 	return z.object(shape!);
// }

const schema = tinaTypeToZod("Post");

const other = z
	.object({})
	.merge(z.object({ title: z.string() }))
	.merge(z.object({ body: z.any() }));

console.log(JSON.stringify(schema?.shape) === JSON.stringify(other.shape));

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content" }),
	schema: tinaTypeToZod("Post"),
});

export const collections = { posts };
