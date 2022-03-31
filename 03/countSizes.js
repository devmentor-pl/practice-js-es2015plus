const countSizes = (arr) => {
    let sumSizesMB = 0;
    arr.forEach(el => {
        sumSizesMB += el;
    })
    return sumSizesMB;
}

export default countSizes;