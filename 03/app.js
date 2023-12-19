import files from './data.js';

// zamiana do wspólnej jednostki
// const convertIntoOneUnits = (size, unit = 'B') => size * ({'B': 1, 'KB': 1024, 'MB': 1024 ** 2, 'GB':  1024 ** 3}[unit])
const convertIntoOneUnits = (size, unit ="B") => {
    if(unit === "B") {
        return size
    } else if (unit === "KB") {
        return size * 1024
    } else if (unit === "MB") {
        return size * 1024 * 1024
    } else if (unit === "GB") {
        return size * 1024 * 1024 * 1024
    }
}

let totalSize = 0
files.forEach((file) => {
    const changeSize = convertIntoOneUnits(file.size.length, file.size.unit)
    totalSize += changeSize
    console.log(`${file.name}: ${changeSize} bytes`);
})

console.log(`Total size of all files: ${totalSize} bytes`);

console.log(totalSize);