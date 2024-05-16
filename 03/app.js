import { files as data } from "./data.js";

// 1KB = 1024B, 1MB = 1024KB
const convertToMB = (unit = "B", size) => {
  let sizeInMB = 0;
  switch (unit) {
    case "KB":
      sizeInMB = size / 1024;
      break;
    case "MB":
      sizeInMB = parseInt(size);
      break;
    case "GB":
      sizeInMB = size * 1024;
      break;
    default:
      sizeInMB = size / Math.pow(1024, 2);
      break;
  }

  return sizeInMB;
};

const calculateTotalSize = (data) => {
  let sum = 0;

  sum = [...data]
    .reduce((acc, file) => {
      const { length, unit } = file.size;

      return acc + convertToMB(unit, length);
    }, 0)
    .toFixed(2);

  console.log(sum);
  return sum;
};

calculateTotalSize(data);
