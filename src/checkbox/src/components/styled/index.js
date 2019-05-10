import styled from 'styled-components';
import { NEUTRALS, PURPLES } from '../../../../colors';

const CheckboxLabel = styled.label`
  display: inline-block;
  position: relative;
  color: ${NEUTRALS[0]};
  font-size: 14px;
  font-weight: normal;
  margin: 10px 0;
  min-height: 20px;
  padding: 0 10px 0 30px;
  vertical-align: middle;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

const CheckboxInput = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;
  
  :focus + div {
    background: ${NEUTRALS[1]};
  }
`;

const CheckboxIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: ${PURPLES[6]};
  border-radius: 3px;

  ${CheckboxLabel}:hover input ~ &,
  ${CheckboxLabel} input:focus & {
    background: ${NEUTRALS[1]};
    cursor: pointer;
  }

  ${CheckboxLabel} input:checked ~ & {
    background: ${PURPLES[1]};
  }

  ${CheckboxLabel} input:disabled ~ & {
    background: ${PURPLES[6]};
    cursor: not-allowed;
  }

  ${CheckboxLabel} input:checked:disabled ~ &{
    background: ${NEUTRALS[2]};
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    ${CheckboxLabel} input:checked ~ & {
      display: block;
    }
  }
`;

export {
  CheckboxIndicator,
  CheckboxInput,
  CheckboxLabel,
};
