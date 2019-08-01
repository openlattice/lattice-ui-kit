import { TimePicker } from '@atlaskit/datetime-picker';
import selectStyles from '../../../style/selectStyles';

export const props = {
  selectProps: { styles: selectStyles },
  timeIsEditable: true
};

TimePicker.defaultProps = props;

export default TimePicker;
