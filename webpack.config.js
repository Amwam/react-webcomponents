module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",

        }
      }
    ],
    loaders: [{ test: /\.css$/, loader: "style!css-loader" }]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: 'source-map'
};
