import {files} from './data.js';

//1KB = 1024B, 1 MB = 1 048 576 B, 1 GB = 1 073 741 824 B

const convertToB = (length, unit) => {
    if(unit === 'KB') {
      return parseFloat(length * 1024)
    }
    if(unit === 'MB') {
      return parseFloat(length * 1048576)
    }
    if(unit === 'GB') {
      return parseFloat(length * 1073741824)
    } else {
      return length
    }
}

const calculateFilesSize = () => {
   let totalFileSize = 0
   files.forEach(
    ({size: {length},
    size: {unit} }) => {
         totalFileSize += convertToB(length,unit) 
   })
    return totalFileSize
}

const showInformation = () => {
    const body = document.querySelector('body')
    const paragraph = document.createElement('p')
    paragraph.innerText = `Łączny ciężar pliku wynosi ${calculateFilesSize()} B`
    body.appendChild(paragraph)

    console.log(`Łączny ciężar pliku wynosi ${calculateFilesSize()} B`)
}

showInformation()


