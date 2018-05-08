var path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'patterns.js',
    library: 'patterns',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new StyleLintPlugin({
      context: './patterns',
      syntax: 'scss',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env']
            }
          },
          'eslint-loader'
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  node: {
    fs: 'empty'
  }
};
