/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = require('babel-jest').default.createTransformer({
  configFile: path.resolve(__dirname, '../babel/babel.config.js')
});
