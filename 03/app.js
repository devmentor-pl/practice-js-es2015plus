import {files} from './data.js';

const addBytes = () => {
    let sumOfBytes = 0
    let bytes = 0
    files.forEach(e => {
        const {
            name,
            size
        } = e
        const {
            length,
            unit = 'B'
        } = size
        if (unit == 'B') bytes = length
        if (unit == 'KB') bytes = length * 1024
        if (unit == 'MB') bytes = length * 1024 * 1024
        if (unit == 'GB') bytes = length * 1024 * 1024 * 1024
        sumOfBytes += bytes
    })
    let result = Math.ceil(sumOfBytes / 1024 / 1024 *100)/100 + ' MB'
    return result
}
const showResult = addBytes()
console.log(showResult)
