import { files } from "./data.js";

const getUnits = () => {
  return ["B", "KB", "MB", "GB", "TB"];
};

const bytesToSize = (bytes, fractionDigits = 2) => {
  let i = 0;
  const units = getUnits();
  const base = 1024;

  do {
    bytes /= base;
    i++;
  } while (bytes > base);

  return bytes.toFixed(fractionDigits) + units[i];
};

const convertSizeToBytes = (size, unit) => {
  const units = getUnits();
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
