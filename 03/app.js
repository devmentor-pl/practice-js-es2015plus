import {files} from './data.js';

const computeFilesSizes = (files) => {
  const size = files.reduce((total, file) => {
    const {size: {length = 0, unit = 'B'}} = file;
    return total + getSizeInBytes(length, unit);
  }, 0);

  return Math.round(size);
}

const getSizeInBytes = (size, unit ) => {
  const storageUnits = {
    "B": 1,
    "KB": 1024,
    "MB": 1024 ** 2,
    "GB": 1024 ** 3,
  };

  return size * storageUnits[unit];
}

const size = computeFilesSizes(files);
console.log(size);