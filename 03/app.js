import { files } from "./data.js";

function convertToBye(length, unit) {
    if (unit === "B") {
        return length;
    } else if (unit === "KB") {
        return length * 1024;
    } else if (unit === "MB") {
        return length * 1024 * 1024;
    } else if (unit === "GB") {
        return length * 1024 * 1024 * 1024;
    }
}

const totalSize = () => {
    let size = 0;

    files.forEach((element) => {
        const {
            size: { length, unit = "B" },
        } = element;
        size = size + convertToBye(length, unit);
    });
    return size;
};
console.log(totalSize());
