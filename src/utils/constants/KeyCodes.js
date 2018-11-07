/*
 * @flow
 */

type KeyCodeEnum = {|
  ENTER :'Enter';
  ESCAPE :'Escape';
|};
type KeyCode = $Values<KeyCodeEnum>;

// TODO: look into using Immutable.Map() or other possible "enum" libraries
const KeyCodes :KeyCodeEnum = Object.freeze({
  ENTER: 'Enter',
  ESCAPE: 'Escape',
});

export default KeyCodes;
export type {
  KeyCode,
  KeyCodeEnum,
};
