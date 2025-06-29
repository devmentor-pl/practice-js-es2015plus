import {files} from './data.js';
const body = document.querySelector("body")
const list = document.createElement("ul")
body.appendChild(list)
let totalLengthInByte = 0 

const calcToByte = (length, unit) => {
  switch (unit) {
    case "B":
      return length;
    case "KB":
      return length * 1024;
    case "MB":
      return length * 1024**2;
    case "GB":
      return length * 1024**3
    default:
      console.warn(`Unknown unit: ${unit}`);
      return 0;
  }
}

const byteToUnit = (length, unit) => {
  switch (unit) {
    case "B":
      return length;
    case "KB":
      return length / 1024;
    case "MB":
      return length / 1024**2;
    case "GB":
      return length / 1024**3
    default:
      console.warn(`Unknown unit: ${unit}`);
      return 0;
  }
}


files.forEach(element => {
const {name, size: {length}, size:{unit="B"}} = element;
const lengthInByte = Math.trunc(calcToByte(length,unit))
totalLengthInByte += lengthInByte

const liItem = document.createElement("li");
liItem.innerHTML = `File: ${name} - ${length}${unit} -> ${lengthInByte}B`
list.appendChild(liItem)
})

const total = document.createElement("h2");
total.innerText = `Total filesize: 
${byteToUnit(totalLengthInByte, "B")} B
${byteToUnit(totalLengthInByte, "KB").toFixed(3)} KB
${byteToUnit(totalLengthInByte, "MB").toFixed(3)} MB
${byteToUnit(totalLengthInByte, "GB").toFixed(3)} GB
`
body.appendChild(total);

