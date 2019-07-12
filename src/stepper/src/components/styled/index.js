import styled, { css } from 'styled-components';
import { NEUTRALS } from '../../../../colors';

const IconLayer = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const getDividerOrientationStyles = ({ vertical }) => {
  if (vertical) {
    return css`
      min-height: 20px;
      border-left: 2px solid ${NEUTRALS[4]};
       /* step padding + half icon - 1 */
      margin-left: 19px;
    `;
  }

  return css`
    border-top: 2px solid ${NEUTRALS[4]};
  `;
};

const StepDivider = styled.div`
  flex: 1 1 auto;
  ${getDividerOrientationStyles};
`;

const StepIndex = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const StepWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  padding: 10px;
  cursor: ${props => props.onClick && 'pointer'};
`;

const getStepperOrientationStyles = ({ vertical }) => {
  if (vertical) {
    return css`
      align-items: flex-start;
      flex-direction: column;
      justify-content: start;
    `;
  }

  return css`
    flex-direction: row;
    justify-content: space-around;
  `;
};

const StepperWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  ${getStepperOrientationStyles};
`;

export {
  IconLayer,
  StepDivider,
  StepIndex,
  StepperWrapper,
  StepWrapper,
};
