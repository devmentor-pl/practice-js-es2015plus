import {files} from './data.js';

const calcSize = () => {
    let sum = 0;

    files.forEach((element) => {
        const {
            size: {
                length,
                unit
            }
        } = element;
        
        const imgSize = convertSize(length, unit);

        sum = sum + imgSize;
      
    });

    return parseInt(sum / 1024 / 1024);
}

const convertSize = (length, unit) => {
    let size = 0;

    if(unit === "KB") {
        size = 1024 * length;
    } else if (unit === "MB") {
        size = (1024 * 1024) * length;
    } else if (unit === "GB") {
        size = (1024 * 1024 * 1024) * length;
    } else {
        size = length;
    };

    console.log(size)

    return size;
};

console.log(`Pliki zajmują ${calcSize()} MB`)
