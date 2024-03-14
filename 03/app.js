import { files } from "./data.js";

const unifyUnits = (length, unit) => {
  if (!unit) {
    const result = length;
    return result;
  }

  let unitFactor;

  switch (unit) {
    case "KB":
      unitFactor = 1;
      break;
    case "MB":
      unitFactor = 2;
      break;
    case "GB":
      unitFactor = 3;
      break;
  }

  const result = length * 1024 ** unitFactor;
  return result;
};

const specifyUnit = (unitFactor) => {
  let unit;
  switch (unitFactor) {
    case 0:
      unit = "B";
      break;
    case 1:
      unit = "KB";
      break;
    case 2:
      unit = "MB";
      break;
    case 3:
      unit = "GB";
      break;
  }
  return unit;
}

const roundTotalSizeUnit = (totalSize) => {
  let totalSizeLength = parseInt(totalSize).toString().length;
  let unitFactor = 0;

  while (totalSizeLength > 3) {
    totalSize /= 1024;
    totalSizeLength = parseInt(totalSize).toString().length;
    unitFactor++;
  }
  const totalSizeRounded = totalSize.toFixed(2);
  const unit = specifyUnit(unitFactor);

  return {
    totalSizeRounded: totalSizeRounded,
    unit: unit,
  }
};

const putLengthsToArray = (array) => {
  files.forEach((element) => {
    const { length } = element.size;
    const { unit } = element.size;
    const unifiedLength = unifyUnits(length, unit);
    array.push(unifiedLength);
  });
}

const calcTotalSize = () => {
  const lengthsToSum = [];

  putLengthsToArray(lengthsToSum);

  const totalSize = lengthsToSum.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);

  const {totalSizeRounded} = roundTotalSizeUnit(totalSize);
  const {unit} = roundTotalSizeUnit(totalSize);

  return alert(`Total size of files is ${totalSizeRounded} ${unit}`);
}

calcTotalSize();