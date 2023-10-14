import { files } from './data.js';

const convertSizeToBytes = (size, unit = 'B') => {
  const units = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
  };
  return size * units[unit];
};

const calcTotalSize = (files) => {
  let totalSize = 0;
  for (const file of files) {
    const { size } = file;
    const { length, unit = 'B' } = size;
    const sizeInBytes = convertSizeToBytes(length, unit);
    totalSize += sizeInBytes;
  }
  return totalSize;
};

console.log(
  `Suma wielkości wszystkich plików wynosi: ${calcTotalSize(files)} B`
);
