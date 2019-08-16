import React from 'react';
import ReactSelect from 'react-select';
import { mergeDeep } from 'immutable';

import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  styles: selectStyles,
  menuPlacement: 'auto'
};

/* eslint-disable react/jsx-props-no-spreading */
const Select = (props) => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={((selectProps) => <ReactSelect {...mergeDeep(defaultProps, selectProps)} />)} />
);
/* eslint-enable */

export default Select;
