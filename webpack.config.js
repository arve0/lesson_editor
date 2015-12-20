const webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    vendors: ['react', 'markdown-it']
  },
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}
