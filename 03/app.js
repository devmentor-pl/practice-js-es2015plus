import {files} from './data.js';

const showLengthInBites = ({length, unit="B"}) => {
    switch (unit) {
        case "GB":
            return length * Math.pow(1024,3);
        case "MB":
            return length * Math.pow(1024,2);
        case "KB":
            return length * 1024;
        default:
            return length;
    }
}

const showTotalLength = () => {
    let totalLength = 0;
    files.forEach(file => {
        totalLength += showLengthInBites(file.size);
    });
    console.log(`Pliki zajmują przestrzeń: ${totalLength}B`);
}

showTotalLength();


