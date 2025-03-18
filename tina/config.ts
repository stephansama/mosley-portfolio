import { defineConfig } from "tinacms";
import schema from "./schema";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

const publicFolder = "public";

export default defineConfig({
	branch,
	// Get this from tina.io
	clientId: process.env.PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,
	build: { outputFolder: "admin", publicFolder },
	media: { tina: { mediaRoot: "images", publicFolder } },
	schema,
});
