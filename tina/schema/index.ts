import type { Schema } from "tinacms";

const schema: Schema = {
	collections: [
		{
			name: "layout",
			label: "Layout",
			path: "content/layout",
			format: "json",
			ui: {
				allowedActions: { create: false, delete: false },
				global: true,
			},
			fields: [
				{ type: "string", name: "title", label: "Title" },
				{ type: "image", name: "profile", label: "Profile Photo" },
			],
		},
		{
			name: "post",
			label: "Posts",
			path: "content/posts",
			fields: [
				{
					type: "string",
					name: "title",
					label: "Title",
					isTitle: true,
					required: true,
				},
				{
					type: "rich-text",
					name: "body",
					label: "Body",
					isBody: true,
				},
			],
		},
	],
};

export default schema;
