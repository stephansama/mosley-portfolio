import { Project } from "ts-morph";

import fs from "node:fs";

const tinaTypes = ["Post", "Layout"];
const tinaSpecificTypes = ["__typename", "id", "_sys", "_values"];

export function tinaTypeToZod(alias) {
	const project = new Project();
	const source = project.addSourceFileAtPath("./tina/__generated__/types.ts");

	const TypeAlias = source.getTypeAlias(alias);
	if (!TypeAlias) {
		throw new Error(`Type alias "${alias}" not found`);
	}

	const shape = TypeAlias.getType()
		.getIntersectionTypes()
		.flatMap((t) =>
			t
				.getProperties()
				.filter((p) => !tinaSpecificTypes.includes(p.getName()))
				.map((p) => ({
					name: p.getName(),
					optional: p.isOptional(),
					type: p.getTypeAtLocation(TypeAlias).getText(),
				})),
		);

	return {
		name: TypeAlias.getName(),
		shape,
	};
}

const ts = String.raw;

/**
 * @param {string} name
 */
function createZodName(name) {
	return name.toLowerCase() + "Schema";
}

/**
 * @param {{
        name: string;
        optional: boolean;
        type: string;
    }[]} shape 
 */
function createZodSchema(shape) {
	return shape
		.map((curr) => {
			return ts`${curr.name}: z.${curr.type}()${curr.optional ? ".optional()" : ""}`;
		}, [])
		.join(",\n");
}

/**
 * @param {{
    name: string;
    shape: {
        name: string;
        optional: boolean;
        type: string;
    }[];
}} ast
 */
function astToZod(ast) {
	return ts`
	export const ${createZodName(ast.name)} = 
		z.object({
			${createZodSchema(ast.shape)}
		})
	`;
}

const outputFile = "./tina/zod/schema.ts";
const ast = tinaTypes.map(tinaTypeToZod);

fs.writeFileSync(
	outputFile,
	ts`
import {z} from 'astro:content'

${ast.map(astToZod).join("\n\n")}
`,
);

console.log(JSON.stringify(ast, undefined, 2));
