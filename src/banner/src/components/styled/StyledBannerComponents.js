// @flow

import styled, { css } from 'styled-components';

import {
  GREEN_1,
  NEUTRALS,
  RED_1,
  WHITE,
  YELLOW_1,
} from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

type ContainerProps = {
  maxHeight ? :string;
  isOpen ? :boolean;
  sticky ? :boolean;
}

const backgroundColor = getStyleVariation('mode', {
  default: NEUTRALS[0],
  success: GREEN_1,
  danger: RED_1,
  warning: YELLOW_1
});

const getMaxHeight = (props :ContainerProps) => {
  const { maxHeight, isOpen } = props;
  if (!isOpen) return '0';
  return maxHeight;
};

const getFontColor = getStyleVariation('mode', {
  default: WHITE,
  success: WHITE,
  danger: WHITE,
  warning: NEUTRALS[0]
});

const getPosition = (props :ContainerProps) => {
  const { sticky } = props;
  if (sticky) {
    // WARNING: sticky position does not work in Internet Explorer
    return css`
      position: sticky;
      top: 0;
      z-index: 500;
    `;
  }
  return null;
};

const Container = styled.div`
  background-color: ${backgroundColor};
  color: ${getFontColor};
  max-height: ${getMaxHeight};
  overflow: hidden;
  transition: max-height ${duration.enter} ease-in-out;
  ${getPosition}
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 900px;
  padding: 10px;
  min-width: 0;
`;

const IconWrapper = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  margin-right: 5px;
`;

export {
  Container,
  Content,
  IconWrapper
};
