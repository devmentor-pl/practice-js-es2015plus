import {files} from './data.js';

const init = () => {
  files.forEach(el => {
    const {size} = el;
    const {length, unit} = size;
  })
}

document.addEventListener('DOMContentLoaded', init);

 