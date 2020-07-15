var webpack = require("webpack");
var path = require('path')

module.exports = {
  entry: './test/src/index_m.js',
  output: {
    filename: 'bundle_m.js',
    path: path.resolve(__dirname, 'test/dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './test/dist/img/icon/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      mapboxgl: 'mapbox-gl'
    })
  ]
};