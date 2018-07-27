import { configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';
// automatically import all files ending in *.stories.js

// addDecorator(
//   withTests({
//     results
//   })
// );

const req = require.context('../../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
