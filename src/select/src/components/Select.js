import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { selectStyles } from './styled/StyledSelect';

const StyledSelect = styled(Select)`
  ${selectStyles}
`;

const LatticeSelect = (props) => (
  <StyledSelect
      classNamePrefix="lattice-select"
      {...props} />
);

export default LatticeSelect;