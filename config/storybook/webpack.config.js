const path = require('path');
const Webpack = require('webpack');

const LIB_PATHS = require('../lib/paths.config.js');
const PACKAGE = require('../../package.json');

module.exports = ({ config }) => {

  const BABEL_CONFIG = path.resolve(__dirname, '../babel/babel.config.js');
  const STORYBOOK_CONFIG = path.resolve(__dirname);

  const BABEL_LOADER = {
    test: /\.js$/,
    exclude: /node_modules/,
    include: [
      LIB_PATHS.ABS.SOURCE,
      STORYBOOK_CONFIG,
    ],
    use: {
      loader: 'babel-loader',
      options: {
        configFile: BABEL_CONFIG,
      },
    },
  };

  const FILE_LOADER_ASSETS = {
    test: /\.(gif|ico|jpg|jpeg|md|png|svg|webp)(\?.*)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'file-loader',
    }
  };

  /*
   * plugins
   */

  const DEFINE_PLUGIN = new Webpack.DefinePlugin({
    __VERSION__: JSON.stringify(`v${PACKAGE.version}`),
  });

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        BABEL_LOADER,
        FILE_LOADER_ASSETS,
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/source-loader')],
          enforce: 'pre',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    plugins: [
      ...config.plugins,
      DEFINE_PLUGIN,
    ],
  };
};
