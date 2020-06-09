import { Set } from 'immutable';

import PACKAGE from '../package.json';
import * as LatticeUIKit from './index';


const EXPECTED_OBJ_EXPORTS = Set([
  'Badge',
  'Banner',
  'Breadcrumbs',
  'Button',
  'Card',
  'CardHeader',
  'CardSegment',
  'Cell',
  'Checkbox',
  'CheckboxSelect',
  'ChoiceGroup',
  'Collapse',
  'Colors',
  'CopyButton',
  'Creatable',
  'DataGrid',
  'DatePicker',
  'Drawer',
  'EditButton',
  'ExpansionPanel',
  'ExpansionPanelDetails',
  'ExpansionPanelSummary',
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
  'MuiPickersUtilsProvider',
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
  'ThemeProvider',
  'ThemeProvider',
  'TimePicker',
  'Tooltip',
  'darkTheme',
  'lightTheme',
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
