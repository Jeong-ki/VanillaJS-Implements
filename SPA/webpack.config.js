const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      // template: path.resolve(__dirname, 'src', 'index.html'),
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
  }, 
}