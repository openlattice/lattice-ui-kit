import Creatable from 'react-select/lib/Creatable';
import withProps from '../../../components/withProps';
import emotionStyles from '../../../components/emotionStyles';

export const props = {
  styles: emotionStyles
};

export default withProps(Creatable, props);
