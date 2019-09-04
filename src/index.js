/*
 * @flow
 */

import * as Colors from './colors';
import * as StyleUtils from './utils/StyleUtils';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  Colors,
  StyleUtils,
  version,
};
export { default as Banner } from './banner';
export { default as Label } from './label';
export { default as Modal } from './modal';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export { default as Spinner } from './spinner';
export { default as selectStyles } from './style/selectStyles';
export {
  Button,
  CopyButton,
  EditButton,
  IconButton,
  MinusButton,
  PlusButton,
  SearchButton,
} from './button';
export { Checkbox, Radio } from './choices';
export { DatePicker, TimePicker } from './datetime';
export {
  Stepper,
  StepLabel,
  StepIcon,
  Step
} from './stepper';
export { Input, SearchInput, TextArea } from './text';
export {
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from './layout';
export { Creatable, Select, CheckboxSelect } from './select';
export {
  Search,
  DataGrid,
  IconSplash,
  PersonResult,
  Result,
  SearchResults,
} from './components/search';

export default {
  version
};
