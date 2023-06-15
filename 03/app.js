import { files } from './data.js';

const countPartSum = (length, unit) => {
    if (unit === "KB") {
        return length * Math.pow(1024, 1)
    } else if (unit === "MB") {
        return length * Math.pow(1024, 2)
    } else if (unit === "GB") {
        return length * Math.pow(1024, 3)
    } else return length
}

const countSum = () => {
    let sum = 0

    files.forEach((file) => {
        const { size: { length, unit = 'B' } } = file

        const partSum = countPartSum(length, unit)
        sum += partSum
    })
    return sum
}

console.log(countSum())