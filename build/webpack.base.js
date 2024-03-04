const Constants = require('./Constants');

module.exports = {
  entry: {
    'common/c': `/${Constants.ENTRY_PATH('common')}`,
    'google/g': `/${Constants.ENTRY_PATH('google')}`,
    'naver/n': `/${Constants.ENTRY_PATH('naver')}`,
  },
  output: {
    path: `${Constants.DIST_PATH}`,
    filename: '[name].[contenthash].bundle.js',
  },
  watchOptions: {
    ignored: `${Constants.NODE_MODULE_PATH}`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': `${Constants.TSC_PATH}`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx|ts|tsx)$/,
        exclude: `${Constants.NODE_MODULE_PATH}`,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
