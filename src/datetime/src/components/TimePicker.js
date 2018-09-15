import { TimePicker } from '@atlaskit/datetime-picker';
import withProps from '../../../components/withProps';
import emotionStyles from '../../../components/emotionStyles';

export const props = {
  selectProps: {
    styles: emotionStyles
  }
};

export default withProps(TimePicker, props);
