/*
 * @flow
 */

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export { version };
export { default as Button } from './button';
export { default as Overlay } from './overlay';
export { default as Portal } from './portal';
export default {
  version
};
