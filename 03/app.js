import {files} from './data.js';

const convertToBytes = (size, unit = 'B') => {
  switch (unit) {
    case 'B':
      return size;
    case 'KB':
      return size * 1024;
    case 'MB':
      return size * 1024 * 1024;
    case 'GB':
      return size * 1024 * 1024 * 1024;
    default:
      return size;
  }
};

const calculateTotalSizeInBytes = (files) => {
  return files.reduce((totalSize, file) => {
    const { length, unit = 'B' } = file.size;
    const sizeInBytes = convertToBytes(length, unit);
    return totalSize + sizeInBytes;
  }, 0);
}

const calculateTotalFileSize = (files) => {
  const totalSizeInBytes = calculateTotalSizeInBytes(files);
  return totalSizeInBytes;
}

const totalFileSize = calculateTotalFileSize(files);
console.log(`Suma przestrzeni zajmowanej przez wszystkie pliki: ${totalFileSize} B`);