import { files } from "./data.js";

function convertToBytes(length, unit = "B") {
	if (unit == "B") {
		return length;
	} else if (unit === "KB") {
		return length * 1024;
	} else if (unit === "MB") {
		return length * 1024 * 1024;
	} else if (unit === "GB") {
		return length * 1024 * 1024 * 1024;
	}
}
let size = 0;
files.forEach(({ size: { length, unit } }) => {
	size += convertToBytes(length, unit);
});
console.log(size);
