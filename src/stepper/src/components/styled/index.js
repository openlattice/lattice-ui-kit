import styled from 'styled-components';
import { NEUTRALS } from '../../../../colors';

const IconLayer = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const StepDivider = styled.div`
  flex: 1 1 auto;
  border-top: 1px solid ${NEUTRALS[2]};
`;

const StepIndex = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const StepWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  padding: 0 8px;
`;

const StepperWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-around;
  padding: 20px 0;
`;

export {
  IconLayer,
  StepDivider,
  StepIndex,
  StepWrapper,
  StepperWrapper
};
