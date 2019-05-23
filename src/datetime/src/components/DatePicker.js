import { DatePicker } from '@atlaskit/datetime-picker';
import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  selectProps: {
    styles: selectStyles
  },
  // @atlaskit/datetime-picker uses date-fns format tokens
  dateFormat: 'MM/DD/YYYY',
  placeholder: 'MM/DD/YYYY',
};

export default withProps(DatePicker, props);
