const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Шлях до вашого JavaScript-файлу
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src/css'), 
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash][ext]',
        },
        include: path.resolve(__dirname, 'src/img'), 
      },
      {
        test: /\.svg$/,
        type: 'asset/inline', 
        include: path.resolve(__dirname, 'src/img'), 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
  resolve: {
    alias: {
      'swiper-bundle': path.resolve(__dirname, 'src/swiper-bundle.js'),
    },
  },
};
