// import files from './data.js';
const files = [{
        'name': 'img1.jpg',
        'size': {
            length: 215,
        }
    },
    {
        'name': 'img2.jpg',
        'size': {
            length: 145,
            unit: 'KB',
        }
    },
    {
        'name': 'img3.jpg',
        'size': {
            length: 14,
            unit: 'MB',
        }
    },
    {
        'name': 'img4.jpg',
        'size': {
            length: 0.9,
            unit: 'GB',
        }
    }
];
// zamiana do wspólnej jednostki
const convertIntoOneUnits = (size, unit = 'B') => size * ({'B': 1, 'KB': 1024, 'MB': 1024 ** 2, 'GB':  1024 ** 3}[unit])


let totalSize = 0
files.forEach((file) =>{
    const changeSize = convertIntoOneUnits(file.size.length, file.size.unit || 'B')
    totalSize += changeSize
    console.log(`${file.name}: ${changeSize} bytes`);
})

console.log(`Total size of all files: ${totalSize} bytes`);
