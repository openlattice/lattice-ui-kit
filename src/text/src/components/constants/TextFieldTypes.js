/*
 * @flow
 */

type TextFieldTypeEnum = {|
  TEXT :'text';
  TEXT_AREA :'textarea';
|};
type TextFieldType = $Values<TextFieldTypeEnum>;

// TODO: look into using Immutable.Map() or other possible "enum" libraries
const TextFieldTypes :TextFieldTypeEnum = Object.freeze({
  TEXT: 'text',
  TEXT_AREA: 'textarea',
});

export default TextFieldTypes;
export type {
  TextFieldType,
  TextFieldTypeEnum,
};
