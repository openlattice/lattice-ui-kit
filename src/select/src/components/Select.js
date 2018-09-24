import Select from 'react-select';
import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  styles: selectStyles
};

export default withProps(Select, props);
