const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        exclude: [ /node_modules/ ],
        use: 'awesome-typescript-loader'
      }
    ]
  }
};
