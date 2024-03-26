//KONSULTACJE - OD LINII 31

// export const files = [
//     {
//         'name': 'img1.jpg',
//         'size': {
//             length: 215, // B
//         }
//     },
//     {
//         'name': 'img2.jpg',
//         'size': {
//             length: 145,
//             unit: 'KB', // x 1024 B
//         }
//     },
//     {
//         'name': 'img3.jpg',
//         'size': {
//             length: 14,
//             unit: 'MB', // x 1048576 B
//         }
//     },
//     {
    //         'name': 'img4.jpg',
    //         'size': {
        //             length: 0.9,
        //             unit: 'GB', // x 1073741824 B
        //         }
        //     }
        // ];

        //TYMCZASOWO W TYM MIEJSCU, BO WEBPACK NIE DZIAŁA
        const files = [
    {
        'name': 'img1.jpg',
        'size': {
            length: 215, // B
        }
    },
    {
        'name': 'img2.jpg',
        'size': {
            length: 145,
            unit: 'KB', // x 1024 B
        }
    },
    {
        'name': 'img3.jpg',
        'size': {
            length: 14,
            unit: 'MB', // x 1048576 B
        }
    },
    {
        'name': 'img4.jpg',
        'size': {
            length: 0.9,
            unit: 'GB', // x 1073741824 B
        }
    }
];

//Przy pobieraniu danych wykorzystaj destrukturyzację oraz wartości domyślne.
//Zaimplementowane rozwiązanie podziel na mniejsze części, które będą wykonywane przez niezależne funkcje.

// wielkość pojedynczej przestrzeni
const getSize = (length, unit) => {
    let size;
    switch(unit) {
        case unit === undefined:
        size = length;
        break;
        case unit === 'KB':
        size = length * 1024;
        break;
        case unit === 'MB':
        size = length * 1048576;
        break;
        case unit === 'GB':
        size = length * 1073741824;
        break;
    }
    return size;
}

// suma całości = przestrzeń 1 + przestrzeń 2 + ...
let sum = 0;
const getSum = files.forEach(function(file){
    const fileSize = file.size.length;
    const fileUnit = file.size.unit;
    console.log(fileSize, fileUnit); // ok - wyświetlam zawartości file tj kazdy lenght i unit
    sum += getSize(fileSize, fileUnit); // ŹLE
    return sum;
})
console.log(sum); //NaN













