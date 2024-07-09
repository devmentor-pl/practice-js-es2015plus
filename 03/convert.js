const convert = function(length, unit = "B") {
    switch(unit) {
        case 'KB':
         size = length * 1024
          break;
        case 'MB':
             size = length * 1024 * 1024
          break;
          case 'GB':
             size = length * 1024 * 1024 * 1024
            break;
        default:
            size = length 
      }
      return size
}

module.exports = convert