import { Set } from 'immutable';
import PACKAGE from '../package.json';

import * as LatticeUIKit from './index';

const EXPECTED_OBJ_EXPORTS = Set([
  'Banner',
  'Button',
  'Card',
  'CardSegment',
  'Checkbox',
  'CheckboxSelect',
  'Colors',
  'Creatable',
  'DataGrid',
  'DatePicker',
  'Input',
  'Label',
  'Modal',
  'Overlay',
  'PersonResult',
  'Portal',
  'Result',
  'Search',
  'SearchResults',
  'Select',
  'TimePicker',
]);

describe('lattice-ui-kit named exports', () => {

  EXPECTED_OBJ_EXPORTS.forEach((component) => {
    test(`should export "${component}"`, () => {
      expect(LatticeUIKit).toHaveProperty(component);
    });
  });

  test('should export the correct version', () => {
    expect(LatticeUIKit.version).toEqual(PACKAGE.version);
  });

});
