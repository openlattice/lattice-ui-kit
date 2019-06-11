import React from 'react';
import ReactSelect from 'react-select';
import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  styles: selectStyles,
  menuPlacement: 'auto'
};

const Select = props => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={(selectProps => <ReactSelect {...defaultProps} {...selectProps} />)} />
);

export default Select;
