/*
 * @flow
 */

import * as Colors from './colors';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  Colors,
  version,
};
export { default as Button } from './button';
export { default as Banner } from './banner';
export { default as Checkbox } from './checkbox';
export { default as Input } from './input';
export { default as Label } from './label';
export { default as Modal } from './modal';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export { default as Spinner } from './spinner';
export { DatePicker, TimePicker } from './datetime';
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
