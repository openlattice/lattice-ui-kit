import { Set } from 'immutable';
import PACKAGE from '../package.json';

import * as LatticeUIKit from './index';

const EXPECTED_OBJ_EXPORTS = Set([
  'Button',
  'Creatable',
  'Modal',
  'Overlay',
  'Portal',
  'Select',
]);

describe('lattice-ui-kit named exports', () => {

  EXPECTED_OBJ_EXPORTS.forEach((component) => {
    test(`should export "${component}"`, () => {
      expect(LatticeUIKit).toHaveProperty(component);
      expect(LatticeUIKit[component]).toBeInstanceOf(Function);
    });
  });

  test('should export the correct version', () => {
    expect(LatticeUIKit.version).toEqual(PACKAGE.version);
  });

});
