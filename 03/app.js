import { files } from "./data.js";

const sumOfBytes = (size, unit = "B") => {
  if (unit === "B") {
    return size;
  } else if (unit === "KB") {
    return size * 1024;
  } else if (unit === "MB") {
    return size * 1024 * 1024;
  } else {
    return size * 1024 * 1024 * 1024;
  }
};

let sum = 0;

files.forEach((item) => {
  const {
    size: { length, unit },
  } = item;
  sum += sumOfBytes(length, unit);
});

console.log(sum);
