// @flow
import styled, { css } from 'styled-components';
import { NEUTRALS } from '../../../colors';

type LabelProps = {
  bold :boolean;
  subtle :boolean;
  required :boolean;
}

const getSubtleStyles = ({ subtle } :LabelProps) => {
  if (subtle) {
    return css`
      color: ${NEUTRALS[1]};
      font-size: 11px;
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
  color: ${NEUTRALS[0]};
  display: inline-block;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '600' : 'normal')};
  letter-spacing: normal;
  margin: 5px 5px 5px 0;
  ${getSubtleStyles};
  ${getRequiredStyles};
`;

export default Label;
