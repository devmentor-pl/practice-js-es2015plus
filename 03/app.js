import {files} from './data.js';

function convertToBytes(length, module = "B") {
    const data = {
      B: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
    };
  
    if (typeof data[module] === "undefined") {
      console.error("Taka jednostka nie istnieje");
    }
  
    return data[module] * length;

  }
  
  const getTotalSize = () => {
    let size = 0;
    files.forEach((f) => {
      const { size: { length, module } } = f;
      size += convertToBytes(length, module);
    });
    return size;
  };
  
  console.log(getTotalSize());