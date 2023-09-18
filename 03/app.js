import {files} from './data.js';
const arr = [];
const TotalSizeArr = [];


files.forEach((el) => {
  const {size} = el;
  const {length, unit = "B"} = size;
  arr.push({length, unit})
})


console.log(arr)


const getTotalSize = () => {
  const newArray = arr.map((el) => {
    const {length, unit} = el;
    if (unit === "B") {
      TotalSizeArr.push(length);
    }
    if (unit === "KB") {
      const convert = length * 1024;
      TotalSizeArr.push(convert);
    }
    if (unit === "MB") {
      const convert = length * 1024 ** 2;
      TotalSizeArr.push(convert);
    }
    if (unit === "GB") {
      const convert = length * 1024 ** 3;
      TotalSizeArr.push(convert);
    }
  })
  const sumOfSizes = TotalSizeArr.reduce((num, currentValue) => num + currentValue);
  console.log(sumOfSizes)
}
getTotalSize();