import { files } from "./data.js";

const KB_TO_BITES = 1024;

const parseUnits = [
  {
    unit: "B",
    bites: 1,
  },
  {
    unit: "KB",
    bites: KB_TO_BITES,
  },
  {
    unit: "MB",
    bites: Math.pow(KB_TO_BITES, 2),
  },
  {
    unit: "GB",
    bites: Math.pow(KB_TO_BITES, 3),
  },
];

const countFilesSize = (files) => {
  let sum = 0;

  for (const {
    size: { length, unit = "B" },
  } of files) {
    const bites = parseToBites(length, unit);
    sum += bites;
  }

  console.log(sum);
};

countFilesSize(files);

function parseToBites(length, unit) {
  let bitesResult = 0;
  parseUnits.forEach(({ unit: unitType, bites }) => {
    if (unitType === unit) {
      bitesResult = length * bites;
    }
  });
  return bitesResult;
}
