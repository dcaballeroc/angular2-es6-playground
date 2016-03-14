var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
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
        loaders: ['style', 'css', 'postcss'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
