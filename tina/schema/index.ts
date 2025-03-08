import type { Schema } from "tinacms";

const schema: Schema = {
	collections: [
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
