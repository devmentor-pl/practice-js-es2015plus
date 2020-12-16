import {files} from './data.js';
console.log(files)
let sum = 0;

const sizeSum = () => {
        files.forEach(f => {
            const {name, size} = f;
            
            unitCheck(size)
            
            sum = sum + size.length;
            

        })

};
const unitCheck = (size) => {
    if (size.unit === 'KB') {
        size.length = size.length * 1024;
    }
    if (size.unit === 'MB') {
        size.length = size.length * 1048576;
    }
    if (size.unit === 'GB') {
        size.length = size.length * 1073741824;
    }
}
sizeSum()
const filesSize = sum + " B";
console.log(filesSize)
