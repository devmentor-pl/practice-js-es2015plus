import { files } from "./data.js";

const bytesToSize = (bytes, fractionDigits = 2) => {
  const units = ["B", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return "0 B";
  }

  const i = Math.min(
    parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10),
    units.length - 1
  );

  return `${(bytes / 1024 ** i).toFixed(i ? fractionDigits : 0)} ${units[i]}`;
};

const convertSizeToBytes = (size, unit) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const base = 1024;
  const index = units.indexOf(unit);

  if (index > -1) {
    return size * base ** units.indexOf(unit);
  }

  return NaN;
};

const calculateTotalFilesSize = () => {
  let totalSize = 0;

  files.forEach((file) => {
    const {
      size: { length, unit = "B" },
    } = file;

    const size = convertSizeToBytes(length, unit);

    if (!Number.isNaN(size)) {
      totalSize += size;
    }
  });

  return bytesToSize(totalSize);
};

const totalSize = calculateTotalFilesSize();
console.log(totalSize);
