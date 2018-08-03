import styled from 'styled-components';
import Select from 'react-select';
import selectStyles from './styled/selectStyles';
import { LATTICE_SELECT } from './consts';

export default styled(Select).attrs({
  classNamePrefix: LATTICE_SELECT
})`
  ${selectStyles}
`;
