const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    swiperSlider: './src/swiper-bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
      template: './src/index.html', // шлях до вашого HTML-шаблону
      filename: 'index.html', // ім'я вихідного файлу
      chunks: ['swiperSlider'], // назва чанка, який має бути включений у цей HTML-файл
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
