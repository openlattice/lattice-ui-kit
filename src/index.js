/*
 * @flow
 */

import { StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './datetime/src/components/utils/LatticeLuxonUtils';
import * as Colors from './colors';
import * as Hooks from './hooks';
import * as Sizes from './style/Sizes';
import * as StyleUtils from './utils/StyleUtils';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export * from '@material-ui/core';
export * from '@material-ui/lab';
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
export type {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './button';

export { Chip } from './chip';
export type {
  ChipColor,
  ChipProps,
  ChipSize,
} from './chip';

export { Checkbox, ChoiceGroup, Radio } from './choices';

export { FolderTab, FolderTabs } from './tabs';

export {
  ActionModal,
  Modal,
  ModalFooter,
  ModalHeader,
} from './modal';
export type {
  ActionModalProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from './modal';

export {
  Stepper,
  StepLabel,
  StepIcon,
  Step
} from './stepper';
export { Input, SearchInput, TextArea } from './text';

// NOTE: doing this because adding @flow to layout/index.js will break things
export { default as AppContainerWrapper } from './layout/src/components/App/AppContainerWrapper';
export { default as AppContentWrapper } from './layout/src/components/App/AppContentWrapper';
export { NestedMenuItem } from './menu';
export {
  AppHeaderWrapper,
  AppNavigationWrapper,
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from './layout';

export { MarkdownEditor, MarkdownPreview, MarkdownWrapper } from './markdown';

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
  LatticeLuxonUtils,
  MuiPickersUtilsProvider,
};

export default {
  version
};
