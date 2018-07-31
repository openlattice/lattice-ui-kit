import styled from 'styled-components';
import Creatable from 'react-select/lib/Creatable';
import selectStyles from './styled/selectStyles';
import { LATTICE_SELECT } from './consts';

export default styled(Creatable).attrs({
  classNamePrefix: LATTICE_SELECT
})`
  ${selectStyles}
`;
