import {files} from './data.js';
console.log(files)
let sum = 0;

const sizeSum = () => {
        files.forEach(f => {
            const {name, size} = f;
            
            //unitCheck(size)
            
            sum = sum + unitCheck(size);
            

        })

};
const unitCheck = (size) => {
    let num = 0;
    if (size.unit === 'KB') {
         num = size.length * 1024;
        //size.length = size.length * 1024;
    }
    if (size.unit === 'MB') {
         num = size.length * 1048576;

        //size.length = size.length * 1048576;
    }
    if (size.unit === 'GB') {
         num = size.length * 1073741824;

        //size.length = size.length * 1073741824;
    }
    return num;
}
sizeSum()
const filesSize = sum + " B";
console.log(filesSize)
