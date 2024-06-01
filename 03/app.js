import {files} from './data.js';

const fileDataUpload = elem => {
    const { size: { length = 0, unit = 'B' }} = elem;
    return [length, unit];
}

files.forEach(elem => {
    console.log(fileDataUpload(elem))
})