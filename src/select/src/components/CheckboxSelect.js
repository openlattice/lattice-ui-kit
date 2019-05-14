// @flow
import Select from 'react-select';

import Option from './styled/Option';

import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  styles: selectStyles,
  menuPlacement: 'auto',
  components: {
    Option,
  },
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
  // controlShouldRenderValue: false,
};

export default withProps(Select, props);
