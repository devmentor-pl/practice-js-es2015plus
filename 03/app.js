import { files } from "./data.js";

console.log(files);

const convertToBytes = (length, unit) => {
  if (unit === "B") {
    return length;
  } else if (unit === "KB") {
    return length * 1024;
  } else if (unit === "MB") {
    return length * 1024 * 1024;
  } else if (unit === "GB") {
    return length * 1024 * 1024 * 1024;
  } else {
    console.log("Błędna jednostka");
  }
};

const print = (totalSize) =>
  console.log(`Całkowity rozmiar pliku to ${totalSize} B`);

const calculateSize = (allFiles) => {
  let totalSize = 0;
  allFiles.forEach(({ size }) => {
    const { length, unit = "B" } = size;
    totalSize = totalSize + convertToBytes(length, unit);
  });
  print(totalSize);
};

calculateSize(files);
