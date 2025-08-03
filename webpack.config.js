const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {
  entry: {
    styles: './styles/main.less'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
              url: false,
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new IgnoreEmitPlugin(['styles.js']),
  ],
  devServer: {
    static: './public',
    client: {
      overlay: false,
      logging: 'none'
    }
  },
  mode: 'development'
};
