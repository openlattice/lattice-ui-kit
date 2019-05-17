// @flow
import Select from 'react-select';

import Option from './styled/Option';
// import TruncatedValueContainer from './styled/TruncatedValueContainer';

import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  styles: selectStyles,
  menuPlacement: 'auto',
  components: {
    Option,
    // ValueContainer: TruncatedValueContainer
  },
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
};

const CheckboxSelect = withProps(Select, props);
CheckboxSelect.displayName = 'CheckboxSelect';

export default CheckboxSelect;
