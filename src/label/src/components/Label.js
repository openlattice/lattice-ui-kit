// @flow
import styled, { css } from 'styled-components';

import { NEUTRAL } from '../../../colors';

type LabelProps = {
  bold :boolean;
  hidden :boolean;
  required :boolean;
  subtle :boolean;
}

const getSubtleStyles = ({ subtle } :LabelProps) => {
  if (subtle) {
    return css`
      color: ${NEUTRAL.N500};
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    `;
  }

  return null;
};

const getRequiredStyles = ({ required } :LabelProps) => {
  if (required) {
    return css`
      :after {
        content: '*'
      }
    `;
  }

  return null;
};

const Label = styled.label`
  color: ${NEUTRAL.N700};
  display: inline-block;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '600' : 'normal')};
  letter-spacing: normal;
  margin: 5px 5px 5px 0;
  visibility: ${(props) => props.stealth && 'hidden'};
  ${getSubtleStyles};
  ${getRequiredStyles};
`;

export default Label;
