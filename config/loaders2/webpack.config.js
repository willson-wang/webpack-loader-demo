const path = require('path');

const config = {
  mode: 'production',
  profile: false,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'chunk/[name].[chunkhash].js',
    publicPath: './'
  },
  resolveLoader: {
    alias: {
      'a-loader': path.resolve(__dirname, './a-loader.js'),
      'b-loader': path.resolve(__dirname, './b-loader.js'),
      'c-loader': path.resolve(__dirname, './c-loader.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: [
          'a-loader',
          'b-loader',
          'c-loader'
        ]
      },
    ]
  },
  entry: {
    app: path.join(__dirname, '../../src/app')
  },
  cache: false,
}

module.exports = config
