import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost:4001/graphql",
	generates: {
		"./src/graphql/": {
			preset: "client",
			config: { documentMode: "string" },
		},
		"./schema.graphql": {
			plugins: ["schema-ast"],
			config: {
				includeDirectives: true,
			},
		},
	},
};

export default config;
