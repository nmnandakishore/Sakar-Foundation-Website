const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	purge: {
		content: [
			"./*.html",
			"./*.js",
			"./*.css",
			"./public/css/*.css",
			"./public/js/*.js",
			"./css/*.css",
			"./js/*.js",
		],
		whitelist: [],
	},
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			// primary: "#001856",
			primary: "#000248",
			primaryDark: "#010233",
			humans: "#71008c",
			animals: "#8e8b00",
			plants: "#0b6c00",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
