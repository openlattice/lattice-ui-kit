import ReactSelect, { createFilter } from 'react-select';
import { mergeDeep } from 'immutable';

import SelectController from './SelectController';
import { selectStyles, selectTheme } from '../../../style/select';

export const defaultProps = {
  filterOption: createFilter({ ignoreAccents: false }),
  menuPlacement: 'auto',
  styles: selectStyles,
  theme: selectTheme
};

/* eslint-disable react/jsx-props-no-spreading */
const Select = (props) => (
  <SelectController
      {...props} // eslint-disable-line indent
      render={((selectProps) => <ReactSelect {...mergeDeep(defaultProps, selectProps)} />)} />
);
/* eslint-enable */

export default Select;
