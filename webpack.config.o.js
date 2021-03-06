const path = require('path');

module.exports = {
  entry: './test/src/index_o.js',
  output: {
    filename: 'bundle_o.js',
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
  }
};