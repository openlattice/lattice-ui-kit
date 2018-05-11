/* eslint-disable import/extensions */

const path = require('path');

const LIB_CONFIG = require('./lib.config.js');

/*
 * absolute paths
 */

const ROOT = path.resolve(__dirname, '../..');

const BUILD = path.resolve(ROOT, 'build');
const NODE = path.resolve(ROOT, 'node_modules');
const SOURCE = path.resolve(ROOT, 'src');
const ENTRY = path.resolve(SOURCE, LIB_CONFIG.ENTRY_FILE_NAME);

const BUILD_STATIC = path.resolve(BUILD, 'static');
const BUILD_STATIC_ASSETS = path.resolve(BUILD_STATIC, 'assets');
const BUILD_STATIC_CSS = path.resolve(BUILD_STATIC, 'css');
const BUILD_STATIC_JS = path.resolve(BUILD_STATIC, 'js');

/*
 * relative paths
 */

const STATIC = 'static';
const STATIC_ASSETS = path.join(STATIC, 'assets');
const STATIC_ASSETS_IMAGES = path.join(STATIC_ASSETS, 'images');
const STATIC_CSS = path.join(STATIC, 'css');
const STATIC_JS = path.join(STATIC, 'js');

module.exports = {
  ABS: {
    BUILD,
    BUILD_STATIC,
    BUILD_STATIC_ASSETS,
    BUILD_STATIC_CSS,
    BUILD_STATIC_JS,
    ENTRY,
    NODE,
    ROOT,
    SOURCE
  },
  REL: {
    STATIC_ASSETS_IMAGES,
    STATIC_CSS,
    STATIC_JS
  }
};
