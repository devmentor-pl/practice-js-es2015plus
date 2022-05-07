const message = {
    text: (text => text)('Webpack działa! Gratulacje!'),
    // text: ('Webpack działa! Gratulacje!'),
}

console.log(message)

const { text } = { ...message };

console.log( text );