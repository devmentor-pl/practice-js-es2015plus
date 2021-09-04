import { files } from "./data.js";
const convertFromB = (length) => length / (1024 * 1024);
const convertFromKB = (length) => length / 1024;
const convertFromMB = (length) => length;
const convertFromGB = (length) => length * 1024;

const sizesInMB = files.map((item) => {
  const { size } = item;
  const { length, unit } = size;
  const sizeInMb = convert(length, unit);
  return sizeInMb;
});

const totalSize = sizesInMB.reduce((acc, size) => {
  return acc + size;
}, 0);

console.log(totalSize);

function convert(length, unit = "B") {
  let sizeInMb;
  if (unit === "B") {
    sizeInMb = convertFromB(length);
  } else if (unit === "KB") {
    sizeInMb = convertFromKB(length);
  } else if (unit === "MB") {
    sizeInMb = convertFromMB(length);
  } else if (unit === "GB") {
    sizeInMb = convertFromGB(length);
  }

  return sizeInMb;
}
