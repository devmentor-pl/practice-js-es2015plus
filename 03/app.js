import { files } from './data.js';


const init = () => {
    let value = 0;
    files.forEach((file) => {
        const {
            size: { length },
            size: { unit = 'B' }
        } = file;


        switch (unit) {
            case 'B':
                value += changeValue(1, length);
                break;
            case 'KB':
                value += changeValue(2, length);
                break;
            case 'MB':
                value += changeValue(3, length);
                break;
            case 'GB':
                value += changeValue(4, length);
                break;
        }
    });
    console.log(value);
}

const changeValue = (multiplier, length) => {
    for (let i = 0; i < multiplier - 1; i++)  length = length * 1024;
    return length;
};

init();

