const path = require('path');
const { ProgressPlugin } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')



const smp = new SpeedMeasurePlugin();

const config = {
  mode: 'production',
  devtool: 'source-map',
  cache: {
    type: 'filesystem',
    name: 'production-cache',
    version: 'production',
  },
  profile: false,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'chunk/[name].[chunkhash].js',
    publicPath: './'
  },
  resolveLoader: {
    alias: {
      'a-loader': path.resolve(__dirname, './loaders1/a-loader.js'),
      'b-loader': path.resolve(__dirname, './loaders1/b-loader.js'),
      'c-loader': path.resolve(__dirname, './loaders1/c-loader.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less|s[a|c]ss)(\?.*)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: [
          'a-loader',
          'b-loader',
          'c-loader'
        ]
      },
      // {
      //   test: /\.[tj]sx?$/i,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {}
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10240
          }
        },
        generator: {
          filename: 'image/[name].[hash][ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10240
          }
        },
        generator: {
          filename: 'static/fonts/[name].[hash][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|m4a|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10240
          }
        },
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
  entry: {
    app: path.join(__dirname, '../src/app')
  },
  cache: false,
}

if (process.env.ANALYZER) {
  config.plugins.push(new BundleAnalyzerPlugin())
}


const lastCofig = process.env.SPEED_MEASURE ? smp.wrap(config) : config

// MiniCssExtractPlugin不能与SpeedMeasurePlugin一起使用，不然会抛错
config.plugins.push(new MiniCssExtractPlugin(
  {
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css',
    experimentalUseImportModule: false
  }
))


module.exports = lastCofig
