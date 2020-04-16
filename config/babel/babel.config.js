module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    ['babel-plugin-transform-imports', {
      '@fortawesome/pro-duotone-svg-icons': {
        transform: (importName, matches) => `@fortawesome/pro-duotone-svg-icons/${importName}`,
        preventFullImport: true
      },
      '@fortawesome/pro-light-svg-icons': {
        transform: (importName, matches) => `@fortawesome/pro-light-svg-icons/${importName}`,
        preventFullImport: true
      },
      '@fortawesome/pro-regular-svg-icons': {
        transform: (importName, matches) => `@fortawesome/pro-regular-svg-icons/${importName}`,
        preventFullImport: true
      },
      '@fortawesome/pro-solid-svg-icons': {
        transform: (importName, matches) => `@fortawesome/pro-solid-svg-icons/${importName}`,
        preventFullImport: true
      },
    }]
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
};
