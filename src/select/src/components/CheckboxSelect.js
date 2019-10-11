import React from 'react';
import ReactSelect, { createFilter } from 'react-select';
import { mergeDeep } from 'immutable';

import Option from './styled/CheckboxOption';
import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  components: {
    Option
  },
  closeMenuOnSelect: false,
  filterOption: createFilter({ ignoreAccents: false }),
  hideSelectedOptions: false,
  isMulti: true,
  menuPlacement: 'auto',
  styles: selectStyles,
};

/* eslint-disable react/jsx-props-no-spreading */
const CheckboxSelect = (props) => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={((selectProps) => <ReactSelect {...mergeDeep(defaultProps, selectProps)} />)} />
);
/* eslint-enable */

export default CheckboxSelect;
