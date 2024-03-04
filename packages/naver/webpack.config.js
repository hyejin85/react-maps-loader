const { merge } = require('webpack-merge');
const baseConfig = require('./build/webpack.base.js');

module.exports = () => {
  const envConfig = require(`./build/webpack.prod.js`);
  return merge(baseConfig, envConfig);
};
