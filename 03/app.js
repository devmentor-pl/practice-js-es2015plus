import { files } from "./data.js";

const unifyUnits = (length, unit) => {
  if (!unit) {
    const result = length;
    return result;
  }

  const unitFactor = {KB: 1, MB: 2, GB: 3};

  const result = length * 1024 ** unitFactor[unit];
  return result;
};

const specifyUnit = (unitFactor) => {
  const unit = { 0: "B", 1: "KB", 2: "MB", 3: "GB" };
  return unit[unitFactor];
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