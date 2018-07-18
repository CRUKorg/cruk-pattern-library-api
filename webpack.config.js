var path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'patterns.js',
    library: 'patterns',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  plugins: [
    new StyleLintPlugin({
      context: './patterns',
      syntax: 'scss',
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
    extensions:['.js', '.jsx', '.webpack.js', '.web.js','*']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              plugins: [
                'transform-class-properties',
                'transform-es2015-object-super',
                'transform-proto-to-assign',
                'transform-es2015-block-scoping',
                ['transform-es2015-classes', {'loose': true}]
              ],
              presets: ['react', 'env', 'stage-0']
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
