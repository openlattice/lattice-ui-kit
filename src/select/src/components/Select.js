import styled from 'styled-components';
import Select from 'react-select';
import selectStyles from './styled/selectStyles';

export default styled(Select).attrs({
  classNamePrefix: 'lattice-select'
})`
  ${selectStyles}
`;
