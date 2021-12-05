import { files } from "./data.js";

// Przyznam, ze w tym zadaniu cięzko było mi wyobrazić sobie dobre wykorzystanie destrukturyzacji oraz wartości domyślnych. Czy mogę prosić o wskazówki w tej kwestii? :)

const findFileAndUnits = () => {
  let finalSize = [];

  files.forEach((item) => {
    if (item.size.unit === undefined) {
      const byteFile = item.size.length / 1048576;
      finalSize.push(byteFile);
    } else if (item.size.unit === "KB") {
      const kbFile = item.size.length / 1024;
      finalSize.push(kbFile);
    } else if (item.size.unit === "MB") {
      const mbFile = item.size.length;
      finalSize.push(mbFile);
    } else if (item.size.unit === "GB") {
      const gbFile = item.size.length * 1024;
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
