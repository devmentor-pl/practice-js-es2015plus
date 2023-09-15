import {files} from './data.js';


// const init = () => {
//   console.log(bytes());
//   console.log(KbToBytes());
//   console.log(mbToBytes());
//   console.log(gbToBytes());
//   console.log(getTotalSize());
  
// }

// document.addEventListener('DOMContentLoaded', init)


// const bytes = () => {
//   const {length, unit = "B"} = arr;
//   TotalSizeArr.push(length)
//   return length;
// }
// const KbToBytes = () => {
//     const {length} = arr[1];
//     const convert =  length * 1024;
//     TotalSizeArr.push(convert);
//     return convert;
// }
// const mbToBytes = () => {
//   const {length} = arr[2];
//   const convert =  length * 1024 ** 2;
//   TotalSizeArr.push(convert);
//   return convert;
// }
// const gbToBytes = () => {
//   const {length} = arr[3];
//   const convert =  length * 1024 ** 3;
//   TotalSizeArr.push(convert);
//   return convert;
// }
// const getTotalSize = () => {
//   let sum = 0;

//   TotalSizeArr.forEach((num) => {
//     sum += num;
//   })
//   return sum;
// }

const arr = [];

files.forEach((el) => {
  const {size} = el;
  arr.push(size);
})

const bytes = () => {
  const {length, unit = "B"} = arr;
  TotalSizeArr.push(length)
  return length;
}

