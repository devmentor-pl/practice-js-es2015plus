import { files } from "./data.js";

const sizes = files.map((e) => {
	const { unit, length } = e.size;
	switch (unit) {
		case "KB":
			return length * 1024;
		case "MB":
			return length * Math.pow(1024, 2);
		case "GB":
			return length * Math.pow(1024, 3);
		default:
			return length;
	}
});

const sum = sizes.reduce((a, b) => a + b, 0);

console.log(`Suma zajmowanej przestrzeni wynosi ${sum}B`);
