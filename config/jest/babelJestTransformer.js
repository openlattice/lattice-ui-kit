const path = require('path');

module.exports = require('babel-jest').createTransformer({
  configFile: path.resolve(__dirname, '../babel/babel.config.js')
});
