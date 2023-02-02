import {files} from './data.js';

const convertSize = (length, unit) => {
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

