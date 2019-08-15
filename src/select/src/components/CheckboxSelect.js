import React from 'react';
import ReactSelect from 'react-select';
import { mergeDeep } from 'immutable';

import Option from './styled/CheckboxOption';
import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  styles: selectStyles,
  menuPlacement: 'auto',
  components: {
    Option
  },
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
};

const CheckboxSelect = (props) => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={((selectProps) => <ReactSelect {...mergeDeep(defaultProps, selectProps)} />)} />
);

export default CheckboxSelect;
