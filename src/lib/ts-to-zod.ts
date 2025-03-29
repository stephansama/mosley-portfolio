import { z } from "astro:content";
import { Project } from "ts-morph";

const tinaSpecificTypes = ["__typename", "id", "_sys", "_values"];

export function tinaTypeToZod(alias: string) {
	const project = new Project();

	const source = project.addSourceFileAtPath("./tina/__generated__/types.ts");

	console.log(source && "source file loaded");

	const Type = source.getTypeAlias(alias);

	const shape = Type?.getType()
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
		.reduce((prev, curr) => {
			const next = z[curr.type as keyof typeof z] ?? z.any;
			// console.log(curr);
			return { ...prev, [curr.name]: next() };
		}, {});

	console.log(shape);
	return z.object(shape!);
}
