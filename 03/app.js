import { files } from "./data.js";

const sizes = files.map((e) => {
	switch (e.size.unit) {
		case "KB":
			return e.size.length * 1024;
		case "MB":
			return e.size.length * Math.pow(1024, 2);
		case "GB":
			return e.size.length * Math.pow(1024, 3);
		default:
			return e.size.length;
	}
});

const sum = sizes.reduce((a, b) => a + b, 0);

console.log(`Suma zajmowanej przestrzeni wynosi ${sum}B`);
