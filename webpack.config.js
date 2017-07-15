var HtmlWebpackPlguin = require('html-webpack-plugin')
var webpack = require("webpack")

module.exports = {
  entry: ['./build/dev-client.js', './src/main.js'],
  output: {
    path: '/Users/aixiaoai/nodejs/webpack-demo/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|git|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            // 如果超过大小限制，则不进行编码，输出到/img目录
            limit: 10000,
            name: '/img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            // 压缩 html 代码
            minimize: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlguin({
      // 输出文件名
      filename: 'index.html',
      // 模板文件名
      template: 'index.html',
      // script 标签置于 body 底部
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
