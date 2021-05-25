import styled from 'styled-components';

import choicePillStyles from './ChoicePillStyles';

import { duration } from '../../../../style/transitions';

const RadioPillIndicator = styled.span`
  transition: background-color ${duration.swift} ease-out,
    border-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out,
    color ${duration.swift} ease-out;

  ${choicePillStyles};
`;

export default RadioPillIndicator;
