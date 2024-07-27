const taskNumber = "01";
//numer przerabianego zadania

const path = require("path");
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require("html-webpack-plugin");
// importuję odpowiedni plugin
module.exports = {
  entry: `./${taskNumber}/app.js`,
  // definiuje plik wejściowy
  output: {
    path: path.resolve(__dirname, "build"),
    // definiuje ścieżką wyjściową
    filename: "app.min.js",
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
        use: "babel-loader",
        // określam jaki [loader]
        // ma być wykorzystany
      },
    ],
    // obecnie brak dodatkowych ustawień
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./${taskNumber}/index.html`,
      // wskazuje plik źródłowy
      filename: "index.html",
      // określan nazwę dla pliku
    }),
  ],
};
// eksportuję ustawienia dla webpack-a
