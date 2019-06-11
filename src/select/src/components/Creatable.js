import React from 'react';
import ReactSelectCreatable from 'react-select/lib/Creatable';
import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  styles: selectStyles,
  menuPlacement: 'auto'
};

const Creatable = props => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={(selectProps => <ReactSelectCreatable {...defaultProps} {...selectProps} />)} />
);

export default Creatable;
