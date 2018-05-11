import PACKAGE from '../package.json';

import * as Index from './index';

describe('lattice-ui-kit named exports', () => {

  test('should export the correct version', () => {
    expect(Index.version).toEqual(PACKAGE.version);
  });

});
