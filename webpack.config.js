const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'aaa.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      src: './src/index.html'
    })
  ]
}