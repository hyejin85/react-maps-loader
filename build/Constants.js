const path = require('path');

const rootPath = (directory) => path.resolve(__dirname, '..', directory);

const Constants = Object.freeze({
  ENTRY_PATH: (entry) => path.join('lib', entry, 'lib', 'index.js'),
  TSC_PATH: rootPath('lib'),
  NODE_MODULE_PATH: rootPath('node_modules'),
  DIST_PATH: rootPath('dist'),
});

module.exports = Constants;
