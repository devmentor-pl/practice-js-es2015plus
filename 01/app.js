const message = {
    text: (text => text)('Webpack działa! Gratulacje! TEST1'),
}

const { text } = { ...message };

console.log( text );