const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

       {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
       }, 

        {
          test: /\.(jpg|png|svg|gif)$/,
          type: 'asset/resource',
        },
        
   ],
},
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename:'index.html',
        inject:'body',
    }),
    new MiniCssExtractPlugin(),
],
};