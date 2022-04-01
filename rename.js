const { readdirSync, renameSync } = require("fs");
const { join } = require("path");

const path = join(__dirname, "/build/static/js");
const filenames = readdirSync(path);

filenames.forEach((filename) => {
	if (/main\.[0-9a-z]{8}\.js$/.test(filename)) {
		renameSync(
			path + `/${filename}`,
			path + `/${filename.replace(/\.[0-9a-z]{8}/, "")}`,
			(error) => {
				console.log(error);
			}
		);
	}
});
