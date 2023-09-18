import { files } from './data.js';

const convertUnits = (unit, value) => {
	if (unit === 'KB') {
		return value * 1024;
	} else if (unit === 'MB') {
		return value * Math.pow(1024, 2);
	} else if (unit === 'GB') {
		return value * Math.pow(1024, 3);
	} else {
		return value;
	}
};

let sum = 0;
for (const file of files) {
	const {
		size: { unit = 'B' },
		size: { length },
	} = file;

	sum += convertUnits(unit, length);
}

console.log(`Przestrzeń zajmowana przez pliki: ${sum} [B]`);
