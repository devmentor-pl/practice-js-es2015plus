import {files} from './data.js';

const getSize = (obj) => {
  const { size: { length }, size: { unit = 'B' } } = obj;
  return [length, unit]
}

const convertToBytes = ([size, unit]) => {
  switch (unit) {
    case 'B': return size;
    case 'KB': return size * 1024;
    case 'MB': return size * 1048576;
    case 'GB': return size * 1073741824
  }
}

const sumSize = arr => {
  let convertedSizes = [];
  for (const item of arr) {
    const itemSize = convertToBytes(getSize(item));
    convertedSizes.push(itemSize)
  }
  const totalSize = convertedSizes.reduce(function (a, b) { return a + b }, 0)
  console.log(totalSize + ' B');
  return totalSize
}

sumSize(files)