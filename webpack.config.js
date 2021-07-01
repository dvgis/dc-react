/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopywebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = (env, argv) => {
  const IS_PROD = (argv && argv.mode === 'production') || false
  return {
    mode: IS_PROD ? 'production' : 'development',
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
    },
    devServer: {
      hot: true,
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: IS_PROD ? '/' : '/',
    },
    devtool: IS_PROD ? false : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
            compact: false,
            ignore: ['checkTree'],
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 20000,
          },
        },
      ],
    },
    optimization: IS_PROD
      ? {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
            }),
          ],
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            automaticNameDelimiter: '~',
            cacheGroups: {
              vendors: {
                name: 'chunk-vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: 'initial',
              },
              common: {
                name: 'chunk-common',
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true,
              },
            },
          },
        }
      : {},
    plugins: [
      new MiniCssExtractPlugin(),
      new CopywebpackPlugin({
        patterns: [
          {
            from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
            to: 'libs/dc-sdk/resources',
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    ],
    resolve: {
      extensions: ['.js', '.json', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
}
