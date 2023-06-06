import { files } from "./data.js";

const bytes = {
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
};

const convertToBytes = (unit, length) => {
  if (unit === "KB") {
    return (length = length * bytes.KB);
  }
  if (unit === "MB") {
    return (length = length * bytes.MB);
  }
  if (unit === "GB") {
    return (length = length * bytes.GB);
  } else return length;
};

const getTotal = (sum) => {
  let total = sum.reduce((a, b) => a + b, 0);
  console.log(`łączna suma bajtów to ${total}`);
};

const calculateTotalSize = () => {
  let sum = [];
  files.forEach((file) => {
    let { length, unit } = file.size;
    length = convertToBytes(unit, length);
    sum.push(length);
  });
  getTotal(sum);
};

calculateTotalSize();