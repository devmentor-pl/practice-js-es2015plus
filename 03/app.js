import { size } from 'lodash';
import { files } from './data.js';

const changeUnits = () => {
    files.forEach(item => {
        const { size } = item

        if (size.unit) {
            if (size.unit === 'KB') {
                size.length = size.length * 1024
            }
            if (size.unit === 'MB') {
                size.length = size.length * 1024 * 1024
            }
            if (size.unit === 'GB') {
                size.length = size.length * 1024 * 1024 * 1024
            }
        }
    })
}
const calcSum = (...nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
}
const createText = (e) => {
    const body = document.querySelector('body')
    const element = document.createElement('h2')
    const text = `Total size of data elements:
    ${calcSum(...e)}B`
    console.log(text)
    element.innerText = text
    body.appendChild(element)
}
function calcTotalSize() {
    const arrayOfLengths = []
    files.forEach(item => {
        const { size: { length } } = item
        return arrayOfLengths.push(Number(length))
    })
    calcSum(...arrayOfLengths)
    createText(arrayOfLengths)
}

function startFunction() {
    changeUnits()
    calcTotalSize()
}

startFunction()