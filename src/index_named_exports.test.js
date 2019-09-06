import { Set } from 'immutable';
import PACKAGE from '../package.json';

import * as LatticeUIKit from './index';

const EXPECTED_OBJ_EXPORTS = Set([
  'Banner',
  'Button',
  'Card',
  'CardHeader',
  'CardSegment',
  'Cell',
  'Checkbox',
  'CheckboxSelect',
  'Colors',
  'Creatable',
  'DataGrid',
  'DatePicker',
  'HeadCell',
  'IconSplash',
  'Input',
  'Label',
  'Modal',
  'Overlay',
  'PersonResult',
  'Portal',
  'Radio',
  'Result',
  'Search',
  'SearchInput',
  'SearchResults',
  'Select',
  'Step',
  'StepIcon',
  'StepLabel',
  'Stepper',
  'StyleUtils',
  'Table',
  'TableBody',
  'TableHeader',
  'TableRow',
  'TextArea',
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
