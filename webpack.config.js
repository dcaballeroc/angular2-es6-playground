var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractText = require('extract-text-webpack-plugin');
var Webpack = require('webpack');

var PATHS = {
  app: path.join(__dirname, 'public', 'app'),
  bundle: path.join(__dirname, 'public', 'bundle'),
  modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  entry: path.join(PATHS.app, 'main.js'),
  output: {
    path: PATHS.bundle,
    publicPath: '/bundle/',
    filename: 'app.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: PATHS.app
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        include: PATHS.modules
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        include: PATHS.app
      },
      // For global stylesheet
      {
        test: /main\.scss$/,
        loader: ExtractText.extract('style', 'css?sourceMap!postcss!sass?sourceMap'),
        include: PATHS.app
      },
      // Per-component stylesheets
      {
        test: /\.scss$/,
        loaders: ['raw', 'postcss', 'sass?sourceMap'],
        include: PATHS.app,
        exclude: path.join(PATHS.app, 'main.scss')
      },
      {
        test: /\.html$/,
        loader: 'raw',
        include: PATHS.app
      }
    ],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /.+zone\.js\/lib\/.+/]
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
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: process.env.HOST,
    port: process.env.PORT || 3000
  },
  plugins: [
    new ExtractText('app.css'),
//    new Webpack.optimize.OccurrenceOrderPlugin(true),
//    new Webpack.optimize.CommonsChunkPlugin({
//      name: ['vendor', 'polyfills'],
//      minChunks: 2
//    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
};
