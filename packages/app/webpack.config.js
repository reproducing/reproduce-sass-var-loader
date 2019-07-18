const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: path.resolve(__dirname, 'dist', 'index.html')
    })
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            },
            {
              loader: "@epegzz/sass-vars-loader",
              options: {
                syntax: 'scss',
                files: ['@reproducing/common/sassVars.js']
              }
            }
        ]
    }]
}
};
