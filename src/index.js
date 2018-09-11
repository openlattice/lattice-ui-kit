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

export { Creatable, Select } from './select';
export { default as Button } from './button';
export { default as Modal } from './modal';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export default {
  version
};
