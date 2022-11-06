import {files} from './data.js';

function convertLarge(lenght ,unit = 'B'){
    if(unit === 'B') {
        return lenght;
    } else if (unit ==='KB') {
        return lenght * 1024;
    }else if(unit === 'MB') {
        return lenght *1024 * 1024
    }else if(unit ==='GB') {
        return lenght *1024 * 1024 * 1024;
    }

    if(typeof data[unit] === 'undefined'){
        console.log('This unit not exist');
    }

    }
    
    let large = 0;
    files.forEach (i => {
        large += convertLarge(i.size.length,i.size.unit);
    });

    console.log(large);

