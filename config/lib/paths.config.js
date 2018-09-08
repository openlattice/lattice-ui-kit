const path = require('path');

const BUILD = 'build';
const NODE = 'node_modules';
const SOURCE = 'src';

const ROOT = path.resolve(__dirname, '../..');

module.exports = {
  ABS: {
    BUILD: path.resolve(ROOT, BUILD),
    ENTRY: path.resolve(ROOT, `${SOURCE}/index.js`),
    NODE: path.resolve(ROOT, NODE),
    SOURCE: path.resolve(ROOT, SOURCE),
  },
  REL: {},
};
