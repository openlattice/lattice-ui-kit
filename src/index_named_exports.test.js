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
  'Chip',
  'ChoiceGroup',
  'Collapse',
  'Colors',
  'Creatable',
  'DataGrid',
  'DatePicker',
  'Divider',
  'Drawer',
  'ExpansionPanel',
  'ExpansionPanelDetails',
  'ExpansionPanelSummary',
  'Fab',
  'FolderTab',
  'FolderTabs',
  'HeadCell',
  'Hooks',
  'IconButton',
  'IconSplash',
  'Input',
  'Label',
  'List',
  'ListItem',
  'ListItemAvatar',
  'ListItemSecondaryAction',
  'ListItemText',
  'ListSubheader',
  'MarkdownEditor',
  'MarkdownPreview',
  'MarkdownWrapper',
  'Menu',
  'MenuItem',
  'MenuList',
  'Modal',
  'ModalFooter',
  'ModalHeader',
  'MuiPickersUtilsProvider',
  'NestedMenuItem',
  'Overlay',
  'PaginationToolbar',
  'PersonResult',
  'Popover',
  'Popper',
  'Portal',
  'Radio',
  'Result',
  'Search',
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
  'StylesProvider',
  'Switch',
  'Tab',
  'TabContext',
  'TabPanel',
  'Table',
  'TableBody',
  'TableHeader',
  'TableRow',
  'TableUtils',
  'Tabs',
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
