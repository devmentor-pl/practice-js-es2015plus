import {files} from './data.js';

const returnValueInBytes = function (unit, fileSize) {
  switch (unit) {
    case 'KB': {
      return fileSize * 1024
    }
    case 'MB': {
      return fileSize * (1024**2)
    }
    case 'GB': {
      return fileSize * (1024**3)
    }
    case 'B':
    default: {
      return fileSize
    }
  }
}

// const totalSize = function(object) {
//   let total = 0
//   object.forEach( item => {
//     const unit = item.size.unit
//     const size = item.size.length
//     const fileSize = returnValueInBytes(unit, size)
//     total += fileSize
//   })
//   console.log(`Total size of files: ${total} bytes`)
// }

const totalSize = (object) => {
  let total = 0
  object.forEach(( {size: {unit, length}}     ) => {
    const fileSize = returnValueInBytes(unit, length)
    total += fileSize
  })
  console.log(`Total size of files: ${total} bytes`)
}

totalSize(files)










