import Select from 'react-select';
import withProps from '../../../components/withProps';
import emotionStyles from '../../../components/emotionStyles';

export const props = {
  styles: emotionStyles
};

export default withProps(Select, props);
