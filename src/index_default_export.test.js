/* eslint-disable import/no-named-as-default-member */

import PACKAGE from '../package.json';

import Index from './index';

describe('lattice-ui-kit default export', () => {

  test('should export the correct version', () => {
    expect(Index.version).toEqual(PACKAGE.version);
  });

});
