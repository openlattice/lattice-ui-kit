import Creatable from 'react-select/lib/Creatable';
import withProps from '../../../components/withProps';
import selectStyles from '../../../style/selectStyles';

export const props = {
  styles: selectStyles
};

export default withProps(Creatable, props);
