'use strict'

const webpack        = require('webpack')
const path           = require('path')
const env            = require('yargs').argv.mode

/* misc staff */
const LiveReloadPlugin = require('webpack-livereload-plugin')
const UglifyJsPlugin   = webpack.optimize.UglifyJsPlugin
const libraryName      = 'tinytyper'
const plugins          = []

let outputFile       = ''


if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = libraryName + '.min.js'
} else {
  plugins.push(new LiveReloadPlugin())
  outputFile = libraryName + '.js'
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
}

module.exports = config
