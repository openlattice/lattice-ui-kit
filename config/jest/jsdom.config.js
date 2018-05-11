const JSDOMEnvironment = require('jest-environment-jsdom');

// https://github.com/facebook/jest/issues/5124
// http://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string
module.exports = class JSDOMEnvironmentGlobal extends JSDOMEnvironment {

  constructor(config) {
    super(config);
    this.global.jsdom = this.dom;
  }

  teardown() {
    this.global.jsdom = null;
    return super.teardown();
  }
};
