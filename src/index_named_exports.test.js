import { Set } from 'immutable';

import * as LatticeUIKit from './index';

import PACKAGE from '../package.json';

const EXPECTED_OBJ_EXPORTS = Set([
  'Badge',
  'Banner',
  'Button',
  'Card',
  'CardHeader',
  'CardSegment',
  'Cell',
  'Checkbox',
  'CheckboxSelect',
  'ChoiceGroup',
  'Colors',
  'CopyButton',
  'Creatable',
  'DataGrid',
  'DatePicker',
  'Drawer',
  'EditButton',
  'Fab',
  'HeadCell',
  'Hooks',
  'IconButton',
  'IconSplash',
  'Input',
  'Label',
  'MinusButton',
  'Modal',
  'ModalFooter',
  'ModalHeader',
  'Overlay',
  'PaginationToolbar',
  'PersonResult',
  'PlusButton',
  'Portal',
  'Radio',
  'Result',
  'Search',
  'SearchButton',
  'SearchInput',
  'SearchResults',
  'Select',
  'Skeleton',
  'SpeedDial',
  'SpeedDialAction',
  'SpeedDialIcon',
  'Step',
  'StepIcon',
  'StepLabel',
  'Stepper',
  'StyleUtils',
  'Table',
  'TableBody',
  'TableHeader',
  'TableRow',
  'TableUtils',
  'Tag',
  'TextArea',
  'TimePicker',
  'Tooltip',
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
