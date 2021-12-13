var path = require("path");
var glob = require("glob");

export default {
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				about: path.resolve(__dirname, "about.html"),
				leadership: path.resolve(__dirname, "leadership.html"),
				sakarSpark: path.resolve(__dirname, "sakar-spark.html"),
				// about: path.resolve(__dirname, "about.html"),
				// projects: path.resolve(__dirname, "projects.html"),
				// contact: path.resolve(__dirname, "contact.html"),
				// nested: resolve(__dirname, 'nested/index.html')
			},
		},
	},
};
