const message = {
    text: (text => text)('Webpack działa!'),
}

const { text } = { ...message };

console.log( text );