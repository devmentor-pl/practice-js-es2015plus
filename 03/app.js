import {
  files
} from './data.js';

// create the sum variable
let sumMB = 0;

//get to each file length
files.forEach(el => {

  const [unit] = files;
  console.log(unit);

  if (!el.size.unit) {
    sumMB += (el.size.length / 1024 / 1024);
  }
  if (el.size.unit === 'KB') {
    sumMB += (el.size.length / 1024);
  }
  if (el.size.unit === 'MB') {
    sumMB += (el.size.length);
  }
  if (el.size.unit === 'GB') {
    sumMB += (el.size.length * 1024);
  }
});
console.log(sumMB.toFixed(2));
