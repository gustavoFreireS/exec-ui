/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // hot reload for react and devtools
  entry: ['react-hot-loader/patch', './src'],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    hot: true,
  },
  // easier debbuging
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      // postcss loader config
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      // typescript loader config
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  // webpack plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
