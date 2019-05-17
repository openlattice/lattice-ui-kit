// @flow
import Select from 'react-select';

import Option from './styled/CheckboxOption';

import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  styles: selectStyles,
  menuPlacement: 'auto',
  components: {
    Option
  },
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
};

const CheckboxSelect = withProps(Select, props);
CheckboxSelect.displayName = 'CheckboxSelect';

export default CheckboxSelect;
