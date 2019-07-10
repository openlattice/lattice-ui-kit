// @flow
import styled, { css } from 'styled-components';
import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const RadioLabel = styled.label`
  align-items: center;
  color: ${NEUTRALS[0]};
  display: inline-flex;
  margin: 10px 0;
  min-height: 20px;
  padding-left: 30px;
  pointer-events: ${props => (props.readOnly ? 'none' : 'auto')};
  position: relative;
`;

type IndicatorProps = {
  checked :boolean;
};

const getAfterStyles = ({ checked } :IndicatorProps) => {
  if (!checked) {
    return css`
      display: none;
    `;
  }

  return css`
    content: '';
    background-color: ${WHITE};
    border-radius: 50%;
    height: 8px;
    left: 6px;
    position: absolute;
    top: 6px;
    width: 8px;
  `;
};

const RadioIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: ${PURPLES[6]};
  border-radius: 50%;

  :after {
    ${getAfterStyles}
  }
`;

const RadioInput = styled.input.attrs(() => ({
  type: 'radio'
}))`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;

  :hover + div,
  :focus + div {
    background: ${NEUTRALS[1]};
  }

  :checked + div {
    background: ${PURPLES[2]};
  }

  :checked:hover + div,
  :checked:focus + div {
    background: ${PURPLES[1]};
  }

  :disabled + div {
    background: ${PURPLES[6]};
    cursor: not-allowed;
  }

  :checked:disabled + div {
    background: ${NEUTRALS[2]};
  }
`;

export {
  RadioLabel,
  RadioInput,
  RadioIndicator,
};
