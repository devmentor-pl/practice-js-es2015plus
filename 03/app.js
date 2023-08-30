import { files } from "./data.js";

// 1KB = 1024B, 1MB = 1024KB
const convertSizeToMB = (type, size) => {
	let sizeInMB = 0;
	switch (type) {
		case "B":
			sizeInMB = size / Math.pow(1024, 2);
			break;
		case "KB":
			sizeInMB = size / 1024;
			break;
		case "GB":
			sizeInMB = size * 1024;
			break;
		default:
			sizeInMB = parseInt(size);
			break;
	}

	return sizeInMB;
};

const sumFilesSize = (files) => {
	let sum = 0;
	const filesCopy = files.slice();

	sum = filesCopy.reduce((acc, file) => {
		const { length } = file.size;
		const { unit = "B" } = file.size;

		return acc + convertSizeToMB(unit, length);
	}, 0);
	sum = sum.toFixed(2);
	console.log(sum);
	return sum;
};

sumFilesSize(files);
