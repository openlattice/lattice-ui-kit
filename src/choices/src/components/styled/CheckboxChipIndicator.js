import styled from 'styled-components';

import choiceChipStyles from './ChoiceChipStyles';

import { duration } from '../../../../style/transitions';

const CheckboxChipIndicator = styled.span`
  transition: background-color ${duration.swift} ease-out,
    border-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out,
    color ${duration.swift} ease-out;

  ${choiceChipStyles};
`;

export default CheckboxChipIndicator;
