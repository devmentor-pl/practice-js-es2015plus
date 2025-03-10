import {files} from './data.js';

const convertSize = (length, unit) => {

// inna opcja
	// const data = {
	// 	'B': 1, 
	// 	'KB': 1024,
	// 	'MB': 1024 * 1024,
	// 	'GB': 1024 * 1024 * 1024,
	// }
	// if(typeof data[unit] === 'undefined') {
	// 	console.log('Nie ma takiej jednostki');
	// }
	// return data[unit] * length

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
const getTotalSize = () => {
	let totalSize = 0;
	[...files].forEach(item => {
		totalSize += convertSize(item.size.length, item.size.unit);
	});
	return totalSize;
}

console.log(getTotalSize())
