import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import selectStyles from './styled/selectStyles';

export const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'lattice-select'
})`
  ${selectStyles}
`;

export const StyledCreatable = styled(Creatable).attrs({
  classNamePrefix: 'lattice-select'
})`
  ${selectStyles}
`;
