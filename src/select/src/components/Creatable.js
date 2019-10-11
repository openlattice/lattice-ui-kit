import React from 'react';
import ReactSelectCreatable from 'react-select/creatable';
import { createFilter } from 'react-select';
import { mergeDeep } from 'immutable';

import SelectController from './SelectController';
import selectStyles from '../../../style/selectStyles';

export const defaultProps = {
  styles: selectStyles,
  menuPlacement: 'auto',
  filterOption: createFilter({ ignoreAccents: false })
};

/* eslint-disable react/jsx-props-no-spreading */
const Creatable = (props) => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={((selectProps) => <ReactSelectCreatable {...mergeDeep(defaultProps, selectProps)} />)} />
);
/* eslint-enable */

export default Creatable;
