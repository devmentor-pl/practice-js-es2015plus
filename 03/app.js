import { files } from './data.js';

const countfile = (...files) => {
	const dataArr = [];
	files.forEach(({ name, size: { length, unit = 'B' } } = files) => {
		const units = settingDenominator(length, unit);
		dataArr.push(units);
	});
	const score = dataArr.reduce((curr, acc) => curr + acc, 0).toFixed(0) + ' MB';
	console.log(score);
};
const settingDenominator = (length, unit) => {
	if (unit === 'GB') {
		return length * Math.pow(1024, 2);
	}
	if (unit === 'KB') {
		return length / 1024;
	}
	if (unit === 'MB') {
		return length;
	}
	if (unit === 'B') {
		return length / Math.pow(1024, 2);
	}
};

countfile(...files);
