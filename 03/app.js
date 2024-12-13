import { files } from './data.js';

import { files } from './data.js';

function convertToBytes(length, unit = 'B') {
  switch (unit) {
    case 'KB':
      return length * 1024;
    case 'MB':
      return length * 1024 * 1024;
    case 'GB':
      return length * 1024 * 1024 * 1024;
    default:
      return length;
  }
}

let size = 0;
files.forEach(({ size: { length, unit } }) => {
  size += convertToBytes(length, unit);
});
console.log(size);

const body = document.querySelector('body');
const text = document.createElement('p');
text.textContent = `Total size: ${size}`;
body.appendChild(text);