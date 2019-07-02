// @flow
import styled, { css } from 'styled-components';
import { NEUTRALS, PURPLES } from '../../../../colors';

const CheckboxLabel = styled.label`
  align-items: center;
  color: ${NEUTRALS[0]};
  display: inline-flex;
  font-size: 14px;
  font-weight: normal;
  margin: 10px 0;
  min-height: 20px;
  padding: 0 10px 0 30px;
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
    position: absolute;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  `;
};

const CheckboxIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: ${PURPLES[6]};
  border-radius: 3px;

  :after {
    ${getAfterStyles}
    }
  }
`;

const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;
  
  :hover + ${CheckboxIndicator},
  :focus + ${CheckboxIndicator} {
    background: ${NEUTRALS[1]};
  }

  :checked + ${CheckboxIndicator} {
    background: ${PURPLES[2]};
  }

  :checked:hover + ${CheckboxIndicator},
  :checked:focus + ${CheckboxIndicator} {
    background: ${PURPLES[1]};
  }

  :disabled + ${CheckboxIndicator} {
    background: ${PURPLES[6]};
    cursor: not-allowed;
  }

  :checked:disabled + ${CheckboxIndicator} {
    background: ${NEUTRALS[2]};
  }
`;


export {
  CheckboxIndicator,
  CheckboxInput,
  CheckboxLabel,
};
