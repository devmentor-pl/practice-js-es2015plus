const convertUnit = (unit, length) => {

    if (unit === 'MB'){

    } else if (unit === 'KB'){
        length = length/1024;
    } else if (unit === 'GB'){
        length = length*1024
    } else if (unit === 'B'){
        length = length/1048576;
    } else {
        alert(`Niepoprawna jednostka: ${unit}! Podaj wagę pliku w B, KB, MB lub GB!`);
    }
    return length;
}

export default convertUnit;