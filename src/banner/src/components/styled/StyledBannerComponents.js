// @flow

import styled from 'styled-components';

import {
  GREEN,
  NEUTRAL,
  RED,
  YELLOW,
} from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStickyPosition, getStyleVariation } from '../../../../utils/StyleUtils';

type ContainerProps = {
  maxHeight ? :string;
  isOpen ? :boolean;
  sticky ? :boolean;
}

const backgroundColor = getStyleVariation('mode', {
  default: NEUTRAL.N100,
  success: GREEN.G100,
  danger: RED.R100,
  warning: YELLOW.Y100
});

const getFontColor = getStyleVariation('mode', {
  default: NEUTRAL.N900,
  success: GREEN.G400,
  danger: RED.R400,
  warning: YELLOW.Y400
});

const getMaxHeight = (props :ContainerProps) => {
  const { maxHeight, isOpen } = props;
  if (!isOpen) return '0';
  return maxHeight;
};

const Container = styled.div`
  background-color: ${backgroundColor};
  color: ${getFontColor};
  max-height: ${getMaxHeight};
  overflow: hidden;
  transition: max-height ${duration.enter} ease-out;
  ${getStickyPosition}
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
