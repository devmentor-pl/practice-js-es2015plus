const path = require('path');
// importuję bibliotekę [path] z [node.js]
module.exports = {
entry: './app.js',
// definiuję plik wejściowy
output: {
path: path.resolve(__dirname, 'build'),
// definiuję ścieżkę wyjściową
filename: 'app.min.js',
// definiuję nazwę pliku wyjściowego
},
module: {
rules: []
// obecnie brak dodatkowych ustawień
},
}
// eksportuję ustawienia dla webpacka