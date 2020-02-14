/*
 * @flow
 */

import { Fab } from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';

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
export {
  Button,
  CopyButton,
  EditButton,
  IconButton,
  MinusButton,
  PlusButton,
  SearchButton,
} from './button';
export { Checkbox, ChoiceGroup, Radio } from './choices';
export {
  ActionModal,
  Modal,
  ModalFooter,
  ModalHeader
} from './modal';
export {
  Stepper,
  StepLabel,
  StepIcon,
  Step
} from './stepper';
export { Input, SearchInput, TextArea } from './text';
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
export { default as Skeleton } from './skeleton';
export { default as Tooltip } from './tooltip';
export { SpeedDial, SpeedDialAction, SpeedDialIcon };
export { Fab };

export default {
  version
};
