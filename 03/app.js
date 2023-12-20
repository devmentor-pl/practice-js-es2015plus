import {files} from './data.js';

const convertUnits = ({length, unit}) => {
  switch (unit) {
    case 'B':
      return length;
    case 'KB':
      return length * 1024;
    case 'MB':
      return length * 1024 * 1024;
    case 'GB':
      return length * 1024 * 1024 * 1024;
  }
};

const showResult = (totalSum, sumGB) => {
  const text = document.createElement('p');
  document.body.appendChild(text);
  text.innerText = `Suma przestrzeni zajmowanej przez wszystkie pliki wynosi ${totalSum} B i ${sumGB} GB`;
};

const getSum = () => {
  let totalSum = 0;

  files.forEach((file) => {
    const {
      name,
      size: {length, unit = 'B'},
    } = file;

    totalSum += convertUnits({length, unit});
  });

  const sumGB = (totalSum / 1024 ** 3).toFixed(4);
  showResult(totalSum, sumGB);
};

getSum();
