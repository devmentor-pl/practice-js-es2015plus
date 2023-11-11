import files from './data.js';

// zamiana do wspólnej jednostki
const convertIntoOneUnits = (size, unit = 'B') => size * ({'B': 1, 'KB': 1024, 'MB': 1024 ** 2, 'GB':  1024 ** 3}[unit])


let totalSize = 0
files.forEach((file) =>{
    const changeSize = convertIntoOneUnits(file.size.length, file.size.unit || 'B')
    totalSize += changeSize
    console.log(`${file.name}: ${changeSize} bytes`);
})

console.log(`Total size of all files: ${totalSize} bytes`);
