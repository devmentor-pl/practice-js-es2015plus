import {
  files
} from './data.js';

// create the sum variable
let sumMB = 0;

//get to each file length
files.forEach(el => {

  // assign values to variables
  const {name, size: {length, unit = 'B'}} = el;

  // if (unit === 'B' ) {
  //   sumMB += (length / 1024 / 1024);
  // }
  // if (unit === 'KB') {
  //   sumMB += (length / 1024);
  // }
  // if (unit === 'MB') {
  //   sumMB += (length);
  // }
  // if (unit === 'GB') {
  //   sumMB += (length * 1024);
  // }

  // or switch
  switch(unit) {
    case 'B': sumMB += (length / 1024 / 1024);
      break;
    case 'KB': sumMB += (length / 1024);
      break;
    case 'MB': sumMB += (length);
      break;
    case 'GB': sumMB += (length * 1024);
      break;
  }

});

const par = document.createElement('p');
par.innerText = ('Total size of files in MB: ' + sumMB.toFixed(2));
document.body.appendChild(par);
