const path = require('path');

const config = {
  mode: 'production',
  profile: false,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'chunk/[name].[chunkhash].js',
    publicPath: './'
  },
  resolveLoader: {
    alias: {
      'hello-loader': path.resolve(__dirname, './hello-loader.js'),
    }
  },
  optimization: {
    minimize: false,
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
      {
        test: /\.less$/i,
        use: [
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
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
