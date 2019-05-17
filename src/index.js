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
export { DatePicker, TimePicker } from './datetime';
export { Creatable, Select, CheckboxSelect } from './select';
export { Card, CardSegment, CardStack } from './layout';
export { default as Button } from './button';
export { default as Checkbox } from './checkbox';
export { default as Modal } from './modal';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export {
  Search,
  SearchResults,
  Result,
  PersonResult
} from './components/search';
export default {
  version
};
