import React from 'react';
import styled from 'styled-components';
import Creatable from 'react-select/lib/Creatable';
import selectStyles from './styled/selectStyles';

export default styled(Creatable).attrs({
  classNamePrefix: 'lattice-select'
})`
  ${selectStyles}
`;
