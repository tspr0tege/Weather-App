const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src')
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }     
};