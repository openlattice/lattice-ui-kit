import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { selectStyles } from './styled/StyledSelect';

const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'lattice-select'
})`
  ${selectStyles}
`;

export default StyledSelect;