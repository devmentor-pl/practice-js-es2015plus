import {files} from './data.js';
const body = document.querySelector("body")
const list = document.createElement("ul")
body.appendChild(list)
let totalLengthInByte = 0 

const byteConvertion = {
  B: 1,
  KB: 1024,
  MB: 1024**2,
  GB: 1024**3,
}

const calcByte =(length, unit, toByte=false) => {
      return toByte ? length * byteConvertion[unit] :length / byteConvertion[unit];
  }


files.forEach(element => {
const {name, size: {length}, size:{unit="B"}} = element;
const lengthInByte = Math.trunc(calcByte(length,unit, true))
totalLengthInByte += lengthInByte

const liItem = document.createElement("li");
liItem.innerHTML = `File: ${name} - ${length}${unit} -> ${lengthInByte}B`
list.appendChild(liItem)
})

const total = document.createElement("h2");
total.innerText = `Total filesize: 
${calcByte(totalLengthInByte, "B")} B
${calcByte(totalLengthInByte, "KB").toFixed(3)} KB
${calcByte(totalLengthInByte, "MB").toFixed(3)} MB
${calcByte(totalLengthInByte, "GB").toFixed(3)} GB
`
body.appendChild(total);

