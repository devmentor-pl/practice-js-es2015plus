// const taskNumber = null;
//numer przerabianego zadania

const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin

const taskNumber = process.env.TASK_NUMBER;
// dla każdego taska przy odpalaniu build/start należy wpisać w terminalu numer 
// TASK_NUMBER=02 npm run build


module.exports = {
    entry: `./${taskNumber}/app.js`,
    // definiuje plik wejściowy
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: 'app.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    target: "web", 
    // niezbędne do uruchomienia automatycznego odświeżania z webpack-dev-server@3
    // https://github.com/webpack/webpack-dev-server/issues/2758
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam jakie pliki 
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: 'babel-loader',
                // określam jaki [loader]
                // ma być wykorzystany
            }
        ]
        // obecnie brak dodatkowych ustawień
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${taskNumber}/index.html`,
            // wskazuje plik źródłowy
            filename: 'index.html'
            // określan nazwę dla pliku
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'), // Katalog dla plików statycznych
        },
        watchFiles: ['**/*.html'], // 🔥 Obserwowanie zmian w plikach HTML
        hot: true,  // 🔥 Włączanie Hot Module Replacement (HMR) dla JS/CSS
        open: true, // Automatyczne otwieranie przeglądarki
        port: 3000  // Możesz ustawić inny port, np. 8080
    }
}
// eksportuję ustawienia dla webpack-a