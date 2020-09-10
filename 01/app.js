const message = {
    text: (text => text)('Webpack działa! Gratulacje!!'),
}

const {
    text
} = {
    ...message
};
l
console.log(text);