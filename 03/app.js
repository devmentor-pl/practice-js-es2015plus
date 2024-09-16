import { files } from './data.js';

const convertUnitToBytes = (length, unit) => {

    switch (unit) {
        case 'KB':
            length = length * 1024;
            break;
        case 'MB':
            length = length * 1024 * 1024;
            break;
        case 'GB':
            length = length * 1024 * 1024 * 1024;
            break;
        default:
            console.log('Nie trzeba zmieniać jednostki')
    }
    return length
}


const showMemoryUsage = ([...files]) => {
    console.log(files)
    let memoryUsage = 0

    files.forEach(({ size: { length, unit = 'B' } }) => {

        const lenghtInBytes = convertUnitToBytes(length, unit)
        console.log(`${length} ${unit} = ${lenghtInBytes} B `)
        memoryUsage += lenghtInBytes
    })
    console.log(`Zużywasz obecnie ${memoryUsage} B pamięci `)
}

showMemoryUsage(files)
