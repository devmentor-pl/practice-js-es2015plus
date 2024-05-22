import { files } from "./data.js";

const getMultiplier = (unit) => {
  if (unit === "B") {
    return 1;
  } else if (unit === "KB") {
    return 1024;
  } else if (unit === "MB") {
    return 1024 * 1024;
  } else if (unit === "GB") {
    return 1024 * 1024 * 1024;
  }
  //   else {
  //     alert(`Wprowadź jednostki B, KB, MB, GB`);
  //   }
};

const convertFileSizeToBytes = (length, unit = "B") => {
  const getSizeInBytes = getMultiplier(unit);
  return length * getSizeInBytes;
};

const getTotalSize = () => {
  let sum = 0;
  files.forEach(({ size: { length, unit } }) => {
    sum += convertFileSizeToBytes(length, unit);
  });

  return sum;
};

const displayTotalSize = () => {
  const totalSize = getTotalSize();
  console.log(`Suma wszystkich plików to ${totalSize} bajtów`);
};

displayTotalSize();
