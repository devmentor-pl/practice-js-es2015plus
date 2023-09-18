import {
    files
} from './data';

const unification = () => {
    const uniFiles = [];
    files.forEach((item) => {
        const {
            size: length,
        } = item;
        if (length.unit == 'KB') {
            uniFiles.push(length.length / 1024)
        }
        if (length.unit == 'MB') {
            uniFiles.push(length.length)
        }
        if (length.unit == 'GB') {
            uniFiles.push(length.length * 1024)
        } else {
            uniFiles.push(length.length / (1024 * 1024))
        }
    })
    return uniFiles;
}


const summary = () => {
    const arr = unification()
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    })
    console.log(`Wielkość wszytskich plików wynosi: ${sum}MB`)

}

summary();