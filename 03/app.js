import { files } from "./data.js";

const convertUnits = (unit, length) => {
	if (unit === "KB") {
		return length * 1024;
	} else if (unit === "MG") {
		return length * Math.pow(1024, 2);
	} else if (unit === "GB") {
		return length * Math.pow(1024, 3);
	} else {
		return length;
	}
};

const sumSizes = () => {
	let sum = 0;

	for (const file of files) {
		const {
			size: { length, unit = "B" },
		} = file;

		sum += convertUnits(unit, length);
	}
	return sum;
};

sumSizes(files);
