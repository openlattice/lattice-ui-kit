/*
 * @flow
 */

import {
  Chip,
  Collapse,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Tab,
  Tabs,
  ThemeProvider,
} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TabContext,
  TabPanel
} from '@material-ui/lab';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './datetime/src/components/utils/LatticeLuxonUtils';
import * as Colors from './colors';
import * as Hooks from './hooks';
import * as Sizes from './style/Sizes';
import * as StyleUtils from './utils/StyleUtils';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  Colors,
  Hooks,
  Sizes,
  StyleUtils,
  StylesProvider,
  version,
};
export { default as Badge } from './badge';
export { default as Banner } from './banner';
export { default as Drawer } from './drawer';
export { default as Label } from './label';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export { default as Spinner } from './spinner';
export { default as Tag } from './tag';
export { selectStyles } from './style/select';

export { Button, IconButton } from './button';
export type { ButtonProps } from './button';

export { Checkbox, ChoiceGroup, Radio } from './choices';

export {
  ActionModal,
  Modal,
  ModalFooter,
  ModalHeader
} from './modal';
export type {
  ActionModalProps,
  ModalProps,
} from './modal';

export {
  Stepper,
  StepLabel,
  StepIcon,
  Step
} from './stepper';
export { Input, SearchInput, TextArea } from './text';
export {
  Menu,
  MenuItem,
  MenuList,
  NestedMenuItem,
} from './menu';
export {
  AppContainerWrapper,
  AppContentWrapper,
  AppHeaderWrapper,
  AppNavigationWrapper,
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from './layout';
export { Creatable, Select, CheckboxSelect } from './select';
export {
  Cell,
  HeadCell,
  PaginationToolbar,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableUtils,
} from './table';
export {
  Search,
  DataGrid,
  IconSplash,
  PersonResult,
  Result,
  SearchResults,
} from './components/search';

// Material-ui
export {
  DatePicker,
  TimePicker,
  DateTimePicker,
} from './datetime';
export { default as Breadcrumbs } from './breadcrumbs';
export { default as Skeleton } from './skeleton';
export { default as Tooltip } from './tooltip';
export { default as Typography } from './typography';
export {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from './expansion';
export {
  darkTheme,
  lightTheme
} from './theme';

export {
  Chip,
  Collapse,
  Divider,
  Fab,
  LatticeLuxonUtils,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  MuiPickersUtilsProvider,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tab,
  TabContext,
  TabPanel,
  Tabs,
  ThemeProvider,
};

export default {
  version
};
