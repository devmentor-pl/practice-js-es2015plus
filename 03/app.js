import { files } from './data.js';

const convertToBytes = ({ length, unit }) => {
  const sizeInBytes = parseFloat(length);

  if (isNaN(sizeInBytes)) {
    return 0; 
  }

  // Konwersja jednostek na bajty
  switch ((unit || 'B').toUpperCase()) {
    case 'KB':
      return Math.round(sizeInBytes * 1024);
    case 'MB':
      return Math.round(sizeInBytes * 1024 * 1024);
    case 'GB':
      return Math.round(sizeInBytes * 1024 * 1024 * 1024);
    default:
      if (unit) {
        return " Unknown unit: " + unit;
      }
      return Math.round(sizeInBytes);
  }
};

const calculateTotalSizeInBytes = (filesInBytes) => {
    return filesInBytes.reduce((totalSize, file) => {
      return totalSize + file.size;
    }, 0);
};

const filesInBytes = [...files].map(file => {
  const { length, unit } = file.size;
  const newSizeInBytes = convertToBytes({ length, unit });

  return {
    ...file,
    size: newSizeInBytes,
  };
});


const totalSize = calculateTotalSizeInBytes(filesInBytes);

console.log("Total size in bytes:", totalSize);

