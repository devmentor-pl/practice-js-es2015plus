import {files} from './data.js';
const convert = require('./convert.js');

let sum = 0;


files.forEach((el)=> {
    
const elementSize = el.size

const convertedToB = convert(elementSize.length, elementSize.unit)

sum += convertedToB

console.log(sum)

})
 
