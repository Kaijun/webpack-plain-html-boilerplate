var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'jquery',
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(css|scss|sass)$/,
        include: /src/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
