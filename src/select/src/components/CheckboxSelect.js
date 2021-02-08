import ReactSelect, { createFilter } from 'react-select';
import { mergeDeep } from 'immutable';

import DropdownIndicator from './styled/DropdownIndicator';
import Option from './styled/CheckboxOption';
import SelectController from './SelectController';
import ValueContainer from './styled/ValueContainer';

import { selectStyles } from '../../../style/select';

export const defaultProps = {
  components: {
    DropdownIndicator,
    Option,
    ValueContainer,
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
      render={((selectProps) => <ReactSelect {...mergeDeep(selectProps, defaultProps)} />)} />
);
/* eslint-enable */

export default CheckboxSelect;
