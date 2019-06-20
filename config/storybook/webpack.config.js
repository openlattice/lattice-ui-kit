const path = require('path');
const LIB_PATHS = require('../lib/paths.config.js');

const BABEL_CONFIG = path.resolve(__dirname, '../babel/babel.config.js');
const STORYBOOK_CONFIG = path.resolve(__dirname);

module.exports = ({ config }) => {

  const BABEL_LOADER = {
    test: /\.js$/,
    exclude: /node_modules/,
    include: [
      LIB_PATHS.ABS.SOURCE,
      STORYBOOK_CONFIG
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

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        BABEL_LOADER,
        FILE_LOADER_ASSETS,
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
  };
};
