const convertUnit = (unit, length) => {

    if (unit === 'KB'){
        length = length/1024;
    } else if (unit === 'GB'){
        length = length*1024
    } else if (unit === 'B'){
        length = length/1048576;
    }
    return length;
}

export default convertUnit;