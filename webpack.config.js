var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractText = require('extract-text-webpack-plugin');
var Webpack = require('webpack');

var PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build'),
  modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
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
        loader: ExtractText.extract('style', 'css?sourceMap!postcss'),
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css?sourceMap!postcss!sass?sourceMap'),
        include: PATHS.app
      }
    ],
    noParse: []
  },
  resolve: {
    modulesDirectories: [PATHS.modules],
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
