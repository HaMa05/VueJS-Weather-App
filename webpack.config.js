const Dotenv = require('dotenv-webpack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
    build: {
      assetsPublicPath: '/',
      assetsSubDirectory: 'assets',
    },
  },
  plugins: [new Dotenv()],
};
