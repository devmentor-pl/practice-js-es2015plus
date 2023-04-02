import { files } from "./data.js";
console.log("zadanie 3");

console.log("------------------------------");

const arr = [];

const calcUnit = () => {
  files.forEach((item) => {
    const { size } = item;
    const { length, unit } = size;
    console.log(size);
    console.log(length, unit);
    if (unit === "KB") {
      const lenghtinB = length * 1024;
      arr.push(lenghtinB);
    } else if (unit === "MB") {
      const lengthinB = length * 1024 * 1024;
      arr.push(lengthinB);
    } else if (unit === "GB") {
      const lenghtinB = length * 1024 * 1024 * 1024;
      arr.push(lenghtinB);
    } else {
      arr.push(length);
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
