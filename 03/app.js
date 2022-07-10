import { files } from './data.js';

const fileConvertSize = (length, unit) => {
	let fileSize = 0;

	if (unit === 'KB') {
		fileSize = 1024 * length;
	} else if (unit === 'MB') {
		fileSize = 1024 * 1024 * length;
	} else if (unit === 'GB') {
		fileSize = 1024 * 1024 * 1024 * length;
	} else {
		fileSize = length;
	}

	return fileSize;
};

const convertBytes = bytes => {
	return bytes / 1024;
};

const sumSize = () => {
	let sum = 0;
	files.forEach(item => {
		const {
			size: { length, unit },
		} = item;

		const fileSize = fileConvertSize(length, unit);
		sum += fileSize;
	});
	const kBsize = convertBytes(sum);
	return kBsize;
};

const totalSize = sumSize();

console.log(`Rozmiar wszystkich plików to: ${totalSize}`);
