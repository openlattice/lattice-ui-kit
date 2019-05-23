import { TimePicker } from '@atlaskit/datetime-picker';
import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  selectProps: {
    styles: selectStyles
  }
};

export default withProps(TimePicker, props);
