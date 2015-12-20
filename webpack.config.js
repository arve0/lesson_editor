const webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      './src/main.js'
    ],
    vendors: ['react', 'markdown-it']
  },
  output: {
    path: 'dist',
    filename: 'app.js'
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
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(png|jpg|svg|woff|ttf|woff2|eot)$/,
        loader: 'url-loader'
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}
