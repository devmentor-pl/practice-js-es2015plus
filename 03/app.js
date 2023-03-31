import { files } from "./data.js";
console.log("zadanie 3");

const [file1, file2, file3, file4] = files;

const fileUnit = (fi, b = 1024) => {
  if (fi.size.unit === "KB") {
    const sizeinB = fi.size.length * b;
    return sizeinB;
  } else if (fi.size.unit === "MB") {
    const sizeinKB = fi.size.length * b;
    const sizeinB = sizeinKB * b;
    return sizeinB;
  } else if (fi.size.unit === "GB") {
    const sizeinMB = fi.size.length * b;
    const sizeinKB = sizeinMB * b;
    const sizeinB = sizeinKB * b;
    return sizeinB;
  } else {
    return fi.size.length;
  }
};

const calcWeight = () => {
  const size0 = fileUnit(file1);
  const size1 = fileUnit(file2);
  const size2 = fileUnit(file3);
  const size3 = fileUnit(file4);

  const sum = size0 + size1 + size2 + size3;
  return sum + " B";
};

const result = calcWeight();
console.log(result);

console.log("------------------------------");

const arr = [];

const calcUnit = () => {
  files.forEach((item) => {
    if (item.size.unit === "KB") {
      item.size.length = item.size.length * 1024;
      arr.push(item.size.length);
    } else if (item.size.unit === "MB") {
      item.size.length = item.size.length * 1024 * 1024;
      arr.push(item.size.length);
      return item.size.length;
    } else if (item.size.unit === "GB") {
      item.size.length = item.size.length * 1024 * 1024;
      item.size.length = item.size.length * 1024;
      arr.push(item.size.length);
    } else {
      arr.push(item.size.length);
    }
  });
};

const calculateWeight = () => {
  calcUnit();
  const sum = arr.reduce((total, amount) => total + amount);
  return `${sum} B`;
};

const showResult = calculateWeight();
console.log(showResult);
