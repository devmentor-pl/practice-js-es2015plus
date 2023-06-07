import { files } from "./data.js";

const convertSizeToBytes = (size, unit = "B") => {
  switch (unit) {
    case "GB":
      return size * Math.pow(1024, 3);
    case "MB":
      return size * Math.pow(1024, 2);
    case "KB":
      return size * 1024;
    case "B":
    default:
      return size;
  }
};

const calculateTotalSize = (files) => {
  let totalSize = 0;

  files.forEach(({ size: { length, unit = "B" } }) => {
    const fileSizeInBytes = convertSizeToBytes(length, unit);
    totalSize += fileSizeInBytes;
  });

  return totalSize;
};

const totalSize = calculateTotalSize(files);
console.log(`Całkowity rozmiar wszystkich plików wynosi: ${totalSize} B`);
