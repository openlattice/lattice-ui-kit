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
  default: NEUTRAL.N700,
  success: GREEN.G300,
  danger: RED.R300,
  warning: YELLOW.Y200
});

const getFontColor = getStyleVariation('mode', {
  warning: NEUTRAL.N900
}, 'white');

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
