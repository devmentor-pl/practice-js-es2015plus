import { files } from "./data.js";

const standardizeUnits = (unit, length) => {
  if (typeof unit === "undefined") {
    return length;
  }
  if (unit === "KB") {
    return length * 1024;
  }
  if (unit === "MB") {
    return length * 1024 * 1024;
  }
  if (unit === "GB") {
    return length * 1073741824;
  }
};

const sumLength = () => {
  let sum = 0;
  files.forEach((file) => {
    const {
      size: { unit: unit, length: length },
    } = file;
    sum += standardizeUnits(unit, length);
  });
  return sum;
};

console.log(sumLength(files));
