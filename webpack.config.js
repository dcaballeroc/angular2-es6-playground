var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractText = require('extract-text-webpack-plugin');
var Webpack = require('webpack');

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    chunkFileName: '[id].js'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loader: ExtractText.extract('style', 'css!postcss'),
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss'),
        include: PATHS.app
      }
    ],
    noParse: []
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  postcss:[
    autoprefixer({
      browsers: [
        'last 2 versions',
        'iOS >= 7',
        'Android >= 4',
        'Explorer >= 10',
        'ExplorerMobile >= 11'
      ],
      cascade: false
    })
  ],
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT || 3000
  },
  plugins: [
    new ExtractText('bundle.css', { allChunks: true }),
    new Webpack.HotModuleReplacementPlugin()
  ]
};
