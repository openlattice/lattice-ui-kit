/*
 * @flow
 */

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export { version };
export { default as Button } from './button';
export { default as Select } from './select';
export default {
  version
};
