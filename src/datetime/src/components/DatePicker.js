import { DatePicker } from '@atlaskit/datetime-picker';
import withProps from '../../../components/withProps';
import emotionStyles from '../../../components/emotionStyles';

export const props = {
  selectProps: {
    styles: emotionStyles
  }
};

const LatticeDatePicker = withProps(DatePicker, props);

export default LatticeDatePicker;
