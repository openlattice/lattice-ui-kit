/* eslint-disable import/extensions */

const Webpack = require('webpack');

const PACKAGE = require('../../package.json');
const LIB_CONFIG = require('../lib/lib.config.js');
const LIB_PATHS = require('../lib/paths.config.js');

const {
  TARGET_ENV,
  ifDev,
  ifMin,
  isDev,
  isProd,
  isTest
} = require('../lib/env.config.js');

module.exports = function webpackConfig() {

  /*
   * loaders
   */

  const BABEL_LOADER = {
    test: /\.js$/,
    exclude: /node_modules/,
    include: [
      LIB_PATHS.ABS.SOURCE
    ],
    use: ['babel-loader']
  };

  /*
   * plugins
   */

  const BANNER_PLUGIN = new Webpack.BannerPlugin({
    banner: LIB_CONFIG.BANNER,
    entryOnly: true
  });

  const DEFINE_PLUGIN = new Webpack.DefinePlugin({
    __ENV_DEV__: JSON.stringify(isDev),
    __ENV_PROD__: JSON.stringify(isProd),
    __ENV_TEST__: JSON.stringify(isTest),
    __PACKAGE__: JSON.stringify(PACKAGE.name),
    __VERSION__: JSON.stringify(`v${PACKAGE.version}`)
  });

  /*
   * base webpack config
   */

  // TODO: "externals", "entry.vendor"

  return {
    bail: true,
    mode: ifDev('development', 'production'),
    module: {
      rules: [
        BABEL_LOADER
      ]
    },
    optimization: {
      minimize: ifMin(true, false)
    },
    output: {
      library: LIB_CONFIG.LIB_NAMESPACE,
      libraryTarget: 'umd',
      path: LIB_PATHS.ABS.BUILD,
      publicPath: '/',
      filename: ifMin(
        `${LIB_CONFIG.LIB_FILE_NAME}.min.js`,
        `${LIB_CONFIG.LIB_FILE_NAME}.js`
      )
    },
    performance: {
      hints: false // disable performance hints for now
    },
    plugins: [
      DEFINE_PLUGIN,
      BANNER_PLUGIN
    ],
    resolve: {
      extensions: ['.js'],
      modules: [
        LIB_PATHS.ABS.SOURCE,
        LIB_PATHS.ABS.NODE
      ]
    },
    target: TARGET_ENV
  };
};
