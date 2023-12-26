const presetEnv = require("postcss-preset-env");

// https://github.com/postcss/postcss-load-config
module.exports = {
	plugins: [
		// https://github.com/postcss/postcss-mixins#readme
		require("postcss-mixins"),
		require("postcss-import"),
		// https://github.com/postcss/autoprefixer
		require("autoprefixer"),
		// https://github.com/cssnano/cssnano
		require("cssnano"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		// https://github.com/csstools/postcss-plugins
		// https://preset-env.cssdb.org/features/
		presetEnv({ stage: 1 }),
	],
};
