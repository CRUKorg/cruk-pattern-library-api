const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'patterns': './main.js',
    'index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'patterns',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new StyleLintPlugin({
      context: './patterns',
      syntax: 'scss',
    }),
    new MiniCssExtractPlugin({
      filename: 'all.css',
    })
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
              presets: [
                '@babel/react',
                '@babel/env',
                '@babel/stage-0'
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
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
