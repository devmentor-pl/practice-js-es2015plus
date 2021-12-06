import { files } from "./data.js";

const findFileAndUnits = () => {
  let finalSize = [];

  files.forEach((item) => {
    const { size } = item;
    if (size.unit === undefined) {
      const byteFile = size.length / 1048576;
      finalSize.push(byteFile);
    } else if (size.unit === "KB") {
      const kbFile = size.length / 1024;
      finalSize.push(kbFile);
    } else if (size.unit === "MB") {
      const mbFile = size.length;
      finalSize.push(mbFile);
    } else if (size.unit === "GB") {
      const gbFile = size.length * 1024;
      finalSize.push(gbFile);
    }
  });

  const addFilesSize = (total, num) => {
    return total + num;
  };

  const sizeInMB = finalSize.reduce(addFilesSize);

  const showSizeInMB = () => {
    console.log(`${sizeInMB.toFixed(2)} MB`);
  };

  showSizeInMB();
};

findFileAndUnits();
