import styled from 'styled-components';

import choiceButtonStyles from './ChoiceButtonStyles';

import { duration } from '../../../../style/transitions';

const CheckboxButtonIndicator = styled.span`
  transition: background-color ${duration.swift} ease-out,
    border-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out,
    color ${duration.swift} ease-out;

  ${choiceButtonStyles};
`;

export default CheckboxButtonIndicator;
