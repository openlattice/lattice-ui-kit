module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
  ]
};
