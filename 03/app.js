import { files } from './data.js';

let totalSizeMB = 0;

const sizeToMB = (length, unit = 'B') => {
	switch (unit) {
		case 'B':
			totalSizeMB += length / 1024 / 1024;
			break;
		case 'KB':
			totalSizeMB += length / 1024;
			break;
		case 'MB':
			totalSizeMB += length;
			break;
		case 'GB':
			totalSizeMB += length * 1024;
			break;
	}
};

const sizeProperty = (size) => {
	const { length, unit } = size;
	sizeToMB(length, unit);
};

files.forEach((item) => {
	const { size } = item;
	sizeProperty(size);
});

const div = document.createElement('div');
const h1 = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(div);
div.appendChild(h1);

h1.textContent = `${totalSizeMB.toFixed(2)} MB`;
