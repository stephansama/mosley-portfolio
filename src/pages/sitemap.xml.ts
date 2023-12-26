import xml from "xml";
import { homepage as loc } from "@pkg";

const createURLEntry = (
	loc: string,
	date = new Date().toISOString(),
	...rest: { [key: string]: string }[]
) => ({
	url: [
		{ loc },
		{ lastmod: new Date(date).toISOString().split("T")[0] },
		...rest,
	],
});

export async function GET() {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>${xml({
			urlset: [
				{ _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
				// index url entry
				createURLEntry(
					loc,
					new Date().toISOString(),
					{ changefreq: "daily" },
					{ priority: "1.0" }
				),
			],
		})}`,
		{
			status: 200,
			statusText: "OK",
			headers: { "Content-Type": "application/xml" },
		}
	);
}
