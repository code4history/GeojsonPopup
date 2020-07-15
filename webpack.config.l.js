const path = require('path');

module.exports = {
  entry: './test/src/index_l.js',
  output: {
    filename: 'bundle_l.js',
    path: path.resolve(__dirname, 'test/dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          }
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