module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
    }],
    [
      'babel-plugin-styled-components',
      { ssr: false, displayName: false, namespace: 'sc' },
    ],
    ['babel-plugin-transform-imports', {
      '@fortawesome/free-solid-svg-icons': {
        transform: (importName) => `@fortawesome/free-solid-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true,
      },
      '@fortawesome/pro-duotone-svg-icons': {
        preventFullImport: true,
        skipDefaultConversion: true,
        transform: (importName) => `@fortawesome/pro-duotone-svg-icons/${importName}`,
      },
      '@fortawesome/pro-light-svg-icons': {
        preventFullImport: true,
        skipDefaultConversion: true,
        transform: (importName) => `@fortawesome/pro-light-svg-icons/${importName}`,
      },
      '@fortawesome/pro-regular-svg-icons': {
        preventFullImport: true,
        skipDefaultConversion: true,
        transform: (importName) => `@fortawesome/pro-regular-svg-icons/${importName}`,
      },
      '@fortawesome/pro-solid-svg-icons': {
        preventFullImport: true,
        skipDefaultConversion: true,
        transform: (importName) => `@fortawesome/pro-solid-svg-icons/${importName}`,
      },
    }],
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: '3',
      useBuiltIns: 'entry',
    }],
    '@babel/preset-flow',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ],
};
