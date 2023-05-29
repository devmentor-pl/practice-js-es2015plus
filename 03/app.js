import { files } from './data.js';

console.log(files);

function convertToBytes(length, unit = 'B') {
  if (unit === 'B') {
    return length;
  } else if (unit === 'KB') {
    return length * 1024;
  } else if (unit === 'MB') {
    return length * 1024 * 1024;
  } else if (unit === 'GB') {
    return length * 1024 * 1024 * 1024;
  }
}

let size = 0;
files.forEach((item) => {
  // console.log(item.size.length);
  size = size + convertToBytes(item.size.length, item.size.unit);
});

console.log(size);
