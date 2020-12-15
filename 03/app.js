import {files} from './data.js';
console.log(files)
const [
    {
        name: value,
        size: {
            length
        }
    }
] = files;
console.log(size)
