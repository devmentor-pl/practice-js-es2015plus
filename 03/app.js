import {files} from './data.js';

console.log(files);
let sum = 0;

files.forEach( element => {
  const {name, size} = element;
  console.log(name, size);
  const {length, unit = 'B'} = size;
  if(unit === 'B') {
    sum+=length;
  } else if(unit === 'KB') {
    sum+=(length*1024);
  } else if(unit === 'MB') {
    sum+=(length*1024*1024);
  } else if(unit === 'GB') {
    sum+=(length*1024*1024*1024);
  }
  console.log(length, unit);
})
console.log(sum/(1024*1024), 'MB');